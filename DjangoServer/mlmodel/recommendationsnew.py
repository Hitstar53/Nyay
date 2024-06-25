"""Legal_Case_Classification_using_TFIDF.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/147qAYiMC1H4xP2H7P0HX__LsKPO1h0_E
"""

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

def suggest_lawyers(user_legal_problem, num_lawyers=5):
    df_legal_problems = pd.read_csv('DjangoServer/legal_problems.csv')
    df_lawyers = pd.read_csv('DjangoServer/lawyers.csv')

    categories = [
        "Bankruptcy Lawyer",
        "Business (Corporate) Lawyer",
        "Criminal Defense Lawyer",
        "Estate Planning Lawyer",
        "Family Lawyer",
        "Immigration Lawyer",
        "Intellectual Property Lawyer",
        "Personal Injury Lawyer",
        "Tax Lawyer",
        "Constitutional Lawyer",
        "Entertainment Lawyer",
        "Employment and Labor Lawyer"
    ]

    category_to_id = {category: idx for idx, category in enumerate(categories)}

    # Create a TF-IDF vectorizer
    tfidf_vectorizer = TfidfVectorizer(stop_words='english')

    # Fit and transform the text data
    tfidf_matrix = tfidf_vectorizer.fit_transform(df_legal_problems['Legal Issue'])

    # Transform user's legal problem into a TF-IDF vector
    user_legal_problem_tfidf = tfidf_vectorizer.transform([user_legal_problem])

    # Calculate cosine similarities between user's problem and legal problems
    cosine_similarities = linear_kernel(user_legal_problem_tfidf, tfidf_matrix).flatten()

    # Get the index of the most similar legal problem
    most_similar_index = cosine_similarities.argmax()

    # Get the predicted category
    predicted_category = df_legal_problems.loc[most_similar_index, 'Category']

    # Filter lawyers based on the predicted category
    filtered_lawyers = df_lawyers[df_lawyers['Category'] == predicted_category]

    # Sort lawyers by user rating score in descending order
    filtered_lawyers = filtered_lawyers.sort_values(by='User Rating', ascending=False)

    # Get the top N lawyers
    top_lawyers = filtered_lawyers.head(num_lawyers).to_dict(orient="records")

    return top_lawyers