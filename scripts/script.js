
const truths = [
    "What’s something you’ve never told me?",
    "When did you first know you liked me?",
    "What’s your biggest fear in love?",
    "What’s your favorite memory with me?",
    "What’s one thing you want to improve in our relationship?"
];

const dares = [
    "Send a voice note saying something romantic",
    "Text me a flirty message using only emojis 😏",
    "Say 3 things you love about me—now!",
    "Draw a heart on your hand and send a photo",
    "Sing our song and send me the clip"
];

document.getElementById("rollButton").addEventListener("click", () => {
    const mixed = document.getElementById("mixedToggle").checked;
    let result;
    if (mixed) {
        const all = truths.concat(dares);
        result = all[Math.floor(Math.random() * all.length)];
    } else {
        result = truths[Math.floor(Math.random() * truths.length)];
    }
    document.getElementById("result").innerText = result;
});
