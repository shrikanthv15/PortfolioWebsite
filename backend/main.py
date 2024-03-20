# app.py

from flask import Flask, request, jsonify
from textblob import TextBlob  
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)

@app.route('/sentiment-analysis', methods=['POST'])
def sentiment_analysis():
    data = request.get_json()
    text = data.get('text', '')

    # Perform sentiment analysis using a library like TextBlob
    analysis = TextBlob(text)
    sentiment = 'positive' if analysis.sentiment.polarity > 0 else 'negative' if analysis.sentiment.polarity < 0 else 'neutral'

    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
