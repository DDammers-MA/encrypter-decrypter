class DecreptyerView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) {
        this.main = main
        this.type = "DECRYPT";// hier geeft je het type mee
        this.htmlElement = document.createElement("article");//creater artivle
        this.htmlElement.classList.add("view");//geet een class
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement); //render wat en waar
        
        this.header = new Header(this, "Decrypter");//maakt header aan en geeft decrypterview mee en het type
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Decrypt", app);
    }
    getDataFromBody = () => {
        this.main.cipher(this.body.text, this.type);//hij voert de cipher uit met de body.text en het type
    }
    
    changeBody(decryptedText) {
        this.body.changeBody(decryptedText);
    }
}