const intro = document.getElementById("intro");
const loading = document.getElementById("loading");
const website = document.getElementById("website");

const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");
const loadingText = document.getElementById("loadingText");

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");


/* START WEBSITE */

function startWebsite() {

    intro.style.display = "none";
    loading.style.display = "flex";

    let value = 0;

    const messages = [
        "Calculating cuteness...",
        "Detecting attitude...",
        "Measuring drama...",
        "Scanning smile...",
        "Checking birthday level...",
        "Analyzing beauty...",
        "Result: TOO CUTE ❤️"
    ];

    const timer = setInterval(function () {

        value++;

        progress.style.width = value + "%";
        percentage.textContent = value + "%";

        if (value < 20) {
            loadingText.textContent = messages[0];
        } else if (value < 35) {
            loadingText.textContent = messages[1];
        } else if (value < 50) {
            loadingText.textContent = messages[2];
        } else if (value < 65) {
            loadingText.textContent = messages[3];
        } else if (value < 80) {
            loadingText.textContent = messages[4];
        } else if (value < 95) {
            loadingText.textContent = messages[5];
        } else {
            loadingText.textContent = messages[6];
        }

        if (value >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                loading.style.display = "none";
                website.style.display = "block";

                window.scrollTo(0, 0);

                createConfetti();
                startHearts();

            }, 700);
        }

    }, 40);
}


/* SCROLL */

function goTo(id) {

    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* LOVE CALCULATOR */

function calculateLove() {

    const result = document.getElementById("loveResult");

    result.innerHTML = "Calculating... ❤️";

    setTimeout(function () {
        result.innerHTML = "Checking heart... 🫀";
    }, 700);

    setTimeout(function () {
        result.innerHTML = "ERROR: Love level too high! 🚨";
    }, 1400);

    setTimeout(function () {
        result.innerHTML = "Final result: ∞% ❤️😂";
        createConfetti();
    }, 2200);
}


/* MUSIC */

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(function () {
                musicButton.textContent = "⏸ PAUSE SONG";
            })
            .catch(function () {
                alert("Please click the button again to allow the music to play.");
            });

    } else {

        music.pause();
        musicButton.textContent = "▶ PLAY SONG";
    }
}


/* SECRET MESSAGE */

function secretMessage() {

    const secret = document.getElementById("secret");

    secret.innerHTML =
        "🤭 I TOLD YOU NOT TO CLICK IT!<br><br>" +
        "But since you did...<br><br>" +
        "❤️ HAPPY BIRTHDAY MISTUU ❤️<br><br>" +
        "You are officially my favorite angry bird , " +
        "best friend and beautiful person. 🥹<br><br>" +
        "Stay cute. Stay crazy. And please don't get too old. 😂🎂";

    createConfetti();
}


/* CONFETTI */

function createConfetti() {

    const emojis = ["🎉", "❤️", "💕", "✨", "🎂", "🎀", "🥳"];

    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("div");

        confetti.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 3000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        setTimeout(function () {
            confetti.remove();
        }, duration);
    }
}


/* FLOATING HEARTS */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"
    ];

    heart.textContent =
        heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}


function startHearts() {

    setInterval(function () {
        createHeart();
    }, 800);
}