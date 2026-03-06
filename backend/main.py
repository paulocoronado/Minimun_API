from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Para que el navegador permita que tu HTML/JS (otro origen) llame la API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # para demo; en prod limita el dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/sum")
def sum_numbers(number_1: float, number_2: float):
    return {"a": number_1, "b": number_2, "sum": number_1 + number_2}
