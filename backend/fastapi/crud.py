from sqlalchemy.orm import Session
import models, schemas

def create_plant(db: Session, plant: schemas.Plant):
    db_plant = models.Plant(**plant.dict())
    db.add(db_plant)
    db.commit()
    db.refresh(db_plant)
    return db_plant

def get_image(db: Session, plantId: int):
    return db.query(models.Plant).filter(models.Plant.plantId == plantId).first().detailPictureUrl  