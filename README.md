# E-commerce Back End

  ![License](https://www.apache.org/licenses/LICENSE-2.0.txt)

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
  1. Download or clone the repository.
  2. Open repository on your favorite IDE.
  3. Create a new terminal on your IDE and enter node server.js.
  4. If the creation of the database is successful then you will get the following output:

    Executing (default): CREATE TABLE IF NOT EXISTS `category` (`id` INTEGER NOT NULL auto_increment , `category_name` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`)) 
    ENGINE=InnoDB;
    Executing (default): SHOW INDEX FROM `category`
    Executing (default): CREATE TABLE IF NOT EXISTS `product` (`id` INTEGER NOT NULL auto_increment , `product_name` VARCHAR(255) NOT NULL UNIQUE, `price` DECIMAL(10,2) NOT NULL, `stock` INTEGER NOT NULL, `category_id` INTEGER, `category__id` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`category__id`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;  
    Executing (default): SHOW INDEX FROM `product`
    Executing (default): CREATE TABLE IF NOT EXISTS `tag` (`id` INTEGER NOT NULL auto_increment , `tag_name` VARCHAR(255), PRIMARY KEY (`id`)) ENGINE=InnoDB;     
    Executing (default): SHOW INDEX FROM `tag`
    Executing (default): CREATE TABLE IF NOT EXISTS `product_tag` (`id` INTEGER NOT NULL auto_increment , `product_id` INTEGER, `tag_id` INTEGER, UNIQUE `product_tag_tag_id_product_id_unique` (`product_id`, `tag_id`), PRIMARY KEY (`id`), FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
    Executing (default): SHOW INDEX FROM `product_tag`
    App listening on port 3001!
    5. Connect to your newly created database. Use an pplication like Insomnia to open and manipulate the data in the database.

  ## Usage


  ## License
  This project is covered under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

  ## Contribution
  Please pay me. 😊 Just kidding (or am I!?)! You can contribute to this project by sending me an email about what you would like to add or fix.

  ## Testing
  You can test this application by changing the database via GET/PUT/POST commands in Insomnia or a similar app to check for invalid entries.

  ## Questions
  You can find the link to my application [here](https://github.com/kstaver/e-commerce-back-end). If you have any questions pertaining to this project, please feel free to contact me.

  ## Contact Info
  - Github: [kstaver](https://github.com/kstaver)
  - Email: staverkendra@gmail.com