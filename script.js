//your JS code here. If required.
const commentsContainer = document.querySelector(".comments-container");
const textBoxInput = document.querySelector("#textInput");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
    if (textBoxInput.value.length !== 0) {
        const div = document.createElement("div");
        div.classList.add("comment");

        const date = new Date(); // Current date and time
        const dateString = date.toLocaleString("en-US", { timeZone: "UTC" }); // Convert date to local string with UTC timezone

        div.innerHTML = `
            <h1>${textBoxInput.value}</h1>
            <div class="author">
                <p>Mister Kumar</p>
                <p>${dateString}</p>
            </div>
        `;

        commentsContainer.insertBefore(div, commentsContainer.firstChild); // Insert new comment at the beginning to display in descending order
        textBoxInput.value = ""; // Clear input field after submission
    }
});
