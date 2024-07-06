from fastapi import FastAPI, HTTPException
import httpx
import dotenv

app = FastAPI()

@app.get('/')
async def hello():
    return {'message': 'This the first service', 'payload': '1st item'}

@app.get('/api/get/frontend_data')
def frontend_data():
    #logica para realizar multiples peticiones
    movies = httpx.get('http://localhost:8081/get_movies')
    actors = httpx.get('http://localhost:8082/get_actors')
    return {'movies': movies.json(), 'actors': actors.json()}