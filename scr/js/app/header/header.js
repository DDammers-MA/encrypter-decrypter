class Header {
    htmlElement;
    view;
    headingHtmlElement
    constructor(view, headingText) {

        this.htmlElement = document.createElement("header");//hier maak je een header aan
        this.htmlElement.classList.add("view__header");//hier geef je hem een class
        this.headingHtmlElement = document.createElement("h1");//hier maak je een h1 aan 
        this.headingHtmlElement.classList.add("view__heading");//hier geef je heme een class
        this.htmlElement.appendChild(this.headingHtmlElement);//hier zeg voeg je het heading elemetn aan de header voegt
        this.headingHtmlElement.innerText= headingText;//hier zeg je dat de deadingelemnt de inner text is

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);//hier rener je het
    }

}