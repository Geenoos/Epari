# from tkinter import Image
# from typing import Optional
from pydantic import BaseModel

class Plant(BaseModel):
    plantId: int
    plantName: str
    # plantKorName: str
    # detailPictureUrl: str