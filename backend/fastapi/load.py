import csv
import models
from database import SessionLocal, engine

db = SessionLocal()

models.Base.metadata.create_all(bind=engine)

with open("plant_plants.csv", "rt", encoding="UTF-8") as plants:
    csv_reader = csv.DictReader(plants)

    for row in csv_reader:
        db_record = models.Plant(
            plantId = row["plantId"],
            plantName = row["plantName"],
            detailPictureUrl = row["detailPictureUrl"]
        )
        db.add(db_record)
    
    db.commit()

db.close()
