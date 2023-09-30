class EncrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) {
        this.main = main
        this.type = "ENCRYPT"; // hier geeft je het type mee
        this.htmlElement = document.createElement("article");//hier maak je een artivle aan 
        this.htmlElement.classList.add("view");//hier geef je hem een class
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement); //hier vertel je dat je hem moet reneren
        
        this.header = new Header(this, "Encrypter");//hier maak je de header aan
        this.body = new Body(this, object);//hier maak je de body aan
        this.footer = new Footer(this, "Encrypt", app);//hier maak je de footer aan
    }

    getDataFromBody = () => {
        this.main.cipher(this.body.text, this.type); 
    }

    changeBody(encryptedText) {
        this.body.changeBody(encryptedText);//hier wil je de text veranderen naar het geencrypted text
    }
    
}