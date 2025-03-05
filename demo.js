const boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
    const svg = box.querySelector('.svg');
    const plusIcon = box.querySelector(`#plus-icon-${index + 1}`);
    const closeIcon = box.querySelector(`#close-icon-${index + 1}`);
    const para = box.querySelector('.para-toggle');

    svg.addEventListener("click", () => {
        para.classList.toggle("show");
        plusIcon.style.display = para.classList.contains("show") ? "none" : "block";
        closeIcon.style.display = para.classList.contains("show") ? "block" : "none";
    });
});