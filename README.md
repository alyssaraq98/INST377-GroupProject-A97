# INST377-GroupProject-A97

Project Title: PG County Fiscal Year Spending Information

Description of Project:

As taxpayers to Prince George’s County, citizens have the right to know what agencies their money is going to and how much is being allocated to each one. While this data is publicly available online, it is anything but accessible. In its current form, someone interested in this information would have to download the data themselves and do their own analysis in order to find the total amount of money given to each agency. Simply, the current method of finding how much each agency is receiving from Prince George’s County is exceedingly difficult for the average person.

Our website is geared toward adults who pay taxes in Prince George’s County. We decided on adult taxpayers specifically because while some teenagers and people in their 20’s pay taxes, we felt that they would not be as interested in this type of project compared to adults. Again, since these people are paying taxes to Prince George’s County, they have the right to know exactly where their money is being spent.

Heroku Link: https://inst377-group-project-a97.herokuapp.com/

Target browsers: Desktop users who work on Windows 10 OS

Link to Developer Manual: See below for Developer Manual

Bottom Half of README TODO:

How to install our application and all dependencies
 - Clone the repository from GitHub onto your local machine.
 - Use npm install in the terminal to install dependencies in node_modules folder. This will install all modules listed as dependencies in package.json.  
 - Install canvas.js by using thse instructions: https://www.npmjs.com/package/canvasjs 
 - Install bulma package by using these instructions: https://www.npmjs.com/package/bulma



How to run our application on a server
 - Use npm start to start the application and type localhost:3000 into your browser

How to run any tests we have written for our software
 - We did not write any tests for our software, but feel free to write your own!
 
The API for our server application - all GET, POST, PUT, etc endpoints, and what they each do
 - API Endpoints:
   - GET: Retrieve the data from the PG County Website. Each GET endpoint has an API URL that is fetched on the server and loaded onto the website through JSON files.
   - POST: The POST endpoint takes data from the API that was fetched in the GET request and posts the information on the website.
   - PUT: The PUT endpoint takes the data from the website and revises them through the JSON files.

Bugs
 - In the 2015 dataset, the only pay names provided were only up to the letter 'A,' so this will give an incomplete dataset.

Future Development Plans
 - Add more visualizations
 - More options for users to group agencies
 - Undergo user testing to gage usability and revise based on feedback
 - Add more accessibility features


