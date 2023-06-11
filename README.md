# Restaurant Management System
Download zip file and unzip it to get started

## Available Scripts
In the project folder, move into server directory:

install server dependencies by running:
### `yarn install` 

Start the server:
### `yarn run dev` 

This starts the development server:


open a new terminal in the project directory:
change directory to the frontend folder

install client dependencies by running:
### `yarn install` 

Run the app:
### `yarn start` 


## NOTE
Database credentials are in the .env file

Incase you run the server and it fails to connect to database saying Bad Aunthentication 
change variable name `USER` in the `.env` file to anything of your choice e.g `MONGOUSER` 
and update it on line `line 15` in `server.js` 