import checkingLogin from '../fixtures/login'


describe("checking the login in the admin panel", () => {
  beforeEach( () => {
    cy.visit("/admin/");
  })

  it("successful authorization", () => {
    cy.login(checkingLogin.happypath.login, checkingLogin.happypath.password);
    cy.contains("Администраторррская").should("be.visible");
  });

  it("unsuccessful authorization", () => {
    cy.login(checkingLogin.sadpath.login, checkingLogin.sadpath.password);
    cy.contains("Ошибка авторизации").should("be.visible");
  }); 
})