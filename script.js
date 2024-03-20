//your JS code here. If required.
const commentsContainer = document.querySelector(".comments-container");
const textBoxInput = document.querySelector("#textInput");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
    if (textBoxInput.value.length !== 0) {
        const div = document.createElement("div");
        div.classList.add("comment");

        const date = new Date(); // Current date and time
        const dateString = formatDate(date); // Format date string

        div.innerHTML = `
            <h1>${textBoxInput.value}</h1>
            <div class="author">
                <p>Mister Kumar</p>
                <p>${dateString}</p>
            </div>
        `;

        commentsContainer.prepend(div); // Prepend new comment to display in descending order
        textBoxInput.value = ""; // Clear input field after submission
    }
});

// Function to format date string
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return date.toLocaleDateString('en-US', options);
}
