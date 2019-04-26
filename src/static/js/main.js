const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const one = document.getElementById('label-one')
const two = document.getElementById('label-two')
const three = document.getElementById('label-three')
const four = document.getElementById('label-four')
const sound = document.getElementById("audio")
const sound1 = document.getElementById("audio1")
const sound2 = document.getElementById("audio2")
const sound3 = document.getElementById("audio3")
const sound4 = document.getElementById("audio4")


// set focus to day
day.focus()

//change focus on change-event
day.addEventListener('change', () => {
  sound.play()
  document.getElementById('month').focus()
})

month.addEventListener('change', () => {
  sound.play()
  document.getElementById('year').focus()
})

year.addEventListener('change', () => {
  sound.play()
  document.getElementById('label-one').focus()
})

one.addEventListener('click', () => {
  sound1.play()
})

two.addEventListener('click', () => {
  sound2.play()
})

three.addEventListener('click', () => {
  sound3.play()
})

four.addEventListener('click', () => {
  sound4.play()
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
          sound.play();
				  day.focus()
					break;
			case "x":
          sound.play();
				  month.focus()
					break;
			case "c":
          sound.play();
				  year.focus()
					break;
			case "v":
          sound.play();
          one.focus()
  				one.click()
					break;
			case "b":
          sound.play();
          two.focus()
  				two.click()
					break;
			case "n":
          sound.play();
          three.focus()
  				three.click()
					break;
			case "m":
          sound.play();
          four.focus()
  				four.click()
					break;
	}
}
