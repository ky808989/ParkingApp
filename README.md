# ParkingCalAppNodeMongo
## Trello
(https://trello.com/b/ySVfqxVT/parkinglot-nodejs-restful-app "App Trello Board")

## Installation
Please install node v6.10.0 and mongo db version v3.4.6
Check command
```
node -v
mongod -v
```
### Dependencies Packages
#### Server and API
1. express
2. mongoose
3. body-parser
```
npm install --save express mongoose body-parser
```
#### Testing tool
1. mocha
2. nodemon (need to set up)
3. supertest
```
npm install --save mocha nodemon supertest
```

## Testing
1. Check if the following package is completed
    * mocha
    * nodemon
    * supertest
2. Modify scripts in package.json file

```
"scripts": {
    "test": "NODE_ENV=test nodemon --exec 'mocha --recursive -R min'"
  }
```
3. run command
```
npm run test
```

