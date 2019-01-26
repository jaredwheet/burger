$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("isDevoured");

    var newDevouredState = {
      devoured: isDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", isDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})


$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    name: $(".burgername").val().trim(),
    devoured: false
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".delete-burger").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

