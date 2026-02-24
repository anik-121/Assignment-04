let interviewList = [];
let rejectedList = [];


let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.getElementById("allCards");



function calculateCount(){
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}   

calculateCount()


function toggleStyle(id){
//    allFilterBtn.classList.remove("bg-blue-400", "text-white");
//    interviewFilterBtn.classList.remove("bg-blue-400","text-white");
//    rejectedFilterBtn.classList.remove("bg-blue-400", "text-white");


//    allFilterBtn.classList.add("bg-white-400", "text-gray");
//    interviewFilterBtn.classList.add("bg-white-400", "text-gray");
//    rejectedFilterBtn.classList.add("bg-white-400", "text-gray");


  allFilterBtn.classList.remove("bg-blue-400", "text-white");
   interviewFilterBtn.classList.remove("bg-blue-400","text-white");
   rejectedFilterBtn.classList.remove("bg-blue-400", "text-white");

     allFilterBtn.classList.add("text-gray-500");
   interviewFilterBtn.classList.add("text-gray-500");
   rejectedFilterBtn.classList.add("text-gray-500");


   const activeBtn = document.getElementById(id);

 
   activeBtn.classList.add("bg-blue-400", "text-white");

   
   activeBtn.classList.remove("text-gray-500");
}