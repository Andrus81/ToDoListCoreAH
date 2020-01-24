
# ToDoListCore

_Dynamic Tasks Board, Developed in NodeJs with the framework Express,All data  is stored in a NoSql database (MongoDB)_

## Configuration and Deployment 🚀
_
1.	Clone the project
2.	Download all  dependencies using  the command npm install
3.	execute the Project using the command node index.js  ori f you downloades nodemon, you can use the npm start command
4.	This server run  on port 3000, you can change the port in the index.js file_



### Controller 🔧

_We have 3 Controllers, 3 which correspond to the business logic 
StateController.js, TaskController.js, UserController.js_

_1.  StateController_

```
-Get(/State) - Route get: List of states  from DB  
-Post(/State) - Route post: Add new state to DB   
-Delete(/State/:id) -  delete: remove state from DB   
-Put(/State/:id) -  put: Update state from DB
```

_2.	TaskController_

```
-Get (/Task) - Route get: List tasks from db
-Post (/Task) - Route post: Add new task to db
-Delete (/Task) - Route delete: remove task from db
-Put (/Task/:id) - Route put: Update task fromdb

```


_3.	UserController_

```
-Get (/User) - Route get: List users from db    
-Post (/User) - Route post: Add new user to dbv    
-Delete (/User/:id) - Route delete: remove user from db    
-Put (/User/:id) - Route put: Update user fromdb

```


## Built with 🛠️

_Mention the tools you used to create your project_

* [NodeJs](https://nodejs.org/es) 
* [Exressjs](http://expressjs.com) 
* [Mongoose](https://mongoosejs.com)
* [Cors](https://www.npmjs.com/package/cors)
---
⌨️ (https://github.com/AndresHeredia) 🤓
