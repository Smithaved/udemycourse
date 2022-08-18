class MovieDetails{
    bookTicketButton()
    {
        const bookTicket=cy.get('.sc-qswwm9-8 > #page-cta-container > .sc-8f9mtj-0')
        bookTicket.click()
        return this
    }
}
export default MovieDetails