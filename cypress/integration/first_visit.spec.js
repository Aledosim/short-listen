it('Gus first impressions', () => {
  cy.intercept(/api.deezer.com\/chart/).as('chartRequest')

  // Gus wants to test a new webapp to get information about Deezer catalog
  cy.visit('/')

  // He waits for the page to load
  cy.wait('@chartRequest')

  // He notes the search field,
  cy.dataCy('searchField')
    .should('be.visible')

  // the chart list...
  cy.findByRole('list')
    .should('be.visible')
    .within(() => {

      // and the track cards.
      cy.findAllByRole('listitem')
        .not(':visible')
        .should('have.lengthOf', 0)
        .each((item) => {

          // The card shows

          cy.get('button', {withinSubject: item})
            .within(() => {
              // the full song button,

              // the play/pause button,

              // and the add to favs button.

            })

        })
    })
})


