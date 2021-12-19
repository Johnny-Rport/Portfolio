const des = document.querySelectorAll('[Des]')

function showy(button) {
        if (button.hasAttribute('hide') == true) {
                button.removeAttribute('hide')
        } else if (button.hasAttribute('hide') != true) {
                button.setAttribute('hide', '')
        }
}

