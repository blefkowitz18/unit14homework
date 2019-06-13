$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");

        var newEatenState = {
            eaten: eaten
        };

        // Send the PUT request.
        $.ajax("/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed eaten to", eaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#addBurger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger Added");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})