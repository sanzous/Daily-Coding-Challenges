function removeUrlAnchor(url) {
    url = url.split('')
    if (url.indexOf('#') == -1) {
        return url.join('')
    } else
        return url.splice(0, url.indexOf('#')).join('')
}