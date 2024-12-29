Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('https://www.saucedemo.com/'); // Navigate to the home or login page
    cy.get('#user-name').type(username); // Enter the username
    cy.get('#password').type(password); // Enter the password
    cy.get('#login-button').click(); // Click the login button
    cy.url().should('include', '/inventory.html'); // Ensure we are on the correct page after login
  });
});
