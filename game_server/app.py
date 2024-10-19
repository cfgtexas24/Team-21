from flask import Flask, request, jsonify
from learning_game import FinancialAdvisorModel

app = Flask(__name__)

# Create an instance of the financial advisor model with actions: 'save', 'spend', 'invest'
actions = ['save', 'spend', 'invest']
model = FinancialAdvisorModel(actions)

# Endpoint for getting personalized financial advice
@app.route('/advice', methods=['POST'])
def get_advice():
    user_data = request.json  # {balance, savings, investments}
    state = model.get_state(user_data)
    
    # Choose an action based on the current state
    action = model.choose_action(state)
    
    return jsonify({"advice": action})

# Endpoint to allow learning from the user's action
@app.route('/learn', methods=['POST'])
def learn():
    data = request.json  # {state, action, reward, next_state}
    
    model.learn(data['state'], data['action'], data['reward'], data['next_state'])
    
    return jsonify({"status": "learning updated"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
