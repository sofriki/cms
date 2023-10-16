FROM node:18-alpine as build

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn config set network-timeout 600000 -g && yarn global add node-gyp && yarn install

ENV PATH /app/node_modules/.bin:$PATH

COPY ./src ./src

RUN yarn build

# Creating final production image
FROM node:18-alpine

RUN apk add --no-cache vips-dev

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build

COPY package.json yarn.lock ./
COPY ./config ./config
COPY ./database ./database
COPY ./src ./src

EXPOSE 1337

CMD ["yarn", "start"]