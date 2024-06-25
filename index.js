$(document).ready(function() {
    $("#styleButton").click(function() {
        // Redesign the complete page using jQuery
        $("body").css({
            "background-color": "#f4f4f4",
            "color": "#333"
        });

        $("h1, h2").css("color", "#007bff");

        $("section").css({
            "background-color": "#fff",
            "border": "1px solid #ddd",
            "border-radius": "8px",
            "padding": "15px",
            "margin-bottom": "20px"
        });

        $("ul").css("list-style-type", "circle");
    });
});