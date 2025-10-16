const GalleryImage = Array.from(document.querySelectorAll("#SelectImage img"));
let CurrentImage = 0;

const OpenModel = (src, alt) => {
    const Model = document.querySelector("#ImageModel");
    const ModelImage = document.querySelector("#ModelImage");
    const ImageCounter = document.querySelector("#ImageCounter");
    
    // Find clicked image index
    CurrentImage = GalleryImage.findIndex(img => img.src === src);
    
    // Set modal image
    ModelImage.src = src;
    ModelImage.alt = alt;
    
    // Update counter
    updateImageCounter();
    
    // Show modal
    Model.classList.remove("hidden");
    document.body.style.overflow = "hidden";
};

const closeModel = () => {
    const Model = document.querySelector("#ImageModel");
    Model.classList.add("hidden");
    document.body.style.overflow = "auto";
};

const navigateImage = (direction) => {
    CurrentImage += direction;
    
    if (CurrentImage >= GalleryImage.length) {
        CurrentImage = 0;
    } else if (CurrentImage < 0) {
        CurrentImage = GalleryImage.length - 1;
    }

    const ModelImage = document.querySelector("#ModelImage");
    const ClickImage = GalleryImage[CurrentImage];
    ModelImage.src = ClickImage.src;
    ModelImage.alt = ClickImage.alt;

    updateImageCounter();
};

const updateImageCounter = () => {
    const ImageCounter = document.querySelector("#ImageCounter");
    ImageCounter.textContent = `${CurrentImage + 1} / ${GalleryImage.length}`;
};

// Close modal when clicking outside the image
document.querySelector("#ImageModel").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        closeModel();
    }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    const Model = document.querySelector("#ImageModel");
    if (!Model.classList.contains("hidden")) {
        if (e.key === "Escape") {
            closeModel();
        } else if (e.key === "ArrowLeft") {
            navigateImage(-1);
        } else if (e.key === "ArrowRight") {
            navigateImage(1);
        }
    }
});
