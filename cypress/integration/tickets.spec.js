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

    it("selects friend and publication, then uncheck friend", () => {
        cy.get("#social-media").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it("has'TICKETBOX' heade's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX") //should = deve | contain = conter| contém o texto X
    });

    it.only("alert on invalid email", () => {
        cy.get("#email").type("mateus-.com")
        .as("email") // apelido 
        
        // valida se exite a o valor da classe "inavlid" | Id = #email. valor classe = invalid   
        cy.get("#email.invalid").should("exist") 

        cy.get("@email")
            .clear()
            .type("mateus@gmail.com")

        cy.get("#email.invalid").should("not.exist");
    })




}); // Fechando a funcionalidade