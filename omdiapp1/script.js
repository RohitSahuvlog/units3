document.querySelector("#movie")
async function  searchMovie(){
try{
 let input = document.querySelector("#query").value
let res = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=db27256e`)
var data =await res.json()

// console.log(data)
let array_of_movie = data.Search
return array_of_movie

}
catch(error){
console.log(error)
}
}

function appendmovies(data){

 movie.innerHTML=""
 if(data==undefined){
     return false
 }
 data.forEach(function(el){
     let p=document.createElement("p")
     p.setAttribute("class","searchpera")
     p.innerText=el.Title;
     p.addEventListener("click",function(){
searchclick(el)
     })
     movie.append(p)
 })
}

function searchclick(el){
 var arr =[el]

 searchmap(arr)
}
function searchmap(arr){
  console.log(arr)
 document.querySelector(".show").innerHTML=""
  arr.map(function(elem){
     

  var row  = document.createElement("div")
row.setAttribute("class","cardmenu")
var image = document.createElement("img")
image.setAttribute("src",elem.Poster)
image.setAttribute("id","image")
 var div =document.createElement("div")
div.setAttribute("class","card")
var p1 = document.createElement("p")
p1.innerHTML="Name:"+" "+elem.Title
var p2 = document.createElement("p")
p2.innerHTML=" Releasedate:  "+elem.Year
var p3 = document.createElement("p")
p3.innerHTML=" Action: "+elem.Type
var p4 = document.createElement("p")
p4.innerHTML=" Rating: "+Math.random(elem.imdbID)*10
div.append(p1,p2,p3,p4)
row.append(image,div)
document.querySelector(".show").append(row)
})
}
var timeid;
async  function main(){
   var datas= await searchMovie()

   if(datas==undefined){
       return false 
   }
   console.log(datas)
   appendmovies(datas)
 }
 function debounce(func,delay){

     if(timeid==true){
         clearTimeout(timeid)
     }
   var timeid=  setTimeout(function(){
         func()
     },delay)
 }