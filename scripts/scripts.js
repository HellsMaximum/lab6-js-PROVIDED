/****************** YOUR NAME: Douglas Dickens
/****************** create variables ******************/
let modelName = "XYZ";
let duration;

/****************** helper function ******************/
function recalculate() {
	const costLabel = document.getElementById("calculated-cost");
	let cost;
	if (modelName === "XYZ") {
		cost = duration * 100;
	} else if (modelName === "CPRG") {
		cost = duration * 213;
	}
	costLabel.innerHTML = cost;
}

/****************** model button logic ******************/
const modelButton = document.getElementById("model-button");
modelButton.addEventListener("click", changeModel);

function changeModel() {
	const currentModel = document.getElementById("model-text");
	if (modelName === "XYZ") {
		modelName = "CPRG";
		currentModel.innerHTML = "Model CPRG";
		recalculate();
	} else if (modelName === "CPRG") {
		modelName = "XYZ";
		currentModel.innerHTML = "Model XYZ";
		recalculate();
	}
}

/****************** duration button logic ******************/
const durationButton = document.getElementById("duration-button");

function changeDuration() {
	const durationText = document.getElementById("duration-text");
	duration = Number(prompt("Please input a new duration"));
	durationText.innerHTML = duration;
	recalculate();
}
durationButton.addEventListener("click", changeDuration);