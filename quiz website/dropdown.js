const topics = ["Physics","Capital Cities"];
const topicDropdown = document.getElementById("topic-dropdown")
function populateDropdown() {
  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicDropdown.appendChild(option);
  });
}
populateDropdown();

topicDropdown.addEventListener("change", (event) => { // Use "change" for dropdown selection
    const selectedOption = event.target;
    console.log(selectedOption)
    if (selectedOption.value === "Capital Cities") {
      const capitalLink = document.createElement("a");
      capitalLink.href = "capitalcities.html";
      capitalLink.textContent = "Submit";
      const container = document.getElementById("link-container");
      container.innerHTML="";
      container.appendChild(capitalLink);
    }
    if (selectedOption.value === "Physics") {
        const capitalLink = document.createElement("a");
        capitalLink.href = "physics.html";
        capitalLink.textContent = "Submit";
        const container = document.getElementById("link-container");
        container.innerHTML="";
        container.appendChild(capitalLink);
      }
});
  