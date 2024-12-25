let sidebarButton = document.querySelector("#btn");

// Collapse sidebar by default when the page loads
window.onload = function () {
    displaySidebar();
};


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
  let list = document.querySelector(".nav-item ol");
  list.style.display = "none"; // Ensure the list is hidden initially
}



sidebarButton.addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar.style.width === "30px" || sidebar.style.width === "") {  // Adjust condition for initial state
        showDisplay();
    } else {
        displaySidebar();
    }
});


sidebarButton.addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    // Check if the sidebar is collapsed or expanded and toggle accordingly
    if (sidebar.style.width === "30px" || sidebar.style.width === "") {
        showDisplay(); // Expand the sidebar
    } else {
        displaySidebar(); // Collapse the sidebar
    }
});

function showDisplay(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("all");
    let span = document.querySelector("span");
    span.style.display = "inline";
    let navItem = document.querySelector(".nav-item");
    navItem.style.display = "inline";
    let pT = document.querySelector(".pT");
    pT.style.display = "inline";
    let tP = document.querySelector(".tP");
    tP.style.display = "inline";
    let tR = document.querySelector(".tR");
    tR.style.display = "inline";
    let eC = document.querySelector(".eC");
    eC.style.display = "inline";
    let list = document.querySelector(".nav-item ol");
    list.style.display = "none"; // Keep the list hidden when sidebar expands
}


    


navItem.addEventListener("click", () => {\
    let list = document.querySelector(".nav-item ol");
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block"; // Show the list
    } else {
        list.style.display = "none"; // Hide the list
    }
});
