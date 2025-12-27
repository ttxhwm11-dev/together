const showImage = document.getElementById("showImage");
const questionText = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const noImages = [
    "img/wronged.png",
    "img/sad.png",
    "img/beg.png",
    "img/shock.png",
    "img/no.png",
    "img/really.png"
]
const noTexts = [
    "再考虑一下嘛~",
    "求你了，我会心痛",
    "再给你磕一个",
    "再想想呗",
    "不要这样嘛！",
    "真的不考虑吗？"
];

let name = ''
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
name = params.get('name') ? params.get('name') : ''
questionText.textContent += ` ${name}`;

let clickCount = 0;

noButton.addEventListener("click", function () {
    clickCount += 1;
    if (clickCount <= 6) {
        showImage.src = noImages[clickCount - 1]
        noButton.innerText = noTexts[clickCount - 1];
    }
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    showImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

});

yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-wrapper">
            <p class="yes-text">爱你呦，儿子！</p>
            <img src="img/happy.png" alt="开心" class="yes-image">
        </div>
    `;
});