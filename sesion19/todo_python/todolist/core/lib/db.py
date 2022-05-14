import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("fir-firestore-3ff16-firebase-adminsdk-yppl2-62b7189635.json")

firebase_admin.initialize_app(cred)

db = firestore.client()