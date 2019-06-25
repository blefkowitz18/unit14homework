$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var neweaten = $(this).data("neweaten");

        var newEatenState = {
            eaten: neweaten
        };
        console.log(newEatenState)
        console.log(id)
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed eaten to", newEatenState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})