import {Bulgarian} from "../Language/BulgarianLanguage.js";
import {English} from "../Language/EnglishLanguage.js";
 var currentLanguage = Bulgarian;


  let event =  document.getElementById('lang').addEventListener("click",ChangeLanguage);
function ChangeLanguage(){
   
    let btn =  document.getElementById('lang');

   
    if(btn.textContent == "EN"){
       
        BulgarianLanguage(btn);
       
        
    }
    else if(btn.textContent = "БГ"){
        EnglishLanguage(btn);
    
    }
    
    };

    function BulgarianLanguage(btn){
        
        btn.textContent = "БГ";
         currentLanguage = English;
     
         LayoutContent(btn.textContent);
      
    }

    function EnglishLanguage(btn){
     
        btn.textContent = "EN";
        currentLanguage = Bulgarian;
        
        LayoutContent(btn.textContent);

        
    
      
}
function LayoutContent(language){
   
    let index = document.getElementById("index");
    let contacts = document.getElementById("contacts");
    let aboutUs = document.getElementById("aboutus");
    let services = document.getElementById("services");
    let author = document.getElementById("authorName");
    let vaimSoft = document.getElementById("company");
 
switch(language){
   
    case "EN": {
  
        index.textContent = "Начало";
        contacts.textContent = "Контакти";
        aboutUs.textContent = "За нас";
        services.textContent = "Услуги";
      
        author.textContent = "2019 Валентин Стоев";
        vaimSoft.textContent = "ВаимСофт"
        break;
    }
    case "БГ":{
        
        index.textContent = "Home";
        contacts.textContent = "Contacts";
        aboutUs.textContent = "About us"
        services.textContent = "Services"

        author.textContent = "2019 Valentin Stoev";
        vaimSoft.textContent = "VaimSoft"
break;
    }
 }

}
export{currentLanguage};