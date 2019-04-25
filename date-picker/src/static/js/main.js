//print form data
const dag = document.getElementById('day')
const maand = document.getElementById('month')
const jaar = document.getElementById('year')
const pickedDate = document.getElementById('date')

dag.addEventListener('change', (event) => {
  document.getElementById('month').focus()
})

maand.addEventListener('change', (event) => {
  document.getElementById('year').focus()
})

// key events
var focusableEls = document.querySelectorAll('.focus')
var firstFocusableEl = focusableEls[0]
var middleFocusableEl = focusableEls[0]
var lastFocusableEl = focusableEls[focusableEls.length - 1]

firstFocusableEl.focus()

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('keydown', keyHandler)
})

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
			case "z":
				document.getElementById('day').focus()
					break;
			case "x":
				document.getElementById('month').focus()
					break;
			case "c":
				 document.getElementById('year').focus()
					break;
			case "v":
				 document.getElementById('label-one').click()
					break;
			case "b":
				 document.getElementById('label-two').click()
					break;
			case "n":
				 document.getElementById('label-three').click()
					break;
			case "m":
				 document.getElementById('label-four').click()
					break;
	}
}
