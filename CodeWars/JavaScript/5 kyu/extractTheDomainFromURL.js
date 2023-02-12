// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    return url.replace('https://', '')
                .replace('http://', '')
                .replace('www.', '')
                .split('.')[0]
}

// tests

console.log(domainName('http://github.com/carbonfive/raygun'))
console.log(domainName('http://www.github.com/carbonfive/raygun'))
console.log(domainName('https://www.github.com/carbonfive/raygun'))
console.log(domainName('www.github.com/carbonfive/raygun'))