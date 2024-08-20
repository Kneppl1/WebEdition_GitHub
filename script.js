document.getElementById("menu-toggle").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains("open")) {  // Menü schließen
        sidebar.classList.remove("open");
    } else {  // Menü öffnen
        sidebar.classList.add("open");
    }
});

// Toggle für Einstellungen-Dropdown
document.querySelector('.settings-toggle').addEventListener('click', function() {
    document.querySelector('.settings-dropdown').classList.toggle('open');
});

// Toggle für Dark Mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.sidebar').classList.toggle('dark-mode');
    document.querySelector('.menu-toggle').classList.toggle('dark-mode');
    document.querySelectorAll('.sidebar ul li a').forEach(function(link) {
        link.classList.toggle('dark-mode');
    });
});
function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    const course = details.parentElement;

    if (details.style.display === "block") {
        details.style.display = "none";
        course.style.maxHeight = "250px"; // collapse
    } else {
        details.style.display = "block";
        course.style.maxHeight = "500px"; // expand
    }
};