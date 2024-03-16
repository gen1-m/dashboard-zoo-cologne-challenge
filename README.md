# Cologne Zoo

The Cologne Zoo application provides a summary of the animals and their relevant health data.
It serves as a tool for zookeepers to get an overview of the animals in the zoo.

This README will provide details on how to run the project for development, and how to build the project for production.

# Setup:
### On Stackblitz:
If you're running this project on StackBlitz, the project should be set-up already. In this case simply run ```npm run dev```

### On your local machine:
To set-up the project on your local machine, the following steps can be used:

1. Fork the project on StackBlitz.
2. Clone the newly-created repository using ```git clone```.
3. The build tool used in this project is npm. Run ```npm install``` to install the necessary dependencies.
4. To spin up a development environment, run ```npm run dev```.

# Running Tests
To run the project tests, use the ```npm run test``` command.

# Building for production

To build the project for use in production:
1. Run ```npm run build``` to build the project.
2. Run ```npm run start``` to run the server associated with the project. 
3. To stop the server, you may simply terminate it by using CTRL-C.

# Endpoints

**GET** `/api/animals` - Responds with  `Array<Animal>`.


Sample Response:
```json
[
  {
    "id": "4136cd0b-d90b-4af7-b485-5d1ded8db252",
    "name": "alice",
    "species": "cow",
    "gender": "male", // "male" | "female"
    "birthdate": "01-01-1970:00.00.00Z", // JavaScript Date object
    "weight": 100, // In kilograms
    "height": 1.00, // In meters
    "favouriteFruit": "banana" // "apple" | "banana" | "cherry"
  }
]
```