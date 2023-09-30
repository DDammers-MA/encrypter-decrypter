class Footer {
    htmlElement;
    view;
    buttonHtmlElement
    app;
    constructor(view, buttonText) {
        this.app = app;
        this.htmlElement = document.createElement("footer");//hier maak je een footer aan
        this.htmlElement.classList.add("view__footer");//hier geeft je hem een clss
        this.buttonHtmlElement = document.createElement("button");//hier maak je een button aan
        this.buttonHtmlElement.classList.add("view__button")//hier geef je hem een class
        this.buttonHtmlElement.onclick = this.buttonClicked;//hier zegt je dat de button wanneer hij geklikt is dat hij butten clicked uitvoert

       
        this.htmlElement.appendChild(this.buttonHtmlElement);//hier voeg je het button element aan het footer element
        this.buttonHtmlElement.innerText = buttonText; //hier zegt je dat de text van de button buttonTezt is
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);//hier rener je het
    }

    buttonClicked = () => {//wanner er op de knop geclick word
        this.view.getDataFromBody(); //voert hij dit uit
    }
}