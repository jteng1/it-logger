## IT Log Tracker

This project is an IT Logger that allows different technicians to track all bugs/fixes they are dealing with in their computer repair shop. Allows full CRUD operations for new technicians and new logs with the ability to flag a log urgent or not. Utilized React-Redux to manage a global state and Material UI for the design.

## View the Application

View the application at https://powerful-bayou-86248.herokuapp.com.<br>
Please wait a couple seconds for it to load initially, heroku takes some time to reboot the application after inactivity.

## Demo

![IT Log Tracker](demo/itlogger.gif)

## Features

Add and delete technicians<br>
Add, edit, or delete logs based on technician<br>
Ability to flag a log urgent or not urgent<br>
Logs are searchable by message or technician

## Technologies

React and Redux for front-end and global state management<br>
Express and Node for back-end<br>
MongoDB for the database (hosted on MongoDB Atlas)<br>
Material UI for design

## In Progress

Search by date functionality<br>
Search by id functionality<br>
Add a refresh button<br>
More detailed notifications such as who added the log, etc.<br>
Whenever log is added or updated, fetch data from server again

## Known Bugs

When a backslash is put in the search it breaks the regex expression<br>
When adding or updating a log, the \_id is passed through instead of the actual object it refers to so the name only shows as "Recently updated..."
