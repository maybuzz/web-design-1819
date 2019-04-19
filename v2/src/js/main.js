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

	switch(keypress.key) {
			case "e":
			 document.getElementById('block').classList.add('block-good');
					break;
			case "v":
				document.getElementById('block').classList.remove('block-good');
				 document.getElementById('block').classList.add('block-nogood');
					break;
			case "y":
				document.getElementById('block').classList.remove('block-good');
				 document.getElementById('block').classList.remove('block-nogood');
				 document.getElementById('block').classList.add('block-meh');
					break;
			case "x":
				 document.getElementById('block').classList.remove("block-good", "block-nogood", "block-meh");
					break;
	}

	// if (keypress.key === "w" || keypress.key === "e") {
  //   console.log("dit is GOED")
  //   callback()
	// } else if (keypress.key === "x" || keypress.key === "c") {
  //   console.log("dit is NIET GOED")
	// } else if (keypress.key === ' ') {
	// 	console.log("space")
	// 	console.log(document.activeElement, e.keycode)
  // } else if (keypress.key === "tab") {
  //   console.log("tab")
  // } else {
  //   console.log("dit niet ", keypress)
  // }
}
