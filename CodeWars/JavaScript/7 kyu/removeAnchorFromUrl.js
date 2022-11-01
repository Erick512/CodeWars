function removeUrlAnchor(url) {
    if(url.includes('#')){
        return url.slice(0, url.indexOf('#'))
    }

    return url
}

console.log(removeUrlAnchor('"www.codewars.com#about"'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))