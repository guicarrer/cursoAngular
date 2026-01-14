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

# Arquivo Dockerfile - Frontend
```
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /app/dist/nome-do-seu-projeto-angular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
``` 
Onde:
* A primeira parte do Dockerfile cria uma imagem de build usando Node.js para construir o aplicativo Angular.
* A segunda parte usa a imagem oficial do Nginx para servir os arquivos estáticos gerados na etapa de build.
  * Substitua nome-do-seu-projeto-angular pelo nome real do diretório de saída do build Angular.
  * EXPOSE 80: Expõe a porta 80 para acesso externo. NGINX usa a porta 80 por padrão.
  * CMD ["nginx", "-g", "daemon off;"]: Inicia o NGINX em primeiro plano.
  * Construir a imagem Docker - Frontend

```
docker build -t cursoangular-frontend .
```
# Executar o Docker - Frontend
```
docker run -p 80:80 --name cursoangular-frontend-container -d cursoangular-frontend
```
Onde 
* -p 4200:80 mapeia a porta 80 do container para a porta 4200 da máquina hospedeira.
Primeiro número é a porta da máquina hospedeira e o segundo número é a porta do container.
* --name cursoangular-frontend-container define um nome amigável para o container.
* -d executa o container em segundo plano (detached mode).
  * cursoangular-frontend é o nome da imagem que você está executando.
  * Para parar o container:
```
docker stop cursoangular-frontend-container
```
Para iniciar o container novamente:
```
docker start cursoangular-frontend-container
``` 
# Acessar a aplicação
* A aplicação frontend estará acessível em http://localhost:80 (ou http://localhost:4200 se você mapeou para essa porta).
* A API JSON estará acessível em http://localhost:4000

