function get(url) {
    let req = new XMLHttpRequest()
    req.open("GET", url, false)
    req.send()
    return req.responseText
}

function main() {

    link = get("https://api.adviceslip.com/advice")
    data = JSON.parse(link)

    document.getElementById("numberContent").innerHTML = "#" + data.slip.id
    document.getElementById("textContent").innerHTML = '"' + data.slip.advice + '"'
}

document.getElementById("button").addEventListener("click", function(){
    main()
})