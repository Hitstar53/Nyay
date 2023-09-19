# -*- coding: utf-8 -*-
"""Legal_Research.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1XKEqduzILqjijbW9CtX44ibkYQpg0utF
"""

import pandas as pd
from transformers import BertTokenizer, BertModel
import torch
from sklearn.metrics.pairwise import cosine_similarity

data = {
    'Case_Description': [
        "The plaintiff alleges that the defendant breached a contract by not delivering the goods on time.",
        "In a criminal case, the defendant was charged with theft and pleaded not guilty.",
        "A family dispute over property distribution in a divorce case.",
        "A civil rights case involving allegations of discrimination in the workplace.",
        "A personal injury case where the plaintiff seeks compensation for medical expenses and pain and suffering."
    ],
    'Court_Details': [
        "State Superior Court, New York",
        "Federal District Court, California",
        "Family Court, Texas",
        "Employment Tribunal, London",
        "Circuit Court, Illinois"
    ],
    'Case_Outcome': [
        "The court ruled in favor of the plaintiff, awarding damages of $50,000.",
        "The defendant was found guilty and sentenced to 1 year in prison.",
        "The family reached a settlement agreement with the help of a mediator.",
        "The case was settled out of court with both parties agreeing to terms.",
        "The plaintiff was awarded $100,000 in compensation."
    ]
}

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

case_descriptions = data['Case_Description']
print(case_descriptions)
embeddings_all_cases = []
for description in case_descriptions:
    inputs = tokenizer(description, return_tensors='pt', padding=True, truncation=True)
    outputs = model(**inputs)
    embeddings = outputs.last_hidden_state.mean(dim=1)
    embeddings_all_cases.append(embeddings)

input_case = "Defamation rumours over marriage"
inputs = tokenizer(input_case, return_tensors='pt', padding=True, truncation=True)
outputs = model(**inputs)
embeddings_input = outputs.last_hidden_state.mean(dim=1)

similarities = cosine_similarity(embeddings_input.detach().numpy(), torch.stack(embeddings_all_cases).squeeze().detach().numpy())
print(similarities)

N = 5
top_n_indices = similarities[0].argsort()[-N:][::-1]

recommended_cases = [case_descriptions[i] for i in top_n_indices]
print("Recommended Cases:")
for i, case in enumerate(recommended_cases):
    print(f"Case {i + 1}: {case}")

court_details = data['Court_Details']
case_outcomes = data['Case_Outcome']
for i, case in enumerate(recommended_cases):
    print(f"Case {i + 1}: {case}")
    print(f"Court Details: {court_details[top_n_indices[i]]}")
    print(f"Case Outcome: {case_outcomes[top_n_indices[i]]}")