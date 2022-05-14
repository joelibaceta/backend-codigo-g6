from sqlite3 import Timestamp
from django.db import models
from datetime import datetime

from core.lib.db import db

# Create your models here.
class Task():

    def create(data):
        ts = str(datetime.timestamp(datetime.now()))
        db.collection("tasks").document(ts).create(data)

    def list():
        task_col = db.collection("tasks")
        tasks_stream = task_col.stream()

        tasks = []

        for task in tasks_stream:
            tasks.append(task.to_dict())

        return tasks