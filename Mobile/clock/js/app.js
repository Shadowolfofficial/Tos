function onReady() {
    console.log('Bing Bang!!!');

    setInterval(updateClock,1000);
    updateClock();
}

function updateClock() {
    var date = new Date();
    var now = date.getHours()+':'+date.getMinutes();
    var clock = document.getElementById('clock');

    clock.innerHTML = formatDigits(now);
}

function formatDigits(val) {
    if (val<10)
        val = '0' + val;

    return val;
}

window.onload = onReady();