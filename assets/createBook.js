const form = document.getElementById("create-book-form");

// add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the values in our inputs
  const name = document.getElementById("book-name").value;
  const author = document.getElementById("book-author").value;

  // have our values in one object
  const data = { name, author };

  // interaction with the API endpoint
  fetch('http://localhost:4000/api/v1/books', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    if (data.ok){
      alert(data.message)
    } else {
      alert(data.errors.name)
    }
  })
  .catch(error => alert(error))
});
