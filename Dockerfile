# Usa un'immagine base di Node
FROM node:20

# Crea una directory di lavoro
WORKDIR /usr/src/app

# Copia il file package.json e package-lock.json
COPY package*.json ./

# Copia il file .env nella directory di lavoro del contenitore
COPY .env .env

# Installa le dipendenze
RUN npm install

# Copia il resto del codice sorgente
COPY . .

# Espone la porta su cui l'app sarà in ascolto
EXPOSE 3016


# Comando per eseguire l'app
CMD ["npm", "start"]
