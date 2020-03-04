# Expensify

Expensify is a fully featured expense tracking application powered built in React.

  - User authentication & data storage handled through Google Firebase
  - Utilizes Redux for state management
  - Utilizes an Express backend
  - Full testing suite built with Jest & Enzyme

## Features & Implementation

### Multi-Page Application
Expensify's content is split in separate pages that handle the core functions of the app:
* Login Page
* Dashboard
* Create Expense
* Edit Expense

Routing is handled by React-Router. Public and Private routes are used to handle which pages a user can see based on their authentication status.

### Session

User authentication is handled by Firebase using Google credentials. Upon first visit to the site, the unauthenticated user is prompted to sign in using their Google credentials. Upon successful authentication, a new user account is stored and the user is routed to the Expensify dashboard.

![Login Screen]()

### Expense Dashboard

The Expensify dashboard displays a brief summary of existing expenses, filtering options, and a list of filtered expenses; these are rendered by components ExpensesSummary, ExpenseListFilters, and ExpenseList, respectively. From this page the user has the option to add a new expense, edit an existing expense, change the filtering criteria, or logout. 

![Expensify Dashboard]()

### Create/Edit Expense

Both the Create Expense and Edit Expense pages are centered around the ExpenseForm component, which allows the user to input a description, dollar amount, date, and note for an individual expense. Upon saving, the user is routed back to the dashboard.

![Create Expense Page]()


