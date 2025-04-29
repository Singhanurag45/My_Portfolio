document.addEventListener("DOMContentLoaded", function () {
    const titles = ["Frontend Developer", "Web Developer"]; // Titles to cycle
    const titleSpan = document.querySelector(".title");
    let index = 0;

    function typeText(text, callback) {
        titleSpan.innerHTML = ""; // Clear previous text

        text.split("").forEach((letter, i) => {
            setTimeout(() => {
                const span = document.createElement("span");
                span.textContent = letter === " " ? "\u00A0" : letter; // Ensure spaces are visible
                titleSpan.appendChild(span);
            }, i * 100); // Delay for each letter
        });

        // Wait for typing animation to finish, then trigger callback
        setTimeout(callback, text.length * 100 + 1500);
    }

    function startTypingLoop() {
        typeText(titles[index], () => {
            setTimeout(() => {
                index = (index + 1) % titles.length; // Switch to next title
                startTypingLoop(); // Loop back
            }, 1000); // Pause before switching
        });
    }

    startTypingLoop(); // Start animation loop
});


document.getElementById("top-home").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}



    
