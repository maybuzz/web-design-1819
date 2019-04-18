document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('keydown', keyHandler)
})

var callback = function() {
  document.addEventListener('click', () => {
    console.log("click")
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

	if (keypress.key === "w" || keypress.key === "e") {
    console.log("dit is GOED")
    callback()
	} else if (keypress.key === "x" || keypress.key === "c") {
    console.log("dit is NIET GOED")
  } else if (keypress.key === "tab") {
    console.log("tab")
  } else {
    console.log("dit niet ", keypress)
  }
}
