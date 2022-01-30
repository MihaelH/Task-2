describe('Bornfight test', () => {
    it('nalazimo se na pocetnoj stranici', () => {
      cy.visit('https://qa.bornfight.dev/')

      cy.get('.btn').contains("Let's get started!").click()
  
      cy.url().should('include', '/site/order')

      cy.get('.btn').contains('Add to cart').click()

      cy.visit('https://qa.bornfight.dev/site/order')

      cy.contains('Checkout').click()
       
      const ime = 'Mihael'
      cy.get('[id="orderform-firstname"]')
        .type(ime)
        .should('have.value', ime)

      const prezime = 'Horvat'
      cy.get('[id="orderform-lastname"]')
        .type(prezime)
        .should('have.value', prezime)

      const email = 'mihaelhorvat1986@ggmail.com'
      cy.get('[id="orderform-email"]')
        .type(email)
        .should('have.value', email)  

      const drzava = 'Croatia'
      cy.get('[id="orderform-country"]')
        .type(drzava)
        .should('have.value', drzava)

      const grad = 'Novi Marof'
      cy.get('[id="orderform-city"]')
        .type(grad)
        .should('have.value', grad)

      const adresa = 'Remetinec 386b'
      cy.get('[id="orderform-shippingaddress"]')
        .type(adresa)
        .should('have.value', adresa)

      cy.get('.btn').contains('Place order').click()

      cy.url().should('include', '/place-order')


    })

    
  })