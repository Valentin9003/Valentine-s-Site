
    const App = Sammy('#content', function () {
    
     
    
        this.get('#/index',function(){
       
        this.partial("./HBS/Index.hbs");
  
        });
        this.get('#/contacts',function(){
      
        this.partial("./HBS/Contacts.hbs");
  
        });
  
        this.get('#/services',function(){
      
      this.partial("./HBS/Services.hbs");
  
      });
  
        this.get('#/aboutus',function(){
       
        this.partial("./HBS/aboutus.hbs");
  
        });
          
        this.notFound = function(){console.log('Handled')}
      });
  
   App.run('#/');