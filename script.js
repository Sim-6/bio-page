document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "Hi!",
        "ich mag coding, gaming",
        "und Server",
        "Schau dir doch meine Porjekte an",
    ];
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100; // Adjust typing speed here
    const delayBetweenTexts = 2000; // Delay between switching texts

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("animated-text").innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.getElementById("animated-text").innerHTML = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeWriter();
            }, delayBetweenTexts);
        }
    }

    typeWriter();
});