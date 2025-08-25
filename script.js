document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello, World!";
    const typewriterElement = document.getElementById('typewriter-text');
    const cursor = document.getElementById('cursor');
    let i = 0;
    
    // Hide cursor initially
    cursor.style.display = 'none';
    
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust speed here (150ms between characters)
        } else {
            // Show blinking cursor after typing is complete
            cursor.style.display = 'inline-block';
            // Remove the border-right from the text element
            typewriterElement.style.borderRight = 'none';
        }
    }
    
    // Start the typewriter effect after a brief delay
    setTimeout(typeWriter, 500);
});
