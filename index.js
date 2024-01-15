function changeMenu() {
    if (document.getElementById("options-select").style.display === 'flex' && window.innerWidth < 940) {
        document.getElementById("options-select").style.display = 'none'
    }
    else {
        document.getElementById("options-select").style.display = 'flex'
    }
};
