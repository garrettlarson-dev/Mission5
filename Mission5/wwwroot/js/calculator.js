$(document).ready(function () {
    $('#calculate-button').click(function () {
        // Clear any previous error message
        $('.error-message').hide();

        // Get the number of hours and hourly rate
        var hours = $('#hours-input').val();
        var rate = $('#rate-display').val();

        // Validate the hours
        if (hours <= 0 || isNaN(hours)) {
            $('.error-message').show();
        } else {
            // Calculate the total
            var total = hours * rate;
            $('#total-display').val(total.toFixed(2));
        }
    });
});
