### coding-challenge-charging-station-management-system

This repository created for doing has.to.be company coding-challenge.

# Problem description
A CSMS (charging station management system) such as be.ENERGISED is used to manage charging stations, charging
processes and customers (so-called eDrivers) amongst other things.
One of the most important functionalities of such a CSMS is to calculate a price to a particular charging process so that
the eDriver can be invoiced for the consumed services. Establishing a price for a charging process is usually done by
applying a rate to the CDR (charge detail record) of the corresponding charging process.

### Challenge 1
Implement a small RESTful API that will expose the following endpoint
POST /rate
Will apply the given rate to the corresponding CDR.

Input
```
{
 "rate": { "energy": 0.3, "time": 2, "transaction": 1 },
 "cdr": { "meterStart": 1204307, "timestampStart": "2021-04-05T10:04:00Z", "meterStop": 1215230, "timestampStop": "2021-04-05T11:27:00Z" }
}
```

Output
```
{
 "overall": 7.04
 "components": { "energy": 3.277, "time": 2.767, "transaction": 1 }
}
```

### Challenge 1 Solution

`I used NestJS freamwork For prepare this endpoint and :`
 * Jest for testing tramework
 * Compodoc for code documentation tool
 * Swagger for API documentation
 * Postman for API testing
 * Dockerfile to dockerize

# How to install:

In order to use this repository:

1- clone it using this command:

    git clone https://github.com/HemenRohani/CodingChallenge.CSMS.git

2-run this command inside `CodingChallenge.CSMS` folder:

     npm install

# How to use:

    npm run start  // to start app

    npm run test  // to run unit tests

    npm run test:e2e  // to run end to end test

    npm run compodoc  // to start code documentaion on [http://localhost:7000](http://127.0.0.1:7000)

You can import [postman_collection.json](postman_collection.json) in Postman for testing API.


### Challenge 2 : Suggest improvements to the API design

# -1 Calculate consumed energy and time duration in client

I think calculate consumed energy and time duration in client-side can reduce the payload size and reduce server proccessing.

# -2 Store rate info in server-side

In my opinion get rate info(`{ "energy": 0.3, "time": 2, "transaction": 1 }`) in request can make some problem and it's better to get this data from database.
