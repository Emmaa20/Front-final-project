const optionMenu = document.querySelector(".select-menu"),
selectBtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelectorAll(".option"),
sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
optionMenu.classList.toggle("active")
);

options.forEach((option) => {
option.addEventListener("click", () => {
  let selectedOption = option.querySelector(".option-text").innerText;
  sBtn_text.innerText = selectedOption;

  optionMenu.classList.remove("active");
});
});


///////////////////////////////
const optionMenuu = document.querySelector(".select-menuu"),
selectBtnn = optionMenuu.querySelector(".select-btnn"),
optionss = optionMenuu.querySelectorAll(".optionn"),
sBtn_textt = optionMenuu.querySelector(".sBtn-textt");

selectBtnn.addEventListener("click", () =>
optionMenuu.classList.toggle("active")
);

optionss.forEach((optionn) => {
optionn.addEventListener("click", () => {
  let selectedOptionn = optionn.querySelector(".option-textt").innerText;
  sBtn_textt.innerText = selectedOptionn;

  optionMenuu.classList.remove("active");
});
});

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
