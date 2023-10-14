# # Creating multi-stage build for production
# FROM node:18-alpine as build
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /opt/app
# COPY package.json yarn.lock ./
# RUN yarn config set network-timeout 600000 -g && yarn global add node-gyp && yarn install
# ENV PATH /opt/app/node_modules/.bin:$PATH
# COPY . .
# RUN yarn build

# # Creating final production image
# FROM node:18-alpine
# RUN apk add --no-cache vips-dev
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /opt/app
# COPY --from=build /opt/node_modules ./node_modules
# COPY --from=build /opt/app ./
# ENV PATH /opt/app/node_modules/.bin:$PATH

# RUN chown -R node:node /opt/app
# USER node
# EXPOSE 1337
# CMD ["yarn", "start"]

FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn global add node-gyp && yarn install
ENV PATH /opt/app/node_modules/.bin:$PATH
RUN yarn build

# Creating final production image
FROM node:18-alpine
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
COPY --from=build /opt/app/node_modules ./node_modules
COPY --from=build /opt/app ./
ENV PATH /opt/app/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["yarn", "start"]

