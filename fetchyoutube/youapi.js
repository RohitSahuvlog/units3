
const searchvideo= async()=>{
    try{
        let inp = document.querySelector("#search").value
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyAZfom29xCMXLL3SIoPN745YrtVuxxTy58&maxResults=20`)
    let data = await res.json()
    console.log(data)
    appendvideo(data.items)
    }
    catch(error){
console.log(error)
    }
   
}

// {snippet:{title},id:{videoId}}
const appendvideo=(data)=>{
    // {snippet,id:{videoId}}
    document.querySelector("#search_results").innerHTML=""
    data.map(({snippet,id})=>{
        let div =document.createElement("div")
    let name =document.createElement("p")
    name.innerHTML = snippet.title
    let iframe=document.createElement("img")
    // data.items.snippet.thumbsnails.high
    iframe.setAttribute("src",snippet.thumbnails.high.url)
    iframe.addEventListener("click",function(){
videoplay({id})
    })
  
    div.append(iframe,name)
    search_results.append(div)
    })
   
}
function videoplay({id}){
    window.location.href="./videoplay.html"
    localStorage.setItem("videoid",JSON.stringify(id))
}

 async function defaultvideo(){
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=most Popular in india&key=AIzaSyAZfom29xCMXLL3SIoPN745YrtVuxxTy58&maxResults=20`)
    let data = await res.json()
    console.log(data)
    appendvideo(data.items)
}
// chart=mostPopular
defaultvideo()