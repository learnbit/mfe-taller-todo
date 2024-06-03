# React Micro Frontend Todo app

![Kapture 2024-06-03 at 16 09 04](https://github.com/learnbit/mfe-taller-todo/assets/37585248/821b9eae-e462-4bae-a55a-2c5cba88d23f)



### Applications:

todo-host (Host of the micro frontend)

todo-app (Micro frontend)

###  Components in todo-app:

**input:** used for showing an input text

**list:** used to show the list of todo items.

**filter:** used to show the buttons for filter by completed/non-completed/all

**todo:** main component that uses input, list, and filter components.

**reducer:** used to have a centralized place of the state and actions of the todo app.

**context:** used to configure the wrapper that shares the state and actions to the all components (input, list, filter, todo).




## Installation

Go to the todo-app folder.

```bash
cd todo-app/
npm install
npm run start

open a browser and use this url: http://localhost:4001/
```
