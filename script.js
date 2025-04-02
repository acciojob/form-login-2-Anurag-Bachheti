cy.visit(baseUrl);
cy.get('input[name="First Name"]').type('John');
cy.get('input[name="Last Name"]').type('Doe');
cy.get('input[name="Phone Number"]').type('1234567890');
cy.get('input[name="Email ID"]').type('john.doe@example.com');
cy.get('button[type="submit"]').click();

cy.on('window:alert', (alertText) => {
	expect(alertText).to.contain('First Name: John');
	expect(alertText).to.contain('Last Name: Doe');
	expect(alertText).to.contain('Phone Number: 1234567890');
	expect(alertText).to.contain('Email ID: john.doe@example.com');
});
