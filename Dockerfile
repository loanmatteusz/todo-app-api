FROM node:18-alpine AS development

WORKDIR /usr/www/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build


FROM node:18-alpine AS production

WORKDIR /usr/www/app

COPY package*.json ./

RUN yarn --only=production

COPY . .

COPY --from=development /usr/www/app/dist ./dist

CMD ["node", "dist/loader"]
