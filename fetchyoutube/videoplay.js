var arr =JSON.parse( localStorage.getItem("videoid"))
    console.log(arr)
    
        let div =document.createElement("div")
   
    let iframe=document.createElement("iframe")
    // data.items.snippet.thumbsnails.high
    iframe.src=`https://www.youtube.com/embed/${arr.videoId}`
    
    div.append(iframe)
    // videoplay.append(div)
    document.querySelector(".videoplay").append(div)