import requests

def sentiment_analysis(text: list, API_KEY: str) -> str:
    if API_KEY is None:
        raise ValueError("API_KEY field is missing!")
    
    model = "gpt-3.5-turbo"
    prompt = f"Responda em uma única palavra, sendo positivo, negativo ou neutro o sentimento contido no seguinte texto: '{text}'"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }

    data = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.7,
        "max_tokens": 35,
        "n": 1,
        "stop": None
    }

    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers=headers,
        json=data
    )
    if response.status_code != 200:
        raise Exception(f"Request to the API has failed - {response.status_code}: {response.text}")

    reply_message = response.json()

    return reply_message["choices"][0]["message"]["content"]

