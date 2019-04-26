const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const one = document.getElementById('label-one')
const two = document.getElementById('label-two')
const three = document.getElementById('label-three')
const four = document.getElementById('label-four')
const pickedDate = document.getElementById('date')

// set focus to day
day.focus()

//change focus on change-event
day.addEventListener('change', () => {
  document.getElementById('month').focus()
})

month.addEventListener('change', () => {
  document.getElementById('year').focus()
})

year.addEventListener('change', () => {
  document.getElementById('label-one').focus()
})

// key events
document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('keydown', keyHandler)
})

function keyHandler(e) {
	const keypress = {
		key: e.key.toLowerCase()
	}

	switch(keypress.key) {
			case "z":
				  day.focus()
					break;
			case "x":
				  month.focus()
					break;
			case "c":
				  year.focus()
					break;
			case "v":
          one.focus()
  				one.click()
					break;
			case "b":
          two.focus()
  				two.click()
					break;
			case "n":
          three.focus()
  				three.click()
					break;
			case "m":
          four.focus()
  				four.click()
					break;
	}
}
