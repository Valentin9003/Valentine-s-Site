const $ = require('jquery');
 const mustache = require('mustache');
 const handleBars = require('handlebars');


 import  {bulgarianLanguage} from  "../Language/bulgarianLanguage";
let g = bulgarianLanguage;
console.log(g.Hello);
;





//Logic for Language
function language(lang){

    if(lang == "Bulgarian"){
 return "Bulgarian{''}";
}
else if(lang == "English"){
return "English{' '}";
}
};


