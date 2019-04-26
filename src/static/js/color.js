document.getElementById('input1').addEventListener('change', function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('one').style.backgroundColor = '#' + jscolor
})
