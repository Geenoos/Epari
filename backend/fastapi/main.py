from tkinter import Image
from fastapi import FastAPI, UploadFile, Depends
from sqlalchemy.orm import Session
import models, database, crud, schemas, AI
import PIL, io, os
from PIL import Image
import uvicorn

# 최초 DB 생성할 때는 1번 코드를 주석해제하여 사용(2번은 주석처리)
# DB가 이미 존재할 때는 2번 코드를 사용(1번 주석처리)
# 1.
# models.database.Base.metadata.create_all(bind=database.engine)

# 2.
models.database.Base.metadata.bind = database.engine

app = FastAPI()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/ai")
def say_hello():
    return { "message": "a201 team dolarge"}

@app.post("/ai/plantAi")
async def get_name(capturedImg: UploadFile, db: Session = Depends(get_db)):
    # db_plant = crud.create_plant(db, plant=plant)
    # 이미지 받아와서 어떤 식물인지 파악하기
    image_content = await capturedImg.read()
    image = Image.open(io.BytesIO(image_content))
    
    # 파악한 식물 이름 저장
    # result >> 유사도 상위 3개 식물(plantId, plantName, similarity)을 담은 리스트 형태
    result = AI.predict(image)

    data = []
    for plant in result:
        # 해당 식물의 대표이미지 받아오기
        plantInt = int(plant['plantId'][1:3])
        img = crud.get_image(db=db, plantId=plantInt)
        data.append({
            'plantId': plantInt,
            'plantName': plant['plantName'],
            'detailPictureUrl': img
        })
    return data

if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8001)