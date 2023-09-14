import torch
import pandas as pd
from transformers import BertTokenizer, BertModel
from sklearn.metrics.pairwise import cosine_similarity

# Load the CSV file
def recommendcases(text):
    cases_df = pd.read_csv('DjangoServer\cases.csv')

    # Initialize the BERT tokenizer and m
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
    model = BertModel.from_pretrained('bert-base-uncased')

    # Extract case descriptions, court details, and case outcomes
    case_descriptions = cases_df['Case_Description']
    court_details = cases_df['Court_Details']
    case_outcomes = cases_df['Case_Outcome']

    # Calculate embeddings for all cases
    embeddings_all_cases = []
    for description in case_descriptions:
        inputs = tokenizer(description, return_tensors='pt',
                        padding=True, truncation=True)
        outputs = model(**inputs)
        embeddings = outputs.last_hidden_state.mean(dim=1)
        embeddings_all_cases.append(embeddings)

# Define the input case description

# Calculate embeddings for the input case
    inputs = tokenizer(text, return_tensors='pt',
                    padding=True, truncation=True)
    outputs = model(**inputs)
    embeddings_input = outputs.last_hidden_state.mean(dim=1)

    # Calculate cosine similarities
    similarities = cosine_similarity(embeddings_input.detach().numpy(
    ), torch.stack(embeddings_all_cases).squeeze().detach().numpy())

    # Define the number of top similar cases to retrieve
    N = 5
    top_n_indices = similarities[0].argsort()[-N:][::-1]

    # Retrieve and print recommended cases
    recommended_cases_dict = {}

    # Retrieve and store recommended cases, court details, and case outcomes
    for i, index in enumerate(top_n_indices):
        recommended_cases_dict[f"Recommended Case {i + 1}"] = {
            "Case Description": case_descriptions[index],
            "Court Details": court_details[index],
            "Case Outcome": case_outcomes[index]
        }

    return recommended_cases_dict
