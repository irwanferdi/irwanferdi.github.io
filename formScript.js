document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var queryString = new URLSearchParams(formData).toString();
    window.location.href = 'table.html?' + queryString;
});
