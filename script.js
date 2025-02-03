function switchTab(tab) {
    // Deselect all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Activate the selected tab
    document.querySelector(`.tab:contains(${tab})`).classList.add('active');
}
document.getElementById("scrollButton").addEventListener("click", function() {
    let scrollAmount = 660; // Adjust this value for how much to scroll up
    let duration = 500; // Duration of the animation in milliseconds

    let start = window.scrollY;
    let end = start + scrollAmount;
    let startTime = performance.now();

    function scrollStep(currentTime) {
        let elapsed = currentTime - startTime;
        let progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing function for a better animation effect
        let easeInOut = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, start + (end - start) * easeInOut);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
});

        function openModal(modalId) {
            document.getElementById(modalId).style.display = "flex";
        }
    
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = "none";
        }