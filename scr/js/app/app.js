class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;
    constructor() {
        this.encrypter = new Encrypter();//hier maak je encrypter aan
        this.decrypter = new Decrypter();//hier maak je decrypter aan
   
        this.cleaner = new Cleaner();//hier maak je cleaner aan
        this.renderer = new Renderer();//hier maak je rendrer aan

        this.api = new Api(); //hier maak je api aan
      
        this.api.getData("/scr/data/data.json").then((data) => {
            this.main = new Main(data, this);
        });
    }
    encrypt = (textToEncrypt) =>{ 
        const encrypted = this.encrypter.encrypt(textToEncrypt);//hier maak je beruik van de encrypt fuctie zo dat de text die je geeft geencrypt word
        this.main.changeEncrypter(encrypted); //en hier wil je dat de text die je wil gaan enctypte ook encrypt op het schrem komt te staan
       
       
    }
    decrypt = (textToDecrypt) =>{
        const decrypted = this.decrypter.decrypt(textToDecrypt);//hier maak je beruik van de decrypt fuctie zo dat de text die je geeft gedecrypt word
        this.main. changeDecrypter(decrypted); //en hier wil je dat de text die je wil gaan dectypte ook decrypt op het schrem komt te staan
}
 

}