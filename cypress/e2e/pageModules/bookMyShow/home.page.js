class Home{
    selectCity()
    {
        const city=cy.get(':nth-child(3) > .sc-gGCbJM > .sc-dznXNo')
        city.click()
        return this
    }
    recomandedMovies()
    {
        const scroll=cy.contains("Recommended Movies")
        scroll.scrollIntoView()
        return this
    }
    clickOnMovie(movieName)
    {
        const movie=cy.contains(movieName)
        movie.click()
        return this
    }
    
}
export default Home