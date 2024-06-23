# Developer Testing Project
This README provides instructions on how to set up and run the Developer Testing project both locally and using Docker. Follow the steps below to get started.

## Running Locally
### 1. Clone the Repository
First, clone the repository to your local machine using Git.

````git pull https://github.com/aungbhonekhant/developer-testing````

### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies using Yarn.

````yarn````

### 3. Database Migration and Seeding
Run the following command to migrate the database schema and seed it with demo data.
````npx prisma migrate dev````

Wait until the migration and seeding process completes.

### 4. build the Application
Build the application using the following command.
````yarn build````

### 5. Start the Application
Start the application using the following command.
````yarn dev````

### 6. View the Application
Open your browser and navigate to http://localhost:3000/ to view the application.

Here is a screenshot of how the application looks:
![663cc351-bacd-445b-a4ed-e414654b9a15](https://github.com/aungbhonekhant/developer-testing/assets/60026840/5036fee5-be7f-4148-857c-99b63d0245a1)



## Running with Docker
### 1. Clone the Repository
First, clone the repository to your local machine using Git.

````git pull https://github.com/aungbhonekhant/developer-testing````

### 2. Start Docker Containers
Run the following command to start the application using Docker Compose.
````docker-compose up````


Wait until you see the "Ready" message in the terminal logs. This will create three Docker images.

Here is a screenshot of the Docker running successfully
![ca138bb9-843a-4aab-8f48-eb06d7e30530](https://github.com/aungbhonekhant/developer-testing/assets/60026840/47a4dec0-be3c-4931-8f08-6e728228b2d4)


### 3. View the Application

Open your browser and navigate to http://localhost:3000/ to view the application.

Here is a screenshot of how the application looks:
![663cc351-bacd-445b-a4ed-e414654b9a15](https://github.com/aungbhonekhant/developer-testing/assets/60026840/5036fee5-be7f-4148-857c-99b63d0245a1)
