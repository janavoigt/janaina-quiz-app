const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question-card');
const answerInput = document.querySelector('[data-js="answer-card');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const section = document.createElement("section");
  section.classList.add("card-section");

  const bookmarkButton = document.createElement("img");
  bookmarkButton.src = "./resources/bookmark_transparent.png";
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.alt = "bookmark-select1";
  bookmarkButton.setAttribute("data-js", "bookmark-button");
  section.append(bookmarkButton);

  const titleH2 = document.createElement("h2");
  titleH2.classList.add("card-title");
  titleH2.textContent = data["question-card"];
  section.append(titleH2);

  const answerButton = document.createElement("button");
  answerButton.classList.add("card-button");
  answerButton.textContent = "Show Answer";

  section.append(answerButton);

  const answer = document.createElement("p");
  answer.hidden = true;
  answer.textContent = data["answer-card"];
  section.append(answer);

  const tagDiv = document.createElement("div");
  const tagParagraph = document.createElement("p");

  const tag = data["tag-input"];
  tagParagraph.textContent = tag.startsWith("#") ? tag : "#" + tag;

  tagDiv.append(tagParagraph);
  section.append(tagDiv);

  answerButton.addEventListener("click", () => {
    answer.hidden = !answer.hidden;

    answerButton.textContent = answerButton.textContent.includes("Show Answer")
      ? "Hide Answer"
      : "Show Answer";
  });

  bookmarkButton.addEventListener("click", () => {
    if (bookmarkButton.src.includes("bookmark_transparent.png")) {
      bookmarkButton.src = "./resources/bookmark_filled.png";
    } else {
      bookmarkButton.src = "./resources/bookmark_transparent.png";
    }
  });

  document.body.append(section);
});

function charactersLeft(event) {
  const numCharacters = event.target.value.length;
  const charactersText = document.querySelector(
    '[data-js="' + event.target.name + '-characters-left"]'
  );
  charactersText.textContent = 150 - numCharacters + " characters left";
}

questionInput.addEventListener("input", charactersLeft);
answerInput.addEventListener("input", charactersLeft);
