# LMS Service

A Serverless project to manage video content with CRUD APIs and analytics.

---

## Table of Contents

1. [Prerequisites](#prerequisites)  
2. [Clone Repository](#clone-repository)  
3. [Install Dependencies](#install-dependencies)  
4. [Configure Environment Variables](#configure-environment-variables)  
5. [Database Setup](#database-setup)  
6. [Run Migrations](#run-migrations)  
7. [Run Project Locally](#run-project-locally)  
8. [API Endpoints](#api-endpoints)  
9. [Postman Collection](#postman-collection)  

---

## Prerequisites

- Node.js >= 18.x  
- npm >= 9.x  
- MySQL server running locally  
- Serverless Frame

## Install Dependencies

npm install

## If you face peer dependency issues, you can try:

npm install --legacy-peer-deps

## Configure Environment Variables
## Create a .env file in the root folder:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=Dummy
DB_NAME=lms

## Database Setup
## Create a database:

CREATE DATABASE lms;
## Check that your MySQL credentials match the .env file.

## Run TypeORM Migrations
## Generate or run migrations to create the tables:

# Run existing migrations
npm run migration:run

# (Optional) Generate new migration
npm run migration:generate -- -n <MigrationName>

## Run Project Locally
## Use Serverless Offline to simulate API Gateway and Lambda:
npm run offline

# By default, the APIs will run at:
http://localhost:3000

## API Endpoints

| Method | Path                       | Description                                                                                                 |
| ------ | -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| POST   | /lms/createHowToVideos     | Create a new video entry                                                                                    |
| GET    | /lms/getHowToVideos        | Fetch all videos                                                                                            |
| PUT    | /lms/updateHowToVideo/\:id | Update video details                                                                                        |
| GET    | /lms/analytics             | Return analytics including total videos, count by status, password-protected count, and top 5 recent videos |
