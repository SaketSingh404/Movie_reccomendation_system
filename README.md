# 🎬 Movie Recommendation System

A full-stack machine learning application that suggests movies based on content similarity. This project utilizes Natural Language Processing (NLP) to analyze movie metadata and a high-performance FastAPI backend to serve recommendations to a sleek, responsive frontend.

---

## 📌 Project Overview

This system helps users discover new movies by finding films with similar themes, genres, and storylines. 

1.  **Data:** 10,000+ movies fetched from the **TMDB API**.
2.  **Engine:** Content-based filtering using **TF-IDF Vectorization** and **Cosine Similarity**.
3.  **Backend:** A RESTful API built with **FastAPI**.
4.  **Frontend:** A clean user interface built with **HTML, CSS, and Vanilla JavaScript**.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Fetch API) |
| **Backend** | Python, FastAPI, Uvicorn |
| **ML/NLP** | Pandas, Scikit-learn (TfidfVectorizer), NLTK |
| **Data Source** | TMDB API |

---

## ⚙️ How It Works



### 1. Data & NLP Pipeline
* **Feature Engineering:** Combined movie overviews, genres, and keywords into a single "tags" column.
* **Preprocessing:** Applied lowercase conversion, removed stop words, and performed stemming to normalize the text.
* **Vectorization:** Transformed text tags into numerical vectors using **TF-IDF**, which weights unique words more heavily to find distinct similarities.

### 2. Similarity Logic
* Calculated the **Cosine Similarity** between all 10,000 movie vectors to create a similarity matrix.
* When a user selects a movie, the system sorts the matrix to find the top 15 most mathematically similar films.

### 3. API & UI
* The **FastAPI** endpoint receives a movie title, runs the recommendation function, and returns a JSON response.
* The **Frontend** uses the JavaScript `fetch()` API to display these results dynamically without a page reload.

---

## 🚀 Getting Started

### Prerequisites
* Python 3.8+
* A modern web browser

### Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/](https://github.com/)[YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME].git
   cd [YOUR_REPO_NAME]
   Install dependencies:

Bash
pip install -r requirements.txt
Run the Backend:

Bash
uvicorn main:app --reload
The API will be running at http://127.0.0.1:8000

Launch the Frontend:
Open index.html in your browser.

📂 Folder Structure
Plaintext
├── data/               # TMDB dataset (CSV)
├── models/             # Exported similarity matrix & TF-IDF model
├── main.py             # FastAPI backend logic
├── index.html          # Frontend UI
├── style.css           # UI Styling
├── script.js           # Frontend logic & API calls
└── requirements.txt    # Python packages
🌟 Future Scope
Hybrid Filtering: Adding Collaborative Filtering (user ratings) for better accuracy.

Real-time Posters: Fetching movie posters directly from TMDB for a better UI.

Cloud Deployment: Hosting the API on Render/Heroku and the UI on Vercel.

Developed by [YOUR NAME] LinkedIn | Portfolio