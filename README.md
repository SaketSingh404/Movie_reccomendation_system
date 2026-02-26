# 🎬 Movie Recommendation System

A content-based Movie Recommendation System built using **FastAPI** and NLP techniques.
Select a movie and get similar movie recommendations instantly.

---

## Features

- 🔎 Searchable dropdown with 7500+ movies
- 🎯 Content-based recommendation system
- 🧠 NLP preprocessing (stopword removal, stemming)
- 📊 Tf-Idf embeddings for similarity calculation
- ⚡ FastAPI backend
- 🖼️ Movie posters included in Fast API response
- 🌐 Frontend integration using Vanilla JavaScript

---

## 🛠️ Tech Stack

### Backend
- Python
- FastAPI
- Pandas
- NumPy
- Requests
- Scikit-learn

### Frontend
- HTML
- CSS
- JavaScript
- JSON

---

## 🧠 How It Works

1. Movie metadata is cleaned and preprocessed:
   - Lowercasing
   - Punctuation removal
   - Stopword removal

2. Word embeddings are generated using Tf-Idf Vectorizer.

3. Cosine similarity is computed between movie vectors.

4. When a movie is selected:
   - Its `index` is sent to `http://127.0.0.1:8000/recommend/{index}`
   - The API returns top N similar movies including:
     - title
     - poster URL
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SaketSingh404/Movie_reccomendation_system.git
cd Movie_reccomendation_system
```

### 2️⃣ Create virtual environment

```bash
python -m venv .venv
```

### 3️⃣ Activate virtual environment

**Windows**
```bash
.venv\Scripts\activate
```

**Mac/Linux**
```bash
source .venv/bin/activate
```

### 4️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 5️⃣ Generate similarity matrix

Go to ../Building ML model/Vectorizing Text.ipynb -> Run cells in respective order to generate similarity.pkl

### 6️⃣ Run FastAPI server

```bash
uvicorn main.fastapi_endpoint:app --reload
```

Server runs at:

```
http://127.0.0.1:8000
```

---

## 📡 API Endpoint

### Get Recommendations

```
http://127.0.0.1:8000/recommend/{index}
```
### API Docs

```
http://127.0.0.1:8000/docs
```
### 7️⃣ Run index.html file
Run using VS code live server extension
OR
Open a new terminal inside the project folder:

```bash
python -m http.server 5500
```

Then open in browser:

```
http://127.0.0.1:5500
```

---

## 📈 Future Improvements

- We can add collaborative filtering
- Deployment using Docker
- Deploy to cloud (AWS / Azure)
- Improve UI/UX

---

## 👨‍💻 Author

Saket Kumar Singh

---
