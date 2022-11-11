# BetterPoll-Backend
This is the backend repository for the BetterPoll android application currently under development. 

The APIs are being created using node js, express js and mySQL as the database and will be deployed on heroku for testing.<br>

The frontend repo : https://github.com/adityabisht02/Betterpoll

## How to Setup:
1) Install [Node js](https://nodejs.org/en/download/)

2) Clone this repository using ```git clone https://github.com/adityabisht02/BetterPoll-Backend```

3) change directory to the folder containing the index.js file using ```cd BetterPoll-Backend```

4) Run ```npm i``` to install dependencies.

5) Create a mySQL database called "betterpoll". Check here to [install mySQL](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)

6) Run ```npm run initialise-db``` function to create the required tables (after you have created a database named betterpoll).

7) Run ```npm run fill-sample-data``` function to add sample data to tables for testing.

8) Run ```npm start``` to start the server.

## Backend workflow:

![image](https://user-images.githubusercontent.com/89146189/193776877-9a467561-473b-4244-a931-4047adaa3118.png)

![image](https://user-images.githubusercontent.com/89146189/193776946-5c3f4e31-d8b9-4de5-817a-903df399bb5e.png)

![image](https://user-images.githubusercontent.com/89146189/193776983-39589d16-5e10-4b75-bbf3-aba9a4968550.png)

