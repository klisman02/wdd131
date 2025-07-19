    (function () {
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) lastModSpan.textContent = document.lastModified;

    const tempEl = document.getElementById('temp');
    const windEl = document.getElementById('wind');
    const chillEl = document.getElementById('chill');

    if (tempEl && windEl && chillEl) {
        const temp = parseFloat(tempEl.textContent);
        const wind = parseFloat(windEl.textContent);

        if (!isNaN(temp) && !isNaN(wind)) {
        const chill = (temp <= 10 && wind > 4.8)
            ? calculateWindChill(temp, wind) + " °C"
            : "N/A";
        chillEl.textContent = chill;
        } else {
        chillEl.textContent = "N/A";
        }
    }

    function calculateWindChill(t, s) {
        return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
        ).toFixed(2);
    }
    })();
