// Funcionalidade 
describe("Tickets", () => {

    // Abrir página
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    // Cenários
    it.only("fill all the text input field", () => {
        const firstName = "mateus";
        const lastName = "Silva"; 

        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#email").type("mateus@gmail.com")
        cy.get("#requests").type("Vegetariano")
        cy.get("#signature").type(`${firstName} ${lastName}`) 
    });

    it("has'TICKETBOX' heade's heading", () => {});

    
}); // Fechando a funcionalidade