### Overview of Your Application: Describe what the application does and its main features.

The application is a simple ecommerce web app. It lists items that can be added to a shopping cart and then you can 'purchase' the items that had been added to the shopping cart.

### How It Works: Explain the architecture and what happens behind the scenes (e.g., data flow, state management, interactions between components).

Everything is run through the state and the context. Adding an item to cart kicks off a 'ADD_TO_CART' action adding the item that was selected to an array of items. Removing an item kicks off the 'REMOVE_FROM_CART' action that finds the item to remove from the array. Then when you purchase it kicks off the 'CLEAR_CART' and 'SET_CHECKOUT' actions to reset the cart and produce the transaction ID in the Modal.

### Approach to Problem-Solving: Discuss your thought process when tackling this project and any challenges you faced.

The first thing I did was create all the components and get a better idea as to what components I needed as a base. I did kind of pseudocode for the buttons and how I wanted them to work. Then started to put the state management together starting to get the items to be pushed to an array, then getting those items to show in the cart. After that I worked on removing the items and making sure they are removed from the cart. Followed by the logic to checkout the cart. Then I thought about how I should design the app and I thought about some other apps I've used where the cart is in a drawer at the bottom and the drawer has the cart and the checkout flow.

### Mobile Compatibility Strategy: Explain how you ensured the application is mobile-friendly, including any specific tools or techniques used.

I set the app up to be fluid so that it could work with any screen size. I used percentages for width and rem for spacing and media queries where necessary. With the media queries I just set the font-size on smaller screens so that the rem would update and adjust the width percentage of the items on smaller screens.

### State Management Strategy: Describe your approach to managing the state of the application, particularly with respect to cart operations.

I broke it up into 4 actions, 'ADD_TO_CART', 'REMOVE_FROM_CART', 'CLEAR_CART' and 'SET_CHECKOUT'. Each action works with an array of items and adjusts that array.

### Future Extensions: Suggest how you would enhance the application for a more robust e-commerce experience (e.g., user authentication, payment processing, inventory management).

I would incorporate some user authentication using something AWS Cognito, I believe I would use an RDS database to manage the inventory and use something like stripe to handle the payment processing.

### Testing Strategy: Describe how you approached testing your application, including the types of tests you wrote and why.

I wrote some tests checking for UI components and items that should be on the page. Then testing some of the state management by mocking the context provider and making sure items are added and removed to the cart.

# Assignment Overview

Create a simple e-commerce web application that demonstrates your front-end capabilities, with a strong emphasis on mobile compatibility and user experience. This project will assess your ability to design, implement, test, and communicate about your solution effectively.

# Application Requirements

Your application should allow users to perform the following actions:

## View a List of Items: Display items available for purchase.

## Add Items to Shopping Cart: Enable users to add items they wish to buy.

## Checkout Process: Allow users to submit an order (payment integration is not required).

## Purchase Confirmation: Show a confirmation message with the total amount and a transaction ID.

# Front-End Focus

## Mobile Compatibility: Ensure that the web application is fully responsive and works seamlessly on mobile devices of varying screen sizes. It must be responsive and user-friendly across different screen sizes but does not need to be compiled into a native application.

## User Experience: Prioritize an intuitive and smooth user experience. Pay attention to navigation, accessibility, and user feedback mechanisms.

## State Management: Implement state management to handle cart operations efficiently. Use a state management library or framework (e.g., Redux, MobX, Context API, XState, etc.).

# Technology Stack

We recommend that you complete this assignment using React, but if you feel another framework would be better suited just let us know that you plan to leverage something else.

# Testing

Please include tests for your code to demonstrate your testing practices. You should cover key functionality, such as:

## Displaying items

## Adding items to the cart

## Completing the checkout process

# Deliverables

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
