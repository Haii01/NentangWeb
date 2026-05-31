const images = [

    "https://placehold.co/800x450?text=Image+1",
    "https://placehold.co/800x450?text=Image+2",
    "https://placehold.co/800x450?text=Image+3",
    "https://placehold.co/800x450?text=Image+4",
    "https://placehold.co/800x450?text=Image+5",
    "https://placehold.co/800x450?text=Image+6",
    "https://placehold.co/800x450?text=Image+7",
    "https://placehold.co/800x450?text=Image+8",
    "https://placehold.co/800x450?text=Image+9"

];

let currentIndex = 0;
let slideshow = null;

const galleryImage =
    document.querySelector("#galleryImage");

const prevBtn =
    document.querySelector("#prevBtn");

const nextBtn =
    document.querySelector("#nextBtn");

const modal =
    document.querySelector("#modal");

const modalImage =
    document.querySelector("#modalImage");

const overlay =
    document.querySelector("#overlay");

const commandInput =
    document.querySelector("#commandInput");

const commandList =
    document.querySelector("#commandList");
const commands = [

    {
        name: "First Image",
        action: () => showImage(0)
    },

    {
        name: "Last Image",
        action: () => showImage(8)
    },

    {
        name: "Toggle Slideshow",
        action: toggleSlideshow
    },

    {
        name: "Open Modal",
        action: openModal
    },

    {
        name: "Close Modal",
        action: closeModal
    }

];

function showImage(index) {

    currentIndex = index;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    galleryImage.src =
        images[currentIndex];
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

function toggleSlideshow() {

    if (slideshow) {

        clearInterval(slideshow);
        slideshow = null;
        return;
    }

    slideshow =
        setInterval(nextImage, 2000);
}

function openModal() {

    modalImage.src =
        images[currentIndex];

    modal.classList.remove(
        "hidden"
    );
}

function closeModal() {

    modal.classList.add(
        "hidden"
    );
}

function renderCommands(data) {

    commandList.textContent = "";

    data.forEach(command => {

        const li =
            document.createElement("li");

        li.textContent =
            command.name;

        li.addEventListener(
            "click",
            () => {
                command.action();
                closePalette();
            }
        );

        commandList.appendChild(li);

    });

}

function openPalette() {

    overlay.classList.remove(
        "hidden"
    );

    commandInput.value = "";

    commandInput.focus();

    renderCommands(commands);
}

function closePalette() {

    overlay.classList.add(
        "hidden"
    );
}
prevBtn.addEventListener(
    "click",
    prevImage
);

nextBtn.addEventListener(
    "click",
    nextImage
);

galleryImage.addEventListener(
    "click",
    openModal
);

modal.addEventListener(
    "click",
    closeModal
);

commandInput.addEventListener(
    "input",
    () => {

        const keyword =
            commandInput.value
            .toLowerCase();

        const filtered =
            commands.filter(command =>

                command.name
                .toLowerCase()
                .includes(keyword)

            );

        renderCommands(filtered);

    });
document.addEventListener(
    "keydown",
    e => {

        if (
            e.ctrlKey &&
            e.key.toLowerCase() === "k"
        ) {

            e.preventDefault();

            openPalette();
            return;
        }

        if (e.key === "Escape") {

            closeModal();
            closePalette();
            return;
        }

        if (
            document.activeElement ===
            commandInput
        ) {
            return;
        }

        if (e.key === "ArrowRight") {
            nextImage();
        }

        if (e.key === "ArrowLeft") {
            prevImage();
        }

        if (e.code === "Space") {

            e.preventDefault();

            toggleSlideshow();
        }

        const number =
            parseInt(e.key);

        if (
            number >= 1 &&
            number <= 9
        ) {

            showImage(number - 1);
        }

    });
commandInput.addEventListener(
    "keydown",
    e => {

        if (e.key === "Enter") {

            const first =
                commandList.querySelector("li");

            if (first) {
                first.click();
            }
        }

    });
showImage(0);