from fastapi import FastAPI
import pickle
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

similarity_matrix = pickle.load(open("main/similarity.pkl","rb"))
new_df = pd.read_csv("main/api_dataframe.csv")


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def hello():
    return {'message':'Hello world'}

@app.get('/recommend/{index}')
def recommend(index:int):
    distances = similarity_matrix[index]
    movies_list = sorted(list(enumerate(distances)),reverse=True,key = lambda x:x[1])[1:16]
    recommended_index = [i[0] for i in movies_list]
    recommended_df = new_df.iloc[recommended_index]
    return recommended_df.reset_index()[['title','poster_path']].to_dict(orient='records')