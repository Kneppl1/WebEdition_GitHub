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