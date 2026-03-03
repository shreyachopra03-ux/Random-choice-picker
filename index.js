const textarea = document.querySelector('#textarea');
const tagsContainer = document.querySelector('.tags');

textarea.focus();

textarea.addEventListener("keydown", (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();

    // Get raw string
    const string = e.target.value;

    // Split
    const array = string.split(",");

    // Trim
    const trim = array.map((t) => t.trim());
    // console.log(trim);

    // Remove empty values/spaces
    const cleanedArray = trim.filter((f) => f !== "");
    // console.log(emptyValue);

    // Clear old tags
    tagsContainer.innerHTML = "";

    // Render new tags
    cleanedArray.forEach(function(item) {
      const span = document.createElement('span');
      span.classList.add(
        'tag',
        'text-white',
        'bg-pink-600',
        'm-2',
        'p-2',
        'rounded-lg'
      )
      span.textContent = item;
      tagsContainer.appendChild(span);
    });

    // select all the rendered tags
    const allTags = document.querySelectorAll('.tag');
    
    // check array's length
    if(allTags.length === 0) return;

    // generate random index
    const randomIndex = Math.floor(Math.random() * allTags.length);

    // Highlight that random index
    allTags[randomIndex].classList.add('highlight', 'bg-purple-700', 'scale-100');

  }
})



