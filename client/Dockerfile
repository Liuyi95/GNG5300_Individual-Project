FROM node:16.17.1 as build
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
COPY . .
EXPOSE 3000
# RUN chown -R node /usr/src/app
RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
USER node
CMD ["npm", "start"]