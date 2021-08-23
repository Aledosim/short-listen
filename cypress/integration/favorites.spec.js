it('Gus wants to search for some tracks', () => {
  cy.intercept(/api.deezer.com\/chart/).as('chartRequest')
  cy.intercept(/api.deezer.com\/search/).as('searchRequest')

  // Gus already knows Short Listen, so he came back to test the favorites
  cy.visit('/')

  cy.wait('@chartRequest')

  // He looks at the favorites button...
  cy.findAllByRole('button')
    .filter('button[name*="favorites"]')
    .should('be.visible')
  // and click it
    .click()

  // Magicaly a new view shows up
  // The view have an empty list...
  cy.get('div[role=listitem]')
    .should('not.exist')

  // and a button to get back the tracks list,...
  cy.get('button[name*="track list"]')
    .should('be.visible')
  // which he presses
    .click()

  cy.wait('@chartRequest')

  // Then he tries to add some tracks...
  cy.findAllByRole('listitem')
    .then((items) => {

      var favorites = []

      cy.get('button[name*="favorite"]', {withinSubject: items[0]})
        .click()
      favorites.push(items[0])

      cy.get('button[name*="favorite"]', {withinSubject: items[1]})
        .click()
      favorites.push(items[1])

      cy.get('button[name*="favorite"]', {withinSubject: items[2]})
        .click()
      favorites.push(items[2])

      // and verifies if they are added
      cy.findAllByRole('button')
        .filter('button[name*="favorites"]')
        .click()

      // cy.findAllByRole('listitem')
      //   .each((item) => {
      //     cy.dataCy('trackTitle', {withinSubject: item})
      //       .should('be.visible')
      //       .invoke('text')
      //       .should((text) => {
      //         })
      //       })
        })
    })

