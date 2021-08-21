it('Gus first impressions', () => {
  // Gus wants to test a new webapp to get information about Deezer catalog
  cy.visit('/')

  // He notes the chart list...
  cy.findByRole('list')
    .should('be.visible')

  // and the search field.
  cy.findAllByRole('listitem')
    .should('be.visible')
    .within((items) => {
      // Gus look at the list items and notice...

      // the music information,
      // (album cover, music title, singer, duration)

      // the full song button,

      // the play/pause button,

      // and the add to favs button.

    })


})
