// JavaScript code for navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop - 20, // Adjust for the fixed navbar
          behavior: 'smooth'
      });
  }

  // JavaScript code for loading random images from Unsplash
  const projectImages = document.querySelectorAll('#projects img');
  const serviceImages = document.querySelectorAll('#services img');

  const unsplashAccessKey = "YourUnsplashAccessKey"; // Replace with your Unsplash Access Key
  const unsplashEndpoint = "https://api.unsplash.com/photos/random";
  const unsplashQueryParams = `?client_id=${unsplashAccessKey}&query=web development`;

  // Function to fetch and set random image for projects and services
  function getRandomImage(imageElement, isProject) {
      fetch(unsplashEndpoint + unsplashQueryParams)
          .then(response => response.json())
          .then(data => {
              const imageUrl = data.urls.regular;
              imageElement.src = imageUrl;

              // Set alt text based on whether it's a project or service image
              const altText = isProject ? "Project Image" : "Service Image";
              imageElement.alt = altText;
          })
          .catch(error => {
              console.error("Error fetching image:", error);
          });
  }

  // Load random images for projects
  projectImages.forEach((image, index) => {
      getRandomImage(image, true);
  });

  // Load random images for services
  serviceImages.forEach((image, index) => {
      getRandomImage(image, false);
  });
});
