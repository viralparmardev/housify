# Housify

Housify is a housing management system, wherein users can login/register with their credentials, add their houses for lease and view houses listed by other users.

**Live URL**: [http://ec2-3-89-251-159.compute-1.amazonaws.com/](http://ec2-3-89-251-159.compute-1.amazonaws.com/)

The project has been deployed using Amazon Web Services - AWS EC2 instance with custom MySQL, Apache and Gunicorn installations for serving the application.

# Tech stack

 - Front-end: Bootstrap, Angular 
 - Back-end: Python, Flask 
 - Database: MySQL

**Code repository:** [https://github.com/virustark24/housify](https://github.com/virustark24/housify)

## Front-end components:

 1. Login and register component (user credentials)
 2. Home component (list all houses uploaded)
 3. House component (view details of selected house)
 4. Add component (upload images and details of new house)
 5. Header component (site-wide header after logging in)
 6. Not found component (replacement for default Apache error)

## Back-end services:

 1. /add - user_id, title, description, rent, address, images
 2. /home - no request parameters
 3. /house - house_id
 4. /login - email, password
 5. /register - email, password, name, mobile

**External dependency:** Imgur API for uploading image files as request and receiving public URL of image as response.

## Database

The MySQL database has the following tables:

 1. user
 
  `user_id` int(10) NOT NULL,
  
  `name` varchar(50) NOT NULL,
  
  `email` varchar(50) NOT NULL,
  
  `mobile` varchar(10) NOT NULL,
  
  `password` varchar(50) NOT NULL,
  
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 
 2. house
 
  `house_id` int(10) NOT NULL,
  
  `user_id` int(10) NOT NULL,
  
  `title` varchar(100) NOT NULL,
  
  `description` varchar(1000) NOT NULL,
  
  `rent` int(10) NOT NULL,
  
  `address` varchar(200) NOT NULL,
  
  `images` json NOT NULL,
  
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP



# Local setup
To run the Housify application in your local machine, follow the following steps:

## Front-end

 1. Install NodeJS
 2. Install Angular CLI
 3. Navigate to directory frontend and type `npm install`
 4. Enter `ng serve` and open localhost:4200 in Chrome

## Back-end

 1. Install Python3, pip3
 2. Create a virtual environment inside backend directory
 3. Activate the environment and install libraries listed in common/requirements.txt
 4. Enter `python3 app.py`

## Database

 1. Install MySQL, save login credentials
 2. Create a database housify
 3. source or import housify.sql
 4. Use the credentials in backend/common/constants.py file to connect the flask app to the database.
