import { currentLanguage } from "https://github.io/blob/master/JavaScript/ChangeLanguage.js";



 let refreshLanguageContent = $("#lang").on("click",function(){
  
  App.refresh();
    
  });
 
    const App =  Sammy('#content',  function() {
  
      this.use('Handlebars', 'hbs');
      
    
     

      
       
       this.get('#/index',function(){
    
      
          this.OverView = currentLanguage.Index.OverView;
          this.OverViewTitle = currentLanguage.Index.OverViewTitle;
          this.Expanding = currentLanguage.Index.Expanding;
          this.ExpandingTitle = currentLanguage.Index.ExpandingTitle;
          this.Trust = currentLanguage.Index.Trust;
          this.TrustTitle = currentLanguage.Index.TrustTitle;
          this.Email = currentLanguage.Index.Email.Email;
          this.Name = currentLanguage.Index.Email.Name;
          this.Content = currentLanguage.Index.Email.Content;
          this.EmailPlaceHolder = currentLanguage.Index.Email.PlaceHolders.Email;
          this.NamePlaceHolder = currentLanguage.Index.Email.PlaceHolders.Name;
          this.MessagePlaceHolder = currentLanguage.Index.Email.PlaceHolders.Message;;
          this.Send = currentLanguage.Index.Email.PlaceHolders.Send;
          this.VaimSoftTitle = currentLanguage.Index.VaimSoftTitle;
          this.VaimSoft = currentLanguage.Index.VaimSoft;
     
            this.partial("./HBS/Index.hbs");
        
       });

       this.get('#/contacts',function(){
          
        this.partial("./HBS/Contacts.hbs");
  
        });
  
                   this.get('#/services',function(){
                       this.Services = currentLanguage.Services.Services;
                  this.WebSite = currentLanguage.Services.WebSite;
                  this.Shop = currentLanguage.Services.Shop;
                  this.Design = currentLanguage.Services.Design;
                  this.Application = currentLanguage.Services.Application;
                 this.Stages = currentLanguage.Services.Stages;
                  this.Planning = currentLanguage.Services.Planning;
                  this.PlanningContent = currentLanguage.Services.PlanningContent;
                  this.Analysis = currentLanguage.Services.Analysis;
                  this.AnalysisContent = currentLanguage.Services.AnalysisContent;
                  this.Programming = currentLanguage.Services.Programming;
                  this.ProgrammingContent = currentLanguage.Services.ProgrammingContent;
                  this.Testing = currentLanguage.Services.Testing;
                  this.TestingContent = currentLanguage.Services.TestingContent;
                  this.Maintenance = currentLanguage.Services.Maintenance;
                  this.MaintenanceContent = currentLanguage.Services.MaintenanceContent;
                 
      
      this.partial("./HBS/Services.hbs");
  
      });
 
           this.get('#/aboutus',  function(){
               this.Title = currentLanguage.AboutUs.Title;
             this.VaimSoft = currentLanguage.AboutUs.VaimSoft;
             this.Team = currentLanguage.AboutUs.Team;
             this.Solutions = currentLanguage.AboutUs.Solutions;
             this.More = currentLanguage.AboutUs.More;
             console.log(currentLanguage.AboutUs.More)
        this.partial("./HBS/aboutus.hbs");
  
        });
          
           this.notFound =  function(){console.log('Handled')}
      });
  
    App.run('#/index');
    
    

  














