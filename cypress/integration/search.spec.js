it('Gus wants to search for some tracks', () => {
  cy.intercept(/api.deezer.com\/chart/).as('chartRequest')
  cy.intercept(/api.deezer.com\/search/).as('searchRequest')

  // Gus already knows Short Listen, so he came back for more info
  cy.visit('/')

  cy.wait('@chartRequest')

  // He notes the artist name of first card
  cy.findAllByRole('listitem')
    .first()
    .dataCy('artistName')
    .then((artistDiv) => {

      const firstArtist = artistDiv.text()

      // Then he tries the search writing some search term
      cy.dataCy('searchField')
        .type('Daft Punk')

      // ...and hit the search button
      cy.dataCy('searchButton')
        .click()

      cy.wait('@searchRequest')

      // Gus now sees the difference in the artists name
      cy.findAllByRole('listitem')
        .first()
        .dataCy('artistName')
        .invoke('text')
        .should('not.be.equal', firstArtist)
    })
})
