# Quick Chem Express App

Simple Express/Node application that chemistry data (https://us-central1-quickchemapi.cloudfunctions.net/app/api/v1/elements). 
The purpose of this application is to practise simple Express server architecture. API server deployed using Firebase functions.

## App Structure
### Data Layer
The Data layer of this application holds the models and the DataSource to access to data. 
In this applications, the model is *ChemElement* which represents data for each element in the Periodic Table. 
The ElementSource acts as the entry point to access ChemElement information

### Controller (Router)
The controller layer determines routing in the RESTful api and business logic to handle each call to the server. 

### Application
This layer holds higher level application organization. App layer determines which controllers and middleware are needed.
