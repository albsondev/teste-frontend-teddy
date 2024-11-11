# Use uma imagem Node.js como base
FROM node:20

# Crie o diretório de trabalho
WORKDIR /app

# Copie o arquivo de dependências e instale
COPY package.json yarn.lock ./
RUN yarn install

# Copie o código do projeto para o container
COPY . .

# Construa o projeto para produção
RUN yarn build

# Exponha a porta onde o app será servido
EXPOSE 3000

# Comando para iniciar o servidor Vite com host e porta específicos
CMD ["yarn", "preview", "--host", "0.0.0.0", "--port", "3000"]
