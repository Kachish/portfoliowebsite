function fadeInElement(element, delay = 0) {
    setTimeout(() => {
        element.classList.add('animate-fade-in');
    }, delay);
}

function slideUpElement(element, delay = 0) {
    setTimeout(() => {
        element.classList.add('animate-slide-up');
    }, delay);
}

function typeText(element, text, speed = 100) {
    let index = 0;
    element.textContent = '';
    
    return new Promise((resolve) => {
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}
