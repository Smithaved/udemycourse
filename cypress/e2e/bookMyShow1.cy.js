import HomePage from "./pageModules/bookMyShow/home.page"
import MovieDetails from "./pageModules/bookMyShow/movieDetail.page"
import TimeSlotPage from "./pageModules/bookMyShow/timeSlot.page"
describe("BookMyShow",()=>{
    let movieName
    before(function(){
        cy.parseXlsx('C:/Users/Vinay/Desktop/BookMyShow/cypress/fixtures/TestData.xlsx').then((jsonData)=>{
            movieName=jsonData[0].data[1][0]
        })
    })
    it("Gallipata2",()=>{
        cy.fixture('commonData').then(function (data){
            cy.visit(data.baseUrl)
        })        
        cy.title().should('include',"BookMyShow")
        const homePage=new HomePage()
        homePage.selectCity()
        homePage.recomandedMovies()
        homePage.clickOnMovie(movieName)
        const movieDetails=new MovieDetails()
        movieDetails.bookTicketButton()
        const timeSlotPage=new TimeSlotPage()
        timeSlotPage.popup()
        timeSlotPage.selectTimeSlot()
        timeSlotPage.tearmsAndConditions()
        timeSlotPage.numberOfSeats()
    })
})