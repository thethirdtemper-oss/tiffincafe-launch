// Launch Date
const launchDate = new Date("January 01, 2027 00:00:00 GMT+0530").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = launchDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
        "🎉 WE ARE LIVE!";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

}

updateCountdown();

setInterval(updateCountdown, 1000);
