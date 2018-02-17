$(function() {



  $(".change-devour").on("click", function(event) {
    console.log("Devour button")
    var id = $(this).data("id");
    var newState = $(this).data("devoured");

    var newEatState = {
      devoured: newState
    };

    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("Devour button")
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    console.log("button works")
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerInput").val().trim(),
      devoured: $("burger_name=devoured:checked")
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
       
        console.log("button works")
        location.reload();
      }
    );
  });
 

  
});