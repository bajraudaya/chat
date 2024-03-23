windows.document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("send-container");
    const messageInput = document.getElementById("messageInp");
    const container = document.querySelector(".container");
    const notificationSound = document.getElementById('notificationSound');
    const name = prompt("Enter your name to join the chat");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const message = messageInput.value.trim();

        if (message !== "") {
            displayMessage("right", "You", message);
            // Add your code to send the message to the server if needed

            messageInput.value = "";
            playNotificationSound();
        }
    });

    function displayMessage(position, sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", position);
        messageDiv.textContent = `${sender}: ${text}`;
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    }

    function playNotificationSound() {
        notificationSound.play();
    }
});
