import tests from '../fixtures/seats'

describe("movie tickets reservation screen", () => {
  beforeEach( () => {
    cy.visit("/");
  })  

  it("should displays 7 days", () => {
    cy.get(".page-nav__day").should("have.length", 7);
  });

  tests.forEach(test => {
    it(test.name, () => {
      cy.get("a.page-nav__day:nth-of-type(4)").click();
      cy.get(".movie").first().contains("12:00").click();
      test.data.forEach((seat) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();

      })
      cy.get(".acceptin-button").click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    })    
  })
})
