window.addEventListener('load', function() {
    // All assets (including images) have loaded
    document.body.style.visibility = 'visible'; // Show the body
});
// Array of images and corresponding background colors
const images = ["/Tropicana5.webp", "/Tropicana4.webp", "/Tropicana3.webp", "/Tropicana2.webp", "/Tropicana1.webp"]; // Add the new image path
const colors = ["white", "blue", "#ff6600", "#E90074", "orange"]; // Adjusted colors to match the images

// Texts corresponding to each image
const texts = ["Pineapple", "Summer", "Cherry", "Strawberry", "Orange"];

function preloadImages(imageArray) {
    let loadedImages = 0;
    const totalImages = imageArray.length;

    imageArray.forEach((imageUrl) => {
        const img = new Image();

        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                initializePage(); // Call initialization once all images are loaded
            }
        };

        img.src = imageUrl;
    });
}
// Wait for the DOM content to fully load before executing script
document.addEventListener("DOMContentLoaded", function() {
    preloadImages(images); // Preload all images first

    // Change the background gradient of the body to match the first image color
    document.body.style.background = `linear-gradient(to bottom right, ${colors[1]}, ${colors[0]})`; // Set initial gradient

    // Select all circles
    const circles = document.querySelectorAll(".circle");

    // Set initial circle colors to match the corresponding page colors
    circles.forEach((circle, index) => {
        circle.style.backgroundColor = colors[index];
    });

    // Select the text-behind element
    const textBehind = document.querySelector(".text-behind");

    function changeImageAndColor(circleIndex) {
        if (circleIndex >= 1 && circleIndex <= 5) {
            const mainImage = document.getElementById("mainImage");
            const newImageUrl = images[circleIndex - 1];
            const newColor = colors[circleIndex - 1];
            const textBehind = document.querySelector(".text-behind");

            
    
            // Fade out main image and text behind
            mainImage.style.opacity = 0;
            textBehind.style.opacity = 0;
    
            // Preload the new image
            const tempImg = new Image();
            tempImg.src = newImageUrl;
    
            // Wait for the new image to load before making changes
            tempImg.onload = function() {
                // Ensure all changes are applied before fading in
                setTimeout(function() {
                    // Update main image source and color gradient after loading
                    mainImage.src = newImageUrl;
                    if (circleIndex === 5) {
                        document.body.style.background = `linear-gradient(to bottom right, ${newColor}, ${colors[0]})`;
                    } else {
                        document.body.style.background = `linear-gradient(to bottom right, ${newColor}, ${colors[circleIndex]})`;
                    }
    
                    // Update text behind
                    textBehind.textContent = texts[circleIndex - 1];
    
                    // Fade in main image and text behind after update
                    mainImage.style.opacity = 1;
                    textBehind.style.opacity = 1;
                }, 800); // Adjust delay if needed
            };
    
            // Highlight the clicked circle
            const circles = document.querySelectorAll(".circle");

            circles.forEach((circle, index) => {
                circle.classList.toggle("highlight", index === circleIndex - 1);
            });
    
            // Update small images based on circleIndex
            const smallImageTopLeft = document.querySelector(".small-image.top-left");
            const smallImageBottomRight = document.querySelector(".small-image.bottom-right");
            smallImageTopLeft.classList.add('rotate');
            smallImageBottomRight.classList.add('rotate');
    
            // Remove the rotate class from both images to reset any previous rotation
            smallImageTopLeft.classList.remove('rotate');
            smallImageBottomRight.classList.remove('rotate');
    
            // Update leaf images based on circleIndex
            const leafImagesTopLeft = document.querySelectorAll(".corner-image.top-left");
            const leafImagesBottomRight = document.querySelectorAll(".corner-image.bottom-right");
    
            // Remove rotate class from all leaf images to reset any previous rotation
            leafImagesTopLeft.forEach(image => image.classList.remove('rotate'));
            leafImagesBottomRight.forEach(image => image.classList.remove('rotate'));
    
            switch (circleIndex) {
                case 1:
                    smallImageTopLeft.src = "/smallFruit/coconut.webp";
                    smallImageTopLeft.style.width = ""; // Adjust width
                    smallImageTopLeft.style.height = "auto"; // Maintain aspect ratio
                    smallImageTopLeft.style.top = ""; // Adjust top position
                    smallImageTopLeft.style.left = ""; // Adjust left position
                    smallImageTopLeft.style.zIndex = "2"; // Adjust z-index
                    smallImageTopLeft.offsetWidth; // Reflow
                    smallImageTopLeft.classList.add('rotate');
    
                    leafImagesTopLeft[0].classList.add('rotate');
                    leafImagesBottomRight[0].classList.add('rotate');
                    leafImagesTopLeft[1].classList.add('rotate');
                    leafImagesBottomRight[1].classList.add('rotate');
    
                    smallImageBottomRight.src = "/smallFruit/pineappleSlice.webp";
                    smallImageBottomRight.style.width = ""; // Adjust width
                    smallImageBottomRight.style.height = "auto"; // Maintain aspect ratio
                    smallImageBottomRight.style.bottom = ""; // Adjust bottom position
                    smallImageBottomRight.style.right = ""; // Adjust right position
                    smallImageBottomRight.style.zIndex = "-2"; // Adjust z-index
                    smallImageBottomRight.offsetWidth; // Reflow
                    smallImageBottomRight.classList.add('rotate');
    
                    break;
    
                case 2:
                    smallImageTopLeft.src = "/smallFruit/pineappleSlice.webp";
                    smallImageTopLeft.style.width = ""; // Adjust width
                    smallImageTopLeft.style.height = "auto"; // Maintain aspect ratio
                    smallImageTopLeft.style.top = ""; // Adjust top position
                    smallImageTopLeft.style.left = ""; // Adjust left position
                    smallImageTopLeft.style.zIndex = "2"; // Adjust z-index
                    smallImageTopLeft.offsetWidth; // Reflow
                    smallImageTopLeft.classList.add('rotate');
    
                    leafImagesTopLeft[0].classList.add('rotate');
                    leafImagesBottomRight[0].classList.add('rotate');
                    leafImagesTopLeft[1].classList.add('rotate');
                    leafImagesBottomRight[1].classList.add('rotate');
    
                    smallImageBottomRight.src = "/smallFruit/cherries.webp";
                    smallImageBottomRight.style.width = "120px"; // Adjust width
                    smallImageBottomRight.style.height = "auto"; // Maintain aspect ratio
                    smallImageBottomRight.style.bottom = ""; // Adjust bottom position
                    smallImageBottomRight.style.right = ""; // Adjust right position
                    smallImageBottomRight.style.zIndex = "-2"; // Adjust z-index
                    smallImageBottomRight.offsetWidth; // Reflow
                    smallImageBottomRight.classList.add('rotate');
                    break;
    
                case 3:
                    smallImageTopLeft.src = "/smallFruit/pineapplecircle.webp";
                    smallImageTopLeft.style.width = ""; // Adjust width
                    smallImageTopLeft.style.height = "auto"; // Maintain aspect ratio
                    smallImageTopLeft.style.top = ""; // Adjust top position
                    smallImageTopLeft.style.left = ""; // Adjust left position
                    smallImageTopLeft.style.zIndex = "2"; // Adjust z-index
                    smallImageTopLeft.offsetWidth; // Reflow
                    smallImageTopLeft.classList.add('rotate');
    
                    leafImagesTopLeft[0].classList.add('rotate');
                    leafImagesBottomRight[0].classList.add('rotate');
                    leafImagesTopLeft[1].classList.add('rotate');
                    leafImagesBottomRight[1].classList.add('rotate');
    
                    smallImageBottomRight.src = "/smallFruit/orangecircleslice.webp";
                    smallImageBottomRight.style.width = "300px"; // Adjust width
                    smallImageBottomRight.style.height = "auto"; // Maintain aspect ratio
                    smallImageBottomRight.style.bottom = ""; // Adjust bottom position
                    smallImageBottomRight.style.right = "-"; // Adjust right position
                    smallImageBottomRight.style.zIndex = "-2"; // Adjust z-index
                    smallImageBottomRight.offsetWidth; // Reflow
                    smallImageBottomRight.classList.add('rotate');
    
                    break;
    
                case 4:
                    smallImageTopLeft.src = "/smallFruit/strawberry.webp";
                    smallImageTopLeft.style.width = ""; // Adjust width
                    smallImageTopLeft.style.height = "auto"; // Maintain aspect ratio
                    smallImageTopLeft.style.top = ""; // Adjust top position
                    smallImageTopLeft.style.left = ""; // Adjust left position
                    smallImageTopLeft.style.zIndex = "2"; // Adjust z-index
                    smallImageTopLeft.offsetWidth; // Reflow
                    smallImageTopLeft.classList.add('rotate');
    
                    leafImagesTopLeft[0].classList.add('rotate');
                    leafImagesBottomRight[0].classList.add('rotate');
                    leafImagesTopLeft[1].classList.add('rotate');
                    leafImagesBottomRight[1].classList.add('rotate');
    
                    smallImageBottomRight.src = "/smallFruit/fullpeach.webp";
                    smallImageBottomRight.style.width = ""; // Adjust width
                    smallImageBottomRight.style.height = "auto"; // Maintain aspect ratio
                    smallImageBottomRight.style.bottom = ""; // Adjust bottom position
                    smallImageBottomRight.style.right = ""; // Adjust right position
                    smallImageBottomRight.style.zIndex = "-2"; // Adjust z-index
                    smallImageBottomRight.offsetWidth; // Reflow
                    smallImageBottomRight.classList.add('rotate');
    
                    break;
    
                case 5:
                    smallImageTopLeft.src = "/smallFruit/orangestraw.webp";

                    smallImageTopLeft.style.width = "130px"; // Adjust width
                    smallImageTopLeft.style.height = "auto"; // Maintain aspect ratio

                    smallImageTopLeft.style.top = ""; // Adjust top position
                    smallImageTopLeft.style.left = "40%"; // Clear left position

                    smallImageTopLeft.style.zIndex = "2"; // Adjust z-index
                    smallImageTopLeft.offsetWidth; // Reflow
                    smallImageTopLeft.classList.add('rotate');
    
                    leafImagesTopLeft[0].classList.add('rotate');
                    leafImagesBottomRight[0].classList.add('rotate');
                    leafImagesTopLeft[1].classList.add('rotate');
                    leafImagesBottomRight[1].classList.add('rotate');
    
                    smallImageBottomRight.src = "/smallFruit/orangecircleslice.webp";
                    smallImageBottomRight.style.width = ""; // Adjust width
                    smallImageBottomRight.style.height = "auto"; // Maintain aspect ratio
                    smallImageBottomRight.style.bottom = ""; // Adjust bottom position
                    smallImageBottomRight.style.right = ""; // Adjust right position
                    smallImageBottomRight.style.zIndex = "9"; // Adjust z-index
                    smallImageBottomRight.offsetWidth; // Reflow
                    smallImageBottomRight.classList.add('rotate');
    
                    break;
    
                default:
                    break;
            }
   }

}

    // Attach click event listeners to circles
    circles.forEach((circle, index) => {
        circle.addEventListener("click", function() {
            changeImageAndColor(index + 1); // Pass circle index (1-based) to changeImageAndColor function
        });
    });

    // Initialize with the first image and colors
    changeImageAndColor(1); // Initially set to the first image
});
