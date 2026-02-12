* Se recomienda crear **ambientes virtuales** de Python para el proyecto. Con esto se logra que el proyecto quede "iaslado" de las configuraciones del sistema y sea más simple manejar sus propias dependencias. Ver (https://docs.python.org/3/library/venv.html)

    * GNU/Linux:
        * python3 -m venv .myenv
        * source .myenv/bin/activate
    
    * Windows:
        * python -m venv .myenv
        * (A veces se requiere) Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
        * En cmd: .myenv\Scripts\activate.bat
        * En Powershell: .myenv\Scripts\Activate.ps1
    
    * Una vez configurado revisar desde la paleta de comandos de VSCode que el intérprete usado corresponda al del ambiente virtual.

# Para ejecución
pip install fastapi uvicorn
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload