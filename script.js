const targetDate = new Date("2025-06-27T00:00:00");

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "<h2>Chegou o dia 27 de Junho!</h2>";
        return;
    }

    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    updateFlipCard("months", months);
    updateFlipCard("days", days);
    updateFlipCard("hours", hours);
    updateFlipCard("minutes", minutes);
    updateFlipCard("seconds", seconds);
}

function updateFlipCard(type, value) {
    const frontElement = document.getElementById(`${type}-front`);
    const backElement = document.getElementById(`${type}-back`);
    const flipCard = document.getElementById(`${type}-card`);

    const newValue = String(value).padStart(2, "0");

    if (frontElement.textContent !== newValue) {
        backElement.textContent = newValue;
        flipCard.classList.add("flip");

        setTimeout(() => {
            frontElement.textContent = newValue;
            flipCard.classList.remove("flip");
        }, 500);
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
