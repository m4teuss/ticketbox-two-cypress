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

    it("alert on invalid email", () => {
        cy.get("#email").type("mateus-.com")
        .as("email") // apelido 
        
        // valida se exite a o valor da classe "inavlid" | Id = #email. valor classe = invalid   
        cy.get("#email.invalid").should("exist") 

        cy.get("@email")
            .clear()
            .type("mateus@gmail.com")

        cy.get("#email.invalid").should("not.exist");
    });


    it.only("fills and reset the form", () => {
        const firstName = "mateus";
        const lastName = "Silva"; 
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#email").type("mateus@gmail.com")
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type("I like to play soccer")

        cy.get(".agreement p").should("contain", `I, ${fullName}, wish to buy 2 VIP tickets.`)
    
        cy.get("#agree").click();
        cy.get("#signature").type(fullName);

        cy.get("button[type='submit']").as("submitBtn").should("not.be.disabled") // validando botao desabilitado
        cy.get("button[type='reset']").click()
        cy.get("@submitBtn").should("be.disabled")
    });

       

}); // Fechando a funcionalidade