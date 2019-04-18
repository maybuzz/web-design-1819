document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('keydown', keyHandler)
})

var callback = function() {
  document.addEventListener('click', () => {
    console.log("click");
  })
}

function keyHandler(e) {
	const keypress = {
		key: e.key.toLowerCase(),
		alted: e.altKey,
		controlled: e.ctrlKey,
		shifted: e.shiftKey,
		oskey: e.metaKey,
		repeat: e.repeat
	}

	if (keypress.key === "d") {
    console.log("dit is voor dag");
    callback()
	} else if (keypress.key === "m") {
    console.log("dit is voor maand");
  } else if (keypress.key === "y" || keypress.key === "j") {
    console.log("dit is voor jaar");
  } else if (keypress.key === "tab") {
    console.log("tab");
  } else {
    console.log("dit niet ", keypress);
  }
}
