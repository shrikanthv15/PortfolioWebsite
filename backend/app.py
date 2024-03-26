from flask import Flask, request, jsonify, Response  
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Define the Flask application to use SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///messages.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the SocketIO instance
socketio = SocketIO(app)

# Define CORS origins for SocketIO
socketio.init_app(app, cors_allowed_origins="http://localhost:3000")

# Create a model for storing messages in the database
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200))

    def __repr__(self):
        return f'<Message {self.id}>'


@app.route('/')
def hello():
    return "hello"

# API endpoint for sentiment analysis
@app.route('/sentiment-analysis', methods=['POST'])
def sentiment_analysis():
    data = request.get_json()
    text = data.get('text', '')

    # Perform sentiment analysis using TextBlob
    analysis = TextBlob(text)
    sentiment = 'positive' if analysis.sentiment.polarity > 0 else 'negative' if analysis.sentiment.polarity < 0 else 'neutral'

    return jsonify({'sentiment': sentiment})

# SSE endpoint for streaming messages
@app.route('/stream-messages')
def stream_messages():
    def generate_messages():
        with app.app_context():  # Ensure you're within the application context
            messages = Message.query.all()
            for message in messages:
                yield f"data: {message.text}\n\n"

    return Response(generate_messages(), content_type='text/event-stream')

# Route to handle OPTIONS request for send-message endpoint
@app.route('/send-message', methods=['OPTIONS'])
def handle_options():
    response = Response()
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://portfoliowebsite-dzzh.onrender.com')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

# Route to handle actual POST request for send-message endpoint
@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.get_json()
    text = data.get('text', '')
    
    # Store the message in the database
    new_message = Message(text=text)
    db.session.add(new_message)
    db.session.commit()

    # Emit the message to all clients
    socketio.emit('message', {'text': text})  # Remove the broadcast=True argument

    return jsonify({'success': True})

if __name__ == '__main__':
    # Create the database tables
    with app.app_context():
        db.create_all()
    # Run the Flask-SocketIO application
    socketio.run(app, debug=True)
