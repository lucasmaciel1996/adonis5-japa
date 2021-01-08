FROM node:12.20.1-alpine

ENV ENV_SILENT=true

WORKDIR /app

COPY --chown=node:node . /app

# USER node

EXPOSE 3333

CMD ['node','serve.js']
