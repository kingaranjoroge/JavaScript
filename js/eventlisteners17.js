//JavaScript Event Listeners

view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

//Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
}) 

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
})

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        //view.style.backgroundColor = "purple";
    })
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    })
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked"
    })
} 

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp4();
    }
})

const initApp4 = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    const nav = document.querySelector("nav");

    view.addEventListener("click", (event) => {
        //view.classList.add("purple");
        //view.classList.remove("darkblue");
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    })
    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    })
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd view" ? (event.target.textContent = "clicked") : (event.target.textContent = "My 2nd view") ;
    })
    nav.addEventListener("mouseover",(event) => {
        event.target.classList.add("height100");
    })
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    })
} 

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp2();
    }
})

const initApp2 = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    },true)
    div.addEventListener("click", (event) => {
        event.stopPropagation();
        div.style.backgroundColor = "blue";
    },true)
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked"
    },true)
} 


document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp3();
    }
})

const initApp3 = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "purple";
    })
    div.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "blue";
    })
    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked"
    })
} 

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp5();
    }
})

const initApp5 = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");

    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })
}
