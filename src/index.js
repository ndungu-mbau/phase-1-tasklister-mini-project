const tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const list = document.querySelector("#tasks");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const description = document.querySelector("#new-task-description");
    if (description.value) {
      tasks.push(description.value);
      description.value = "";
      list.innerHTML = "";
      tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
      });
    }
  });
});
