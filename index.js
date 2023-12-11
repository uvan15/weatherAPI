

let target='London'

let temp=document.querySelector('.temp')
let loc=document.querySelector('.time_location .location')
let timeDate = document.querySelector('.time_location .time')
let cond = document.querySelector('.condition') 
let searchedLoc=document.querySelector('.searchedLocation')
let emojiImg = document.querySelector('.condition img')
//console.log(emojiImg)

let submit=document.querySelector('#searchForm')
// console.log(submit)

submit.addEventListener('submit', search)

function search(e){
    e.preventDefault()
    let target=searchedLoc.value
    fetchData(target)
}

async function fetchData(target){
    try {
        let url =`https://api.weatherapi.com/v1/current.json?key=a65894b5f2df468594855833231012&q=${target}&aqi=no`
        let response=await fetch(url)
        let jsonData = await response.json()
        //console.log(jsonData)
        let temperature=jsonData.current.temp_c
        temp.innerHTML=temperature+"°C";
        // console.log(temperature)
        let location=jsonData.location.name
        loc.innerHTML=location
        // console.log(location)
        let condition=jsonData.current.condition.text
        cond.innerHTML=condition
        // console.log(condition)
        let emoji=jsonData.current.condition.icon
        emojiImg.src=emoji
        //console.log(emojiImg.src)

        let timeAndDate=jsonData.current.last_updated
        timeDate.innerHTML=timeAndDate
        //console.log(timeAndDate)

    } catch (error) {
        console.log(error)
    }
    
}

// fetchData(target)

