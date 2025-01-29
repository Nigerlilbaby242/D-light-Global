function switchTab(tab) {
    // Deselect all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Activate the selected tab
    document.querySelector(`.tab:contains(${tab})`).classList.add('active');
}
