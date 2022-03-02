// Funcionalidade 
describe("Tickets", () => {

    // Abrir página
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    // Cenários
    it("fill all the text input field", () => {
        const firstName = "mateus";
        const lastName = "Silva"; 

        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#email").type("mateus@gmail.com")
        cy.get("#requests").type("Vegetariano")
        cy.get("#signature").type(`${firstName} ${lastName}`) 
    });


    it("select two tikets", ()=> {
        cy.get("#ticket-quantity").select("2");
    });

    it("select vip ticket type", () => {
        cy.get("#vip").check();
    });

    it("selects social media  checkbox", () => {
        cy.get("#social-media").check();
    });

    it.only("selects friend and publication, then uncheck friend", () => {
        cy.get("#social-media").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it("has'TICKETBOX' heade's heading", () => {});

}); // Fechando a funcionalidade