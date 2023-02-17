document.addEventListener('DOMContentLoaded', function () { 
    window.setTimeout(function() {
        var svgElement = document.querySelector('svg');
        if (svgElement) {
            svgElement.classList.add('animated');
        }
    }, 1000); 
})