const url = "https://syllabye-server.azurewebsites.net"

async function ping(){
    const fetchString = url + "/api/ping"
    const response = await fetch(fetchString)
    const responseText = await response.text()
    console.log(responseText)
}

async function about(){
    const fetchString = url + "/about"
    const response = await fetch(fetchString)
    const responseText = await response.text()
    console.log(responseText)
}