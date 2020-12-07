#build stage
FROM node:lts as build
#prepare workdir
WORKDIR /app
COPY . /app/

# prepare for build
RUN npm install --silent
RUN npm run build

# pre run stage, npm run start/prod is not here because we want to run the container via docker-compose
# move build to new container
FROM node:12-alpine
WORKDIR /app
#copy things from build stage
COPY --from=build /app/build /app/
COPY package.json /app/package.json
#rerun npm install
RUN npm install --silent
RUN apk add --no-cache bash
# expose port
EXPOSE 3000
