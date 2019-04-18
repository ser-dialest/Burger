// Response to user input on burger site
// console.log("loaded!");

$(document).ready(function() {
    $("#create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("button clicked.")
        var newBurger = {
            name: $("#name").val().trim(),
        };

        console.log(newBurger);
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created a burger.");
            location.reload();
        });
    });

    $(".devour").on("click", function(event) {
        event.preventDefault();
        console.log("Devour burger #" + $(this).attr("id"));

        $.ajax("/api/burgers/" + $(this).attr("id"), {
            type: "PUT"
        }).then(function() {
            console.log("Devoured the burger.");
            location.reload();
        });
    })
})
