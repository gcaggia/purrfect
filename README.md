# Purrfect Creation Dashboard App

Welcome to the Purrfect Creations Dashboard App.

This application consists of a frontend (client) which is a basic React App and a backend (server/api) using NestJS.

Here is a quick guide about how to run the application.

There are two ways to run this app:
- Local environnment
- Docker

Note: Before using this app, you will need an Airtable account and a valid API key.
More information [here](https://airtable.com/api).

## Configuration

Please copy the `.env.example` located in `src/server/` to a new `.env` file in the same folder. 
Update this file with you Airtable private key and base id.

## Local environment

In Order to run the application natively on your computer, you will need to install nodejs v16. 
Check the .nvmrc file located at the root of the project to know the exact nodejs version.

**Steps:**
1. Start the server (backend api): read more [here](src/server/README.md)
2. Start the client (frontend): read more [here](src/client/README.md)

## Docker

Remember to configure the `src/server` `.env` file first.

It is pretty simple to run the application with docker: 

```bash
cd /src
docker-compose up
```

That's it!
