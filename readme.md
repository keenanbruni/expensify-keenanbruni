# Expensify

[Expensify Live](http://expensify-keenanbruni.herokuapp.com/)

Expensify is a fully featured expense tracking React application.

  - User authentication & data storage handled through Google Firebase
  - Utilizes Redux for state management
  - Utilizes an Express/Node.js backend
  - Features adaptive SCSS styling for mobile & desktop
  - Full testing suite built with Jest & Enzyme; 74 tests in total

## Features & Implementation

### Multi-Page Application  

Expensify's content is split into 3 separate pages that handle the core functionality of the app:
* Login Page
* Dashboard
* Create/Edit Expense

Routing is handled by React-Router. Public and Private routes are used to handle which pages a user can see based on their authentication status.

### Session

User authentication is handled by Firebase using Google credentials. Upon the initial site visit, the unauthenticated user is prompted to sign in using their Google credentials. Once successfully authenticated, a new user account is stored and the user is routed to the Expensify dashboard.

![Login Screen](https://imagizer.imageshack.com/img923/2290/qvYMAT.png)

### Expense Dashboard

The Expensify dashboard displays a brief summary of existing expenses, filtering options, and a list of filtered expenses; these are rendered by components ExpensesSummary, ExpenseListFilters, and ExpenseList, respectively. From this page the user has the option to add a new expense, edit an existing expense, change the filtering criteria, or logout. 

![Expensify Dashboard](https://imagizer.imageshack.com/img922/1604/u1m2xv.png)

### Create/Edit Expense

Both the Create Expense and Edit Expense pages are centered around the ExpenseForm component, which allows the user to input a description, dollar amount, date, and note for an individual expense. Upon saving, the user is routed back to the dashboard.

![Create Expense Page](https://imagizer.imageshack.com/img924/1527/kWfQ07.png)

