const numberLinks = document.querySelectorAll("a");
const [leftButton, rightButton] = document.querySelectorAll("button");
let num = 0;

const updateActiveLink = (newNum) => {
    numberLinks[num].classList.remove("active");
    numberLinks[newNum].classList.add("active");
    num = newNum;
};

numberLinks;

rightButton.addEventListener("click", () => {
    if (num < numberLinks.length - 1) {
        updateActiveLink(num + 1);
    }
});

leftButton.addEventListener("click", () => {
    if (num > 0) {
        updateActiveLink(num - 1);
    }
});
