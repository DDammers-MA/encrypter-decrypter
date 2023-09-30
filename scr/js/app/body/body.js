class Body {
    htmlElement;
    view;
    inputHtmlElement
    text;
    constructor(view ,object) {
        this.htmlElement = document.createElement("section");//hier maak je een section aan 
        this.htmlElement.classList.add("view__body");// hier geeft je hem een class
        this.inputHtmlElement = document.createElement("textarea");//hier maakr je een textarea aan
        this.inputHtmlElement.classList.add("view__inout")// hier geeft je hem een class
        this.htmlElement.appendChild(this.inputHtmlElement);//hier zet je je inputhtml aan het htmlelemt
        this.inputHtmlElement.placeholder = object.placholder; //hier heb je een placeholder voor die je uit her json krijgt
        this.inputHtmlElement.value = object.value;// hier krijg je een value uit json
        this.text = object.value;//hier geef je aan dat de text de value is
        this.inputHtmlElement.oninput = this.typed

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);//hier geef je aan wat hij moet renderen en waar
    }
    typed = (event) => {
        this.text = event.target.value; //hier wil je de getypede text willen zien op het schrem en het voor de value willen bewaren
   
    }

    changeBody(newText) {//hier maak he get zo dat wanner je iets getyped heb en dan worde het geencrypt/gedectypt worde de text verander naar het nieuw text 
        this.inputHtmlElement.value = newText;
    }
}
