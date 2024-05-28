document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn-toggle");

    // Check the current theme on page load and apply it
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Add event listener to the button
    if (btn) {  // Ensure the button exists before adding the event listener
        btn.addEventListener("click", function() {
            document.body.classList.toggle("dark-theme");

            // Save the theme preference in localStorage
            let theme = "light";
            if (document.body.classList.contains("dark-theme")) {
                theme = "dark";
            }
            localStorage.setItem("theme", theme);
        });
    }
});