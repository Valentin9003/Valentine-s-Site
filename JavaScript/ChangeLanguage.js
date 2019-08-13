//....


//......
function ChangeLanguage(){
     
    let btn =  document.getElementById('lang');
    console.log(btn.textContent);
   
    if(btn.textContent == "EN"){
       
        BulgarianLanguage(btn);
        
    }
    else if(btn.textContent = "БГ"){
        EnglishLanguage(btn);
    }
    };

    function BulgarianLanguage(btn){
        
        btn.textContent = "БГ";
    }

    function EnglishLanguage(btn){
     
        btn.textContent = "EN";
        
}