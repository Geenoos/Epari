from sqlalchemy import Column, Integer, String, BLOB
import database
from database import Base

class Plant(database.Base):
    __tablename__ = "plants"

    plantId = Column(Integer, primary_key=True)
    plantName = Column(String(30))
    # plantKorName = Column(String(30))
    detailPictureUrl = Column(String(200))