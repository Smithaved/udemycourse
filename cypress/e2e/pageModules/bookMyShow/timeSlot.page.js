class TimeSlot{
    popup()
    {
        const popupText=cy.get('#wzrk-confirm')
        popupText.trigger("mouseover")
        popupText.click()
        return this
    }
    selectTimeSlot()
    {
        const time=cy.get(`[data-name="Akash Cinemas: Laggere"] > .body > .showtime-pill-wrapper > :nth-child(1) > .showtime-pill`)
        time.click({force: true})
        return this
    }
    tearmsAndConditions()
    {
        const terms=cy.get('#btnPopupAccept')
        terms.click()
        return this
    }
    numberOfSeats()
    {
        const seats=cy.get('#pop_1')
        seats.click()
        const selectSeats=cy.get('#proceed-Qty')
        selectSeats.click()
        return this
    }
}
export default TimeSlot