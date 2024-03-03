import checkingLogin from "../fixtures/login.json";
import selectors from "../fixtures/selectors.json";

describe("Booking a movie whose title is from the admin panel", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("should booking movie", () => {
    cy.login(checkingLogin.happypath.login, checkingLogin.happypath.password);

    cy.get(selectors.filmTitle)
      .first()
      .then((element) => {
        const movieTitle = element.text();
        cy.visit("/");
        cy.get(selectors.days).eq(3).click();
        cy.contains(`${movieTitle}`)
          .parent()
          .parent()
          .parent()
          .contains("12:00")
          .click();
        cy.get(selectors.seats).first().click();
        cy.contains("Забронировать").click();
        cy.get(selectors.bookingButton).contains("Получить код бронирования");
      });
  });
});
