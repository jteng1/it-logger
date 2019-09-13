This project is an IT Logger that allows different technicians to track all bugs/fixes they are dealing with in their computer repair shop. Allows full CRUD operations for new technicians and new logs with the ability to flag a log urgent or not. Utilized React-Redux to manage a global state and Material UI for the design.

## Features

Add and delete technicians<br>
Add, edit, or delete logs based on technician<br>
Ability to flag a log urgent or not urgent<br>
Logs are searchable by message or technician

## Features to be added

Search by date<br>
More detailed notifications such as who added the log, etc.

## Technologies

React and Redux for front-end and global state management<br>
Express and Node for back-end<br>
MongoDB for the database<br>
Material UI for design

## Bugs

When a backslash is put in the search it breaks the regex expression<br>
When adding or updating a log, the \_id is passed through instead of the actual object it refers to so the name only shows as "Recently updated..."
