describe('Buy the bag', () => {
  beforeEach(() => {
    // Perform login before each test 
    cy.login('standard_user', 'secret_sauce');
  });

  it('Should login successfully and add item to cart', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products'); 
    cy.get('button[id="add-to-cart-sauce-labs-backpack"]', { timeout: 10000 }).click();
  });

  it('should go to the cart page', () => {
    // First add item to cart
    cy.get('button[id="add-to-cart-sauce-labs-backpack"]', { timeout: 10000 }).click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html'); 
    cy.get('button[id="checkout"]', { timeout: 10000 }).click();
  }); 

  it('allow users to add their details to pay', () => {
    cy.url().should('include', '/checkout-step-one.html'); 
    cy.get('.title').should('contain', 'Checkout');
    
    // Add form filling actions
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    
    // Optional: Add assertion for successful form submission
    cy.url().should('include', '/checkout-step-two.html');
  });
});