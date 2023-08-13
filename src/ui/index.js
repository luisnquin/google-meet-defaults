const setStyles = (element = null, styles = {}) => {
    if (!element) return

    for (const key of Object.keys(styles)) {
        console.log(key)
        element.style[key] = styles[key]
    }
}

const setSaveMessage = (message, styles) => {
    const saveInfo = document.getElementById('save-info')
    saveInfo.innerHTML = `<p>${message}</p>`

    setStyles(saveInfo, {
        'text-align': 'center',
        'border-radius': '3px',
        padding: '5px',
        ...styles
    })
}

const form = document.querySelector('form')

form.onsubmit = (e) => {
    e.preventDefault()
}

if (true) {
    if (true) {
        setSaveMessage('Successfully saved!', {
            color: '#33c444',
            'background-color': '#dcfce1',
            border: 'rgba(51, 196, 68, 0.1) solid 1px'
        })
    } else {
        setSaveMessage('Woops', {
            color: '#c43333',
            'background-color': '#fcdcdc',
            border: 'rgba(196, 51, 51, 0.1) solid 1px'
        })
    }
}
