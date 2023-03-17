# mexican-lottery-api
## Requirements
- You need to have already installed NodeJs and SQL Server with User and Password login configurated.

## Steps to run de project
- Run `npm install`.
- Then create the ".env" file in the project's root.
- Now create the USERDB=YOURUSERDBHERE and PASSDB=YOURPASSDBHERE inside .env file.
- Next open the "LotteryDB.sql" file located in the project's root and execute the script in SQL Server.
- Finally type command `npm run start` to start the application.

## How to use the API?
- Install Postman.
- You can import the "Lottery.postman_collection.json" to your Postman desktop application.
- "GetAllCards" is to obtain all the available cards from Mexican Lottery, there are about 54 cards ready to use in database!
- "GetAllTables" is to obtain all the tables randomly generated with the API.
- "GenerateTables" is to generate new random tables, the endpoint receives the number of tables to generate as a parameter on the endpoint, for example `localhost:8000/api/lottery/generateTables/5` will generate five different tables. 