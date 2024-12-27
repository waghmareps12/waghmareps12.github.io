// Add this function for project expansion
function toggleProject(header) {
    const details = header.nextElementSibling;
    const icon = header.querySelector('.expand-icon');
    
    // Close all other projects
    document.querySelectorAll('.project-details.active').forEach(detail => {
        if (detail !== details) {
            detail.classList.remove('active');
            detail.previousElementSibling.querySelector('.expand-icon').textContent = '+';
        }
    });
    
    // Toggle current project
    details.classList.toggle('active');
    icon.textContent = details.classList.contains('active') ? '−' : '+';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 