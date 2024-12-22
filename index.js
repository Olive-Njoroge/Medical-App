let sidebarButton = document.querySelector("#btn");

function showDisplay(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("all");
    
}

function displaySidebar() {
  let all = document.querySelector(".all");
  all.style.width = "30px";
  let span = document.querySelector("span");
  span.style.display = "none";
  let navItem = document.querySelector(".nav-item");
  navItem.style.display = "none";
  let pT = document.querySelector(".pT");
  pT.style.display = "none";
  let tP = document.querySelector(".tP");
  tP.style.display = "none";
  let tR = document.querySelector(".tR");
  tR.style.display = "none";
  let eC = document.querySelector(".eC");
  eC.style.display = "none";
  let tooltip = document.querySelector(".tooltip");
}



sidebarButton.addEventListener("click", () => {
    displaySidebar();
    showDisplay();
});







