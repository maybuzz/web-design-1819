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
			case "d":
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
