$(window).on('load', function() {
  $("#floater").hide();
})


$("#portfolioNav").on("click", function () {
   
const portfolio = document.getElementById("showPortfolio");
portfolio.scrollIntoView({ block: "end", behavior: "smooth" });
$("#floater").show();
  });




$("#floater").on("click", function () {
  $(window).scrollTop(0);
  $("#floater").hide();
 
    });

$("#aboutButton").on("click", function () {
   
  $(window).scrollTop();
        });

        
$("#contactButton").on("click", function () {
   
  const portfolio = document.getElementById("foot");
  portfolio.scrollIntoView({ block: "end", behavior: "smooth" });
  $("#floater").show();
        });
 
 
 
$("#send-button").on("click", function () {
event.preventDefault();
  alertify.alert("Message has been sent. ");
          
                });

                $("#close-button").on("click", function () {
                  event.preventDefault();
                   modal.close();
                            
                                  });

//         $("contact-form").submit(function(e){

// // var name = document.getElementById("inputName");
// // var message = document.getElementById("message-text");
// // if (!name.value || !message.value) {
//   alertify.error ("This is working")
// })


