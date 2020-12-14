# INST377-GroupProject-A97

Project Title: PG County Fiscal Year Spending Information

Description of Project:

As taxpayers to Prince George’s County, citizens have the right to know what agencies their money is going to and how much is being allocated to each one. While this data is publicly available online, it is anything but accessible. In its current form, someone interested in this information would have to download the data themselves and do their own analysis in order to find the total amount of money given to each agency. Simply, the current method of finding how much each agency is receiving from Prince George’s County is exceedingly difficult for the average person.

Our website is geared toward adults who pay taxes in Prince George’s County. We decided on adult taxpayers specifically because while some teenagers and people in their 20’s pay taxes, we felt that they would not be as interested in this type of project compared to adults. Again, since these people are paying taxes to Prince George’s County, they have the right to know exactly where their money is being spent.

Heroku Link: https://inst377-group-project-a97.herokuapp.com/

Target browsers: Desktop users who work on Windows 10 OS

Link to Developer Manual: See below for Developer Manual

Bottom Half of README TODO:
- The audience of this document is future developers who will take over your system.
- They know technical terms and have general knowledge about web applications, but do not have knowledge about your system design.
- You need to provide a technical document so that future developers can start setting up the application on their local machines, and keep working on the system development after you leave the team.
- Your Developer Manual covers:
- How to install your application and all dependencies
- How to run your application on a server
- How to run any tests you have written for your software
- The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do

API Endpoints:

GET: Retrieve the data from the PG County Website. Each GET endpoint has an API URL that is fetched on the server and loaded onto the website through JSON files.
POST: The POST endpoint takes data from the API that was fetched in the GET request and posts the information on the website.
PUT: The PUT endpoint takes the data from the website and revises them through the JSON files.

- A clear set of expectations around known bugs and a road-map for future development.
