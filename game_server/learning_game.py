import numpy as np
import random

class FinancialAdvisorModel:
    def __init__(self, actions):
        self.q_table = {}
        self.actions = actions  # ['save', 'spend', 'invest']
        self.alpha = 0.1  # Learning rate
        self.gamma = 0.9  # Discount factor
        self.epsilon = 0.1  # Exploration rate

    def get_state(self, user_data):
        """Returns a string that uniquely identifies the user's current financial state."""
        return f"{user_data['balance']}-{user_data['savings']}-{user_data['investments']}"

    def choose_action(self, state):
        """Selects an action based on the current state using an epsilon-greedy strategy."""
        if random.uniform(0, 1) < self.epsilon:
            return random.choice(self.actions)  # Explore
        else:
            return self.best_action(state)  # Exploit

    def best_action(self, state):
        """Returns the best action for the current state."""
        if state not in self.q_table:
            return random.choice(self.actions)
        return max(self.q_table[state], key=self.q_table[state].get)

    def learn(self, state, action, reward, next_state):
        """Update the Q-value for the state-action pair based on the reward."""
        if state not in self.q_table:
            self.q_table[state] = {a: 0 for a in self.actions}
        if next_state not in self.q_table:
            self.q_table[next_state] = {a: 0 for a in self.actions}

        old_value = self.q_table[state][action]
        next_max = max(self.q_table[next_state].values())

        # Q-learning update rule
        new_value = old_value + self.alpha * (reward + self.gamma * next_max - old_value)
        self.q_table[state][action] = new_value
