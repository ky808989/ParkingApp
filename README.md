# ParkingCalAppNodeMongo
This App will use the license plate to record the parking time and calculate the parking fee

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
# Debug
Example
```
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! client@0.1.0 build: `react-scripts build`
npm ERR! Exit status 1
npm ERR!
...
```
Try to delete whole node_modules directory and package-lock.json file, then run 'npm install' command 

## Materilize CSS
add js in the ./public/index.html
``` html
<body>
      <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
...
```
link icons in ./public/index.html
``` html
<head>
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 </head>
```