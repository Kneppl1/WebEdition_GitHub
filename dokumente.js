document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert die Standard-Formularübermittlung
    
    var formData = new FormData();
    var fileInput = document.getElementById('document-upload');
    
    if (fileInput.files.length === 0) {
        alert('Bitte wählen Sie eine Datei aus.');
        return;
    }

    formData.append('document', fileInput.files[0]);
    
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Dokument erfolgreich hochgeladen!');
        loadDocuments(); // Nach dem Hochladen die Liste aktualisieren
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
});

// Beispiel für das Laden der Dokumentliste
function loadDocuments() {
    fetch('/documents')
    .then(response => response.json())
    .then(data => {
        var list = document.getElementById('document-list');
        list.innerHTML = ''; // Vorherige Liste leeren
        data.documents.forEach(doc => {
            var listItem = document.createElement('li');
            listItem.textContent = doc.name; // Dokumentname anzeigen
            list.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Fehler:', error);
    });
}

// Initiales Laden der Dokumente
loadDocuments();

// JavaScript für das Menü-Button Verhalten
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    menuToggle.classList.toggle('active');
});


