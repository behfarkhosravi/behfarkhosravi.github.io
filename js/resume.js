var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if(initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');
 
setTimeout(function() {
      clearInterval(loading);
      $loadingMessage.hide();
   }, 1500);

var initProgram = setTimeout(function(){
    var greeting = "HELLO AND WELCOME";
    var message = "LOOKING FOR DATA";
    var $identityDiv = $("#identity-results");
    var $name = "NAME: Behfar Khosravi";
    var $phone  = "github.com/behfarkhosravi";
    var $freetimeActivities  = "FREE TIME ACTIVITIES :";
      var $programming = "LEARING PROGRAMMING ON MY OWN";
      var $lab = "RUNNING NETWORK SIMULATOR TO IMPROVE MY SKILLS ";
      var $Integration = "LEARING NETWORK AND SOFTWARE INTEGRATION";
      var $longtermGoal = "LONG-TERM GOAL :";
      var $goalOne = "APPLY MY KNOWLEDGE IN NEW AREAS";
      var $goalTwo = "IMPROVE MY KNOWLEDGE IN AI-SDN-Blockchain-...";
      
   function initIdentityResults(i){
       $("#message").addClass("sign cursor").text(message.substring(0, i));
         if(i < message.length){
             setTimeout(function(){
                 initIdentityResults(i + 1);
             }, 35);   
         }else{
            $('#message').removeClass("cursor");
            var loadingResume = function(){
                  $("#loadingMessage2").show()
                  var dotAlpha = document.getElementById("alpha-loading");
                  var loadingAlpha = setInterval(function() {
                   if(dotAlpha.innerHTML.length == 6) {
                       dotAlpha.innerHTML = "";
                   } else {
                       dotAlpha.innerHTML += ".";
                       setTimeout(function() {
                           clearInterval(loadingAlpha);
                           $("#loadingMessage2").hide();
                        }, 2000);
                   }
               }, 350);  // Dot Speed
            }
            loadingResume();
            function initName(i){
               $("#name").addClass("sign cursor").text($name.substring(0, i));
                  if(i < $name.length){
                     setTimeout(function(){
                        initName(i + 1);   
                     }, 35);
                  }else{
                     $("#name").removeClass("cursor");
                     setTimeout(function() {
                        initPhone(0);
                     }, 1500);      
                  }
            }
            setTimeout(function() {
               initName(0);
            }, 2500);
         }
         function initPhone(i){
            $("#phone").addClass("sign cursor").text($phone.substring(0, i));
                  if(i < $phone.length){
                     setTimeout(function(){
                        initPhone(i + 1);   
                     }, 35);
                  }else{
                     $("#phone").removeClass("cursor");
                     setTimeout(function() {
                        initfreetimeActivities(0);
                     }, 1500);
                  }
         }
         function initfreetimeActivities(i){
            $('#freetimeActivities-span').addClass('fa fa-wrench');
            $('#freetimeActivities').addClass("cursor").text($freetimeActivities.substring(0, i));
               if(i < $freetimeActivities.length){
                  setTimeout(function(){
                     initfreetimeActivities(i + 1);  
                  }, 35);
               }else{
                  $('#freetimeActivities').removeClass("cursor");
                     setTimeout(function() {
                        initprogramming(0);
                     }, 1500);
               }
         }
         function initprogramming(i){
            $('#programming').addClass("sign cursor").text($programming.substring(0, i));
               if(i < $programming.length){
                  setTimeout(function(){
                      initprogramming(i + 1);  
                  }, 35);
               }else{
                  $('#programming').removeClass("cursor");
                     setTimeout(function() {
                        initlab(0);
                     }, 1500);
               }
         }
         function initlab(i){
            $('#lab').addClass("sign cursor").text($lab.substring(0, i));
               if(i < $lab.length){
                  setTimeout(function(){
                      initlab(i + 1);  
                  }, 35);
               }else{
                  $('#lab').removeClass("cursor");
                     setTimeout(function() {
                        initIntegration(0);
                     }, 1500);
               }
         }
         function initIntegration(i){
            $('#Integration').addClass("sign cursor").text($Integration.substring(0, i));
               if(i < $Integration.length){
                  setTimeout(function(){
                      initIntegration(i + 1);  
                  }, 35);
               }else{
                  $('#Integration').removeClass("cursor");
                  setTimeout(function() {
                        initlongtermGoal(0);
                     }, 1500);
               }
         }
         function initlongtermGoal(i){
            $('#longtermGoal-span').addClass("fa fa-user")
            $('#longtermGoal').addClass("cursor").text($longtermGoal.substring(0, i));
               if(i < $longtermGoal.length){
                  setTimeout(function(){
                      initlongtermGoal(i + 1);  
                  }, 35);
               }else{
                  $('#longtermGoal').removeClass("cursor");
                  setTimeout(function() {
                        initgoalOne(0);
                     }, 1500);
               }
         }
         function initgoalOne(i){
            $('#goalOne').addClass("sign cursor").text($goalOne.substring(0, i));
               if(i < $goalOne.length){
                  setTimeout(function(){
                      initgoalOne(i + 1);  
                  }, 35);
               }else{
                  $('#goalOne').removeClass("cursor");
                  setTimeout(function() {
                        initgoalTwo(0);
                     }, 1500);
               }
         }
         function initgoalTwo(i){
            $('#goalTwo').addClass("sign cursor").text($goalTwo.substring(0, i));
               if(i < $goalTwo.length){
                  setTimeout(function(){
                      initgoalTwo(i + 1);  
                  }, 35);
               }else{
                  //$('#design-animation').removeClass("cursor");
               }
         }
      }
      
   function initProgramAlpha(i){
       $("#greeting").addClass("cursor").text(greeting.substring(0, i));
         if(i < greeting.length){
             setTimeout(function(){
                 initProgramAlpha(i + 1);
             }, 35);   
         }else{
            $("#greeting").removeClass("cursor");
            initIdentityResults(0);
         }
      }
      initProgramAlpha(0)

}, 1500);

initProgram()


