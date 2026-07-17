document.addEventListener("DOMContentLoaded", () => {

    const thumbs = document.querySelectorAll(".thumb");

    const image = document.getElementById("preview-image");
    const title = document.getElementById("preview-title");
    const text = document.getElementById("preview-text");
    const list = document.getElementById("preview-list");

    thumbs.forEach(thumb => {

        thumb.addEventListener("click", () => {

            // Retire la sélection actuelle
            thumbs.forEach(t => t.classList.remove("active"));

            // Sélectionne la miniature cliquée
            thumb.classList.add("active");

            // Met à jour l'image
            image.src = thumb.dataset.image;
            image.alt = thumb.dataset.title;

            // Met à jour le titre
            title.textContent = thumb.dataset.title;

            // Met à jour le texte
            text.textContent = thumb.dataset.text;

            // Met à jour la liste des points forts
            const points = thumb.dataset.points.split("|");

            list.innerHTML = "";

            points.forEach(point => {

                const li = document.createElement("li");

                li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${point}`;

                list.appendChild(li);

            });

        });

    });

});
const modal = document.getElementById("videoModal");

const open = document.getElementById("openVideo");

const close = document.querySelector(".close-video");

const video = document.getElementById("teaserVideo");

open.addEventListener("click", e => {

    e.preventDefault();

    modal.classList.add("active");

    video.currentTime = 0;

    video.play();

});

close.addEventListener("click", () => {

    modal.classList.remove("active");

    video.pause();

});

modal.addEventListener("click", e => {

    if(e.target === modal){

        modal.classList.remove("active");

        video.pause();

    }

});

/* Ferme automatiquement à la fin */

video.addEventListener("ended", () => {

    modal.classList.remove("active");

});