document.getElementById("menu-toggle").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains("open")) {  // Menü schließen
        sidebar.classList.remove("open");
    } else {  // Menü öffnen
        sidebar.classList.add("open");
    }
});

