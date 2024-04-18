const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="card-button__answer"]');
const answerCard = document.querySelector('[data-js="card-answer"]');

bookmarkButton.addEventListener("click", () => {
  if (bookmarkButton.src.includes("bookmark_transparent.png")) {
    bookmarkButton.src = "./resources/bookmark_filled.png";
  } else {
    bookmarkButton.src = "./resources/bookmark_transparent.png";
  }
});

answerButton.addEventListener("click", () => {
  answerCard.hidden = !answerCard.hidden;

  answerButton.textContent = answerButton.textContent.includes("Show Answer")
    ? "Hide Answer"
    : "Show Answer";
});
