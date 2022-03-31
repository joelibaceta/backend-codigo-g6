# 1. Crear el entorno virtual Windows

```bash
python -m venv myenv
```

# 2. Activar entorno virtual

## Windows

```shell
cd /myenv/Scripts/
activate.bat
```

```powershell
cd /myenv/Scripts/
activate.ps1
```

## Linux / Mac
```
cd /myenv/bin/
source activate
```

# 3. Instalar paquetes python

```bash
pip install flask
```

# 3.1 Instalar paquetes desde requirements.txt

```bash
pip install -r requirements.txt
```


# 4 Ejecutar el servidor flask

```bash
flask run
```