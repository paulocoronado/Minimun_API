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
def sum_numbers(a: float, b: float):
    return {"a": a, "b": b, "sum": a + b}
