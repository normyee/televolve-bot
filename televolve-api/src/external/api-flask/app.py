from flask import Flask, make_response, jsonify, request
from service.sentiment_analysis import sentiment_analysis

app = Flask("DAVINCI")

@app.route("/davinci", methods=["POST"])
def processMessage():

    data = request.get_json()

    if data:
        content = data.get("content")
        api_key = data.get("api_key")
        print(api_key)
        reply = sentiment_analysis(content, api_key)
        
        if content is not None:
            response_data = {
                "success": True,
                "result": reply
            }
            return make_response(jsonify(response_data))
        
    return make_response(jsonify({"error": "Field 'content' is missing in the JSON data"}), 400)

app.run()