const textarea = document.querySelector('#textarea');

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    console.log(e.target.value);
  }
});