class Main {
    encrypter;
    decreptyer;
    htmlElement
    app;

    constructor(data, app) {
        this.app = app
      
        this.htmlElement = document.createElement("main");//hier maak je een main element
        this.htmlElement.classList.add("main");//hier geeft je hem een class
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.encrypterView = new EncrypterView(this, data.encrypt);//hier maak je een encrypterview aan
        this.decreptyerView = new DecreptyerView(this, data.decrypt);//hier maak je een decrepterview aan
    }

    cipher = (textToCipher, type) => { //hier krijg je de type terug zo dat wanneer het encrypt is 
        if (type === "ENCRYPT") { //voert hij dit en als het niet encrypt is 
            this.app.encrypt(textToCipher);
        } else {//gaat hij die uitvoeren
            this.app.decrypt(textToCipher);
        }
       
    }
    changeEncrypter(encryptedText) {//hier geeft je de encryptedtext mee
        this.encrypterView.changeBody(encryptedText);//hier wil je dat de encrypterView verandert word naar dat genen dat je wil encrypte
    }

    changeDecrypter(decryptedText) {//hier geeft je de decryptedtext mee
        this.decreptyerView.changeBody(decryptedText);//hier wil je dat de decrypterView verandert word naar dat genen dat je wil decrypte
    }



}