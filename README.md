# E-commerce Back End

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  ## Description
  This is a basic back end application that can be used to access and edit an e-commerce based database.

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#test)
  - [Questions](#questions)
  - [Contact Info](#contact-info)

  ## Installation
          // Install Dependencies

  2. Install npm dependencies: ```npm i```
  3. Create a ```.env``` file in the root folder. Put the following inside of your .env file:
        ```DB_NAME='ecommerce_db'```
          ```DB_USER='root'```
          ```DB_PW='yourpasswordhere'```
  4. enter the following into a MySQL shell to create the database:
        ```SOURCE db/schema.sql```

          //Run schema.sql in MySQL shell to created database

          SOURCE db/schema.sql

          //Start Server

          npm start

          //Seed Database

          npm run seed

  ## Usage
  Check out my tutorial on how to use this application: (video of using the app).

  ## License
  This project is covered under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

  ## Contribution
  Please pay me. 😊 Just kidding (or am I!?)! You can contribute to this project by sending me an email about what you would like to add or fix.

  ## Testing
  You can test this application by changing the database via GET/PUT/POST commands in Insomnia or a similar app to check for invalid entries.

  ## Questions
  You can find this applciation's repository [here](https://github.com/kstaver/e-commerce-back-end). If you have any questions pertaining to this project, please feel free to contact me.

  ## Contact Info
  - Github: [kstaver](https://github.com/kstaver)
  - Email: staverkendra@gmail.com