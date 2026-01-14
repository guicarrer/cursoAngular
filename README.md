# Executar o servidor JSON
```
npm run server
```

# Arquivo Dockerfile - API
```
FROM node:22-alpine

WORKDIR /app

RUN npm install -g json-server@0.17.4

COPY ./db.production.json .

EXPOSE 4000

ENTRYPOINT json-server --watch db.production.json --host 0.0.0.0 --port 4000
```

Onde:
* FROM node:22-alpine: Usa a imagem oficial do Node.js baseada no Alpine Linux
* WORKDIR /app: Define o diretório de trabalho dentro do container
* RUN npm install -g json-server@0.17.4: Instala o json-server globalmente
* COPY ./db.production.json .: Copia o arquivo db.production.json para o diretório de trabalho do container
* EXPOSE 4000: Expõe a porta 4000 para acesso externo
* ENTRYPOINT json-server --watch db.production.json --host

# Construir a imagem Docker - API
```
docker build -t cursoangular-api .
```

# Executar o Docker - API
```
docker run -p 4000:4000 --name cursoangular-api-container -d cursoangular-api 
```
Onde 
* -p 4000:4000 mapeia a porta 4000 do container para a porta 4000 da máquina hospedeira.
Primeiro número é a porta da máquina hospedeira e o segundo número é a porta do container.
* --name cursoangular-api-container define um nome amigável para o container.
* -d executa o container em segundo plano (detached mode).
* cursoangular-api é o nome da imagem que você está executando.

Para parar o container:
```
docker stop cursoangular-api-container
```
Para iniciar o container novamente:
```
docker start cursoangular-api-container
``` 