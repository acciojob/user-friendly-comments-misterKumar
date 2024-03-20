const commentsContainer = document.querySelector(".comments-container");
const textBoxInput = document.querySelector("#textInput");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
    if (textBoxInput.value.length !== 0) {
        const div = document.createElement("div");
        div.classList.add("comment");
		const date = new Date(); 
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
		const day = date.getDate().toString().padStart(2, "0");
		const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
		const year = date.getFullYear();
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");
		const seconds = date.getSeconds().toString().padStart(2, "0");

        //const dateString = `${dayOfWeek}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`;
		const dateString = date.toISOString();
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
