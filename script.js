const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const btn = document.querySelector("button");
btn.addEventListener("click", addTask);

function addTask() {
	const inputValue = inputBox.value.trim();
	if (inputValue === "") {
		alert("You must write something!");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputValue;
		listContainer.appendChild(li);

		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
