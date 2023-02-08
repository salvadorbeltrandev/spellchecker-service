Spellchecker

A Node.js REST-API application built on Express. This application provide spellchecking and suggestions based on a dictionary file.

Prerequisites:
- Node.js
- NPM
- Express

Installation
- Clone the repository to your local machine
- Navigate to the root directory of the project and run npm install to install the required dependencies

Start the application by running npm start or npm dev if you are constantly debugging.

Endpoints
- GET /api/spellcheck/{word}: Example endpoint to get suggestions from the dictionary.

Test
- To test the endpoints, you can use a tool such as Postman.

Docker locally
docker build -t spellchecker-service .
docker run --name spellchecker-service -p 31337:31337 -d spellchecker-service

License
This project is licensed under the MIT License.

