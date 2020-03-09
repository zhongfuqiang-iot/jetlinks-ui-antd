FROM circleci/node:latest-browsers

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn

COPY ./ ./

# RUN npm run test:all

# RUN npm run fetch:blocks
RUN npm run-script build
# CMD ["npm", "run", "build"]

FROM nginx
ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD docker-entrypoint.sh /docker-entrypoint.sh
COPY dist /usr/share/nginx/html
CMD ["sh","/docker-entrypoint.sh"]
#ADD oauth2 /usr/share/nginx/html/oauth2
