$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        // You can add client-side validation here
        if ($("#name").val().trim() === "") {
            alert("Name is required.");
            e.preventDefault();
        }
    });
});
