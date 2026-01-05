# EC2 Management Commands

[🇺🇸 English]

## To connect to the application server

```bash
ssh -i "ssh-aws-bootcamp.pem" ubuntu@<PUBLIC_IP>
```

___

## EC2 System Commands

1. Update system repositories: `sudo apt update`
2. Install system dependencies: `sudo apt install python3.10 python3.10-dev libmysqlclient-dev build-essential -y`

___

## Python 3.10 Isolation & Environment Setup

Commands used to ensure application compatibility by isolating the runtime from the system's default Python version.

## 1. Install Python 3.10 via PPA

```Bash
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt install python3.10 python3.10-venv python3.10-dev -y
2. Virtual Environment Creation (projeto_flask):
```

```Bash

python3.10 -m venv projeto_flask
source projeto_flask/bin/activate
```

## 3. Dependency Installation (Inside venv)

```Bash

pip install --upgrade pip
pip install Flask Flask-MySQLdb mysqlclient wtforms passlib
4. Validation & Requirements Export:
```

## Verify version and path

```Bash
python --version
which python
```

## Export for reproducibility

```bash
pip freeze > requirements.txt
```

___

[🇧🇷 Português]

## Para conectar no servidor de aplicação

```Bash
ssh -i "ssh-aws-bootcamp.pem" ubuntu@<PUBLIC_IP>
```

___

## Comandos de Sistema EC2

1. Atualizar repositórios: `sudo apt update`
2. Instalar dependências de sistema: `sudo apt install python3.10 python3.10-dev libmysqlclient-dev build-essential -y`

___

## Isolamento de Ambiente Python 3.10

```bash
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt install python3.10 python3.10-venv python3.10-dev -y
```

## Criação do ambiente da aplicação

```bash
python3.10 -m venv projeto_flask
source projeto_flask/bin/activate
```

## Instalação de dependências e validação

```bash
pip install Flask-MySQLdb mysqlclient wtforms passlib
pip freeze > requirements.txt
```

## 4. Validação e Exportação de Requisitos

## Verificar versão e caminho

```Bash
python --version
which python
```

## Exportar para reprodutibilidade

```Bash
pip freeze > requirements.txt
```

___
