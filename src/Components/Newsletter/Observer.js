const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add class when in view
        } else {
            entry.target.classList.remove('show'); // Remove class when out of view
        }
    });
});

// Export the observer for use elsewhere if needed
export default Observer;