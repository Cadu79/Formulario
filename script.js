document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    console.log(jsonData);
    document.getElementById("contactForm").reset();
    document.getElementById("sucessMessage").classList.remove("hidden");
});
