import requests
import os 
from dotenv import load_dotenv  

load_dotenv()  
API_URL = "https://router.huggingface.co/hf-inference/models/nlptown/bert-base-multilingual-uncased-sentiment"
HF_API_TOKEN = os.getenv("HF_API_TOKEN") 
headers = {
    "Authorization": f"Bearer {HF_API_TOKEN}"
}

def query(text):
    payload = {"inputs": text}
    response = requests.post(API_URL, headers=headers, json=payload)

    result = response.json()
    result = result[0]
    best = max(result, key=lambda x: x["score"])

    stars = int(best["label"][0])

    if stars in [1, 2]:
        sentiment = "negative"
    elif stars == 3:
        sentiment = "neutral"
    else:
        sentiment = "positive"

    return {
        "score": best["score"],
        "sentiment": sentiment
    }

