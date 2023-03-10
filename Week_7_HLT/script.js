
//toggle button
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


//new entry form for recipe suggestions.
var form = document.getElementById("blogForm");
		form.addEventListener("submit", function(event) {
			event.preventDefault(); // prevent form from submitting

      //getting the values by ids
			var title = document.getElementById("title").value;
			var author = document.getElementById("author").value;
			var entry = document.getElementById("entry").value;

			if (title === "" || author === "" || entry === "") {  // input entered/available or not.
				alert("All fields must be completed.");
				return;
			}

      //getting entered info (inputs) as output on the page.
			var blogDiv = document.getElementById("blog");
			var blogEntry = document.createElement("div");
			blogEntry.innerHTML = "<h1>" + title + "</h1><h3>By " + author + "</h3><p>" + entry + "</p>";

			blogDiv.appendChild(blogEntry);

			form.reset(); //reset the form
		});