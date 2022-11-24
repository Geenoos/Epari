import torch
from torchvision import transforms

import PIL
import json
import os

# cuda가 사용 가능하다면 cuda를, 아니라면 cpu를 디바이스로 지정
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# 모델 불러오기
model = torch.load('./model.pth', map_location=device)
model.eval()

# label 불러오기
labels = []
with open('./flower_class.json', 'r', encoding='utf-8') as labels_file:
    labels_json = json.load(labels_file)
    for key, value in labels_json.items():
        labels.append({
            key: value
        })

def predict(img):
    # 이미지 전처리
    data_transforms = transforms.Compose([
        # 이미지를 224*224 크기로 변환
        transforms.Resize((224,224)),
        # PIL 이미지를 Tensor로 변환
        transforms.ToTensor(),
        # 데이터 정규화 (이미 구해진 평균, 표준편차를 사용)
        transforms.Normalize(mean=[0.507, 0.487, 0.441], std=[0.267, 0.256, 0.276]),
    ])

    transformed_img = data_transforms(img)

    # 학습을 batch 단위로 했기 때문에, 단일 데이터를 입력하기 위해선 차원을 하나 늘려줘야함.
    transformed_img = transformed_img.unsqueeze(dim=0)

    # 모델과 인풋 데이터의 디바이스 위치 통일
    model.to(device)
    transformed_img = transformed_img.to(device)

    # 모델에 적용
    output = model(transformed_img)

    # output sorting 뒤에서부터 가장 유사
    sorted_tensor = torch.argsort(output, dim=1)

    # threshold >> 유사도 임계치. 유사도가 임계치 이상이어야 후보 목록에 올림
    threshold = 7

    # index >> 유사도 상위 3개 식물의 위치
    # similarity >> 해당 식물의 유사도 (소숫점 셋째자리까지 반올림)
    index = []
    similarity = []
    for i in range(3):
        index.append(sorted_tensor[0][-i-1].item())

        similarity_i = output[0][index[i]].item()
        if similarity_i > threshold:
            similarity.append(round(similarity_i, 3))

    # 식물 후보군 목록 전달(각 식물의 id, name, 유사도 포함)
    data = []
    for i in range(len(similarity)):
        data.append({
            'plantId': list(labels[index[i]].keys())[0],
            'plantName': list(labels[index[i]].values())[0],
            'similarity': similarity[i],
        })
    return data