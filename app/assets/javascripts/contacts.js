$(document).ready(function () {
    $("#new_contact").on("ajax:success", function(e, data, status, xhr) {
        $("#new_contact").append(status)
        $('#contact-container').append("<p>" + data["message"] + "</p>")
    }).on("ajax:error", function(e, xhr, status, error) {
        $("#new_contact_message").append("<p>ERROR</p>")
    });
});
