// DOM - Document Object Model

// getting elements from html document
// 1.
const view1 = document.getElementById("view1");
console.log(view1);

// 2.
const view2 = document.querySelector("#view2");
console.log(view2);

// changing style to show or hide views
view1.style.display = "flex"; 
view2.style.display = "flex"; 

// 3.
const views  = document.getElementsByClassName("view");
console.log(views); 

// 4.
const sameViews = document.querySelectorAll(".view"); 
console.log(sameViews); 


const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for(i = 0; i<evenDivs.length;i++){
    evenDivs[i].style.background = "darkblue";
}

const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "Hello World!";

const navBar = document.querySelector("nav");
console.log(navBar)

navBar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`
navBar.style.justifyContent = "space-between";

// navigating the DOM Tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);
console.log(evenDivs[0].parentElement.previousSibling);
console.log(evenDivs[0].parentElement.previousElementSibling);

//Adding and Removing elements from DOM
view1.style.display = "none";
view2.style.display = "flex";

view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while(view2.lastChild){
    view2.lastChild.remove();
}

 const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";

    parent.append(newDiv);
 }
 //createDivs(view2,10);

 for(i = 1; i<=12; i++){
    createDivs(view2,i);
 } 