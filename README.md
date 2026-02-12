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

# Usando ogr2ogr cargar el archivo geoJSON a una tabla
ogr2ogr -f "PostgreSQL" \
  PG:"host=localhost user=tu_usuario dbname=tu_base_datos password=tu_pass" \
  "tu_archivo.geojson" \
  -nln nombre_de_la_tabla \
  -lco GEOMETRY_NAME=geom \
  -nlt PROMOTE_TO_MULTI

import geopandas as gpd
from sqlalchemy import create_engine

# 1. Leer el archivo
gdf = gpd.read_file("datos.geojson")

# 2. Conectar a la base de datos
engine = create_engine('postgresql://usuario:password@localhost:5432/mi_base_datos')

# 3. Subir los datos
gdf.to_postgis("nombre_tabla", engine, if_exists='replace', index=False)