

const t = parseFloat(document.getElementById('temp').textContent);
const s = parseFloat(document.getElementById('wind').textContent);
let x = 35.74 + (0.6215*t) - (35.75* Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16));


if (t <=50 && s > 3){
    document.getElementById("chill").textContent = x + "\xB0F";
} else{
    document.getElementById('message').textContent ="No windchill today.";
}

