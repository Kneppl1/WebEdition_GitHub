// Menü-Toggle-Funktionalität
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    menuToggle.classList.toggle('active');
});
