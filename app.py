from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Bienvenue sur l'API Flask du groupe 5 de cloud-computing !"

@app.route('/message', methods=['POST'])
def get_message():
    data = request.json
    name = data.get("name", "inconnu")
    return jsonify({"message": f"Bonjour, {name} ! Bienvenue à toi!."})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)