$(function () {
    $(".devour").on("click", function (event) {
        // var id = $(this).data("id");
        // var eaten = $(this).data("eaten");
        // console.log(id)

        // var newEatenState = {
        //     eaten: true
        // };

        // // Send the PUT request.
        // $.ajax("/" + id, {
        //     type: "PUT",
        //     data: newEatenState
        // }).then(
        //     function () {
        //         console.log("changed eaten to", true);
        //         // Reload the page to get the updated list
        //         location.reload();
        //     }
        // );
        event.preventDefault();

        var newEatenState = {
            eaten: true,
        };

        console.log(newEatenState)
        $.put("/", newEatenState).then(function (data) {
            console.log("burger changed");

        })
        location.reload()
    });


})