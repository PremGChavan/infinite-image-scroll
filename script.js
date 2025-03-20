const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photosArray = [];

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

const count = 10;
const apiKey =  "TkUesRe1IPrWneYXZe5zOJl5IeWz6dtSB3-ecVRfy9M";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function imageLoaded() {
    imagesLoaded++;
    if(imagesLoaded === totalImages) {
        ready = true;
        console.log("ready",ready);
    }
}

function displayPhotos() {
    totalImages = photosArray.length;

    imagesLoaded = 0;
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });
        
        const img = document.createElement('img'); // Ensure img is defined here

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description || "Unsplash Image",
            title: photo.alt_description || "Unsplash Image",
        });

        img.addEventListener('load', imageLoaded);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight && ready) {
        ready = false;
        getPhotos();
    }
});

getPhotos();


const scrollToTopButton = document.getElementById("scrollToTop");
if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

const darkModeToggle = document.getElementById("darkModeToggle");

// Function to update button text based on mode
function updateDarkModeButton() {
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️"; // Light mode icon
    } else {
        darkModeToggle.textContent = "🌙"; // Dark mode icon
    }
}

// Check if dark mode is already enabled in local storage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    updateDarkModeButton();
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update button emoji
    updateDarkModeButton();

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});
