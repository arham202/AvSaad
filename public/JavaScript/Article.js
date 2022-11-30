let body = document.querySelector("body");
let bg = document.createElement("img");
let nav = document.querySelector("nav");
nav.classList.add("topnav");
let section = document.querySelector("section");
section.classList.add("sec1")

class Article {
    constructor(json) {
        this.json = json;
    }
    Load() {
        const { json } = this;
        // this.LoadNavbar(json);
        this.loadsection1(json);
        // loadsection2(json_obj);
        this.loadfooter(json);
    }
    
    LoadNavbar(obj) {
        console.log("Hello")

        let h2 = document.createElement("h2");

        let span2 = document.createElement("span");
        span2.classList.add("logospan1");
        span2.textContent = "A";
        h2.appendChild(span2);

        let span3 = document.createElement("span");
        span3.classList.add("logospan2");
        span3.textContent = "v";
        h2.appendChild(span3);

        let span1 = document.createElement("span");
        span1.classList.add("logospan3")
        span1.textContent = "S"
        h2.appendChild(span1);

        let span4 = document.createElement("span");
        span4.classList.add("logospan2")
        span4.textContent = "a"
        h2.appendChild(span4);

        let span5 = document.createElement("span");
        span5.classList.add("logospan4")
        span5.textContent = "ad"
        h2.appendChild(span5);

        h2.classList.add("logo")
        nav.appendChild(h2)

        let div1 = document.createElement("div");
        div1.classList.add("con1")
        nav.appendChild(div1)

        let links = obj['Links']
        let link = obj['connect'];

        let a1 = document.createElement("a");
        a1.href = link[0];
        a1.textContent = links[0]
        div1.appendChild(a1)

        let a2 = document.createElement("a");
        a2.href = link[1];
        a2.textContent = links[1]
        div1.appendChild(a2)

        let a3 = document.createElement("a");
        a3.href = link[2];
        a3.textContent = links[2]
        div1.appendChild(a3)

        let a4 = document.createElement("a");
        a4.href = link[3];
        a4.textContent = links[3]
        div1.appendChild(a4)

        let login = document.createElement("a");
        login.classList.add("login")
        login.href = "login"
        login.textContent = "Login"
        nav.appendChild(login)
    }

    loadsection1(obj) {

        let u = obj['Images']
        let img1 = document.createElement("img");
        img1.classList.add("img1");
        img1.src = u[0];
        section.appendChild(img1);

        let h1 = document.createElement("h1");
        h1.classList.add("start");
        h1.textContent = "Mental Health Information & Support";
        section.appendChild(h1);

        let pjson = obj['p1']
        let p1 = document.createElement("p");
        p1.setAttribute("class", "para1");
        p1.textContent = pjson;
        section.appendChild(p1);

        let line = document.createElement("hr");
        line.setAttribute("class", "line");
        body.appendChild(line);

        let img2 = document.createElement("img");
        img2.classList.add("img2");
        img2.src = u[1];
        body.appendChild(img2);

        let div1 = document.createElement("div");
        div1.setAttribute("class", "box");
        let h41 = document.createElement("h2");

        h41.classList.add("starth2");
        h41.textContent = "Anxiety";
        div1.appendChild(h41);

        let articles = obj['Articles']


        let pb1 = document.createElement("p");
        pb1.setAttribute("class", "parab1");
        pb1.textContent = articles[0];
        let button21 = document.createElement("a");
        button21.setAttribute("class", "btnb");
        button21.textContent = "View more";
        button21.href = "/Anxiety"
        pb1.appendChild(button21)
        div1.appendChild(pb1);

        body.appendChild(div1);

        let img3 = document.createElement("img");
        img3.classList.add("img3");
        img3.src = u[2];
        body.appendChild(img3);

        let div2 = document.createElement("div");
        div2.setAttribute("class", "box2");
        let h42 = document.createElement("h2");

        h42.classList.add("starth2");
        h42.textContent = "Depression";
        div2.appendChild(h42);


        let pb2 = document.createElement("p");
        pb2.setAttribute("class", "parab1");
        pb2.textContent = articles[1];

        let button22 = document.createElement("a");
        button22.setAttribute("class", "btnb");
        button22.textContent = "View more";
        button22.href = "/Depression"
        pb2.appendChild(button22)
        div2.appendChild(pb2);

        body.appendChild(div2);

        //set2
        let img4 = document.createElement("img");
        img4.classList.add("img4");
        img4.src = u[3];
        body.appendChild(img4);

        let div3 = document.createElement("div");
        div3.setAttribute("class", "box3");
        let h43 = document.createElement("h2");

        h43.classList.add("starth3");
        h43.textContent = "Addiction";
        div3.appendChild(h43);


        let pb3 = document.createElement("p");
        pb3.setAttribute("class", "parab3");
        pb3.textContent = articles[2];
        let button23 = document.createElement("a");
        button23.setAttribute("class", "btnb");
        button23.textContent = "View more";
        button23.href = "/Addiction"
        pb3.appendChild(button23)
        div3.appendChild(pb3);

        body.appendChild(div3);

        let img5 = document.createElement("img");
        img5.classList.add("img3");
        img5.src = u[4];
        body.appendChild(img5);

        let div4 = document.createElement("div");
        div4.setAttribute("class", "box4");
        let h44 = document.createElement("h2");

        h44.classList.add("starth2");
        h44.textContent = "Eating Disorder";
        div4.appendChild(h44);


        let pb4 = document.createElement("p");
        pb4.setAttribute("class", "parab1");
        pb4.textContent = articles[3];
        let button24 = document.createElement("a");
        button24.setAttribute("class", "btnbe");
        button24.textContent = "View more";
        button24.href = "/EatingDisorder"
        pb4.appendChild(button24)

        div4.appendChild(pb4);

        body.appendChild(div4);

        let line2 = document.createElement("hr");
        line2.setAttribute("class", "line2");
        body.appendChild(line2);
    }

    loadfooter(obj){
        let pfooter = document.createElement("footer");
        pfooter.setAttribute("class", "footer-distributed");
        body.appendChild(pfooter);

        let div1 = document.createElement("div");
        div1.setAttribute("class", "footer-right");
        pfooter.appendChild(div1);

        let a1 = document.createElement("a");
        a1.href = "#";
        div1.appendChild(a1);
        let i1 = document.createElement("i");
        i1.setAttribute("class", "fa fa-facebook");
        a1.appendChild(i1);

        let a2 = document.createElement("a");
        a2.href = "#";
        div1.appendChild(a2);
        let i2 = document.createElement("i");
        i2.setAttribute("class", "fa fa-twitter");
        a2.appendChild(i2);

        let a3 = document.createElement("a");
        a3.href = "#";
        div1.appendChild(a3);
        let i3 = document.createElement("i");
        i3.setAttribute("class", "fa fa-linkedin");
        a3.appendChild(i3);

        let a4 = document.createElement("a");
        a4.href = "#";
        div1.appendChild(a4);
        let i4 = document.createElement("i");
        i4.setAttribute("class", "fa fa-github");
        a4.appendChild(i4);

        let div2 = document.createElement("div");
        div2.setAttribute("class", "footer-left");
        pfooter.appendChild(div2);

        let p2 = document.createElement("p");
        p2.setAttribute("class", "footer-links");
        div2.appendChild(p2);

        let links = obj['Links']
        let link = obj['connect']

        let a11 = document.createElement("a");
        a11.setAttribute("class", "link-1");
        a11.href = link[0];
        a11.textContent = links[0];
        p2.appendChild(a11);

        let a12 = document.createElement("a");
        a12.href = link[1];
        a12.textContent = links[1]
        p2.appendChild(a12)

        let a13 = document.createElement("a");
        a13.href = link[2];
        a13.textContent = links[2]
        p2.appendChild(a13)

        let a14 = document.createElement("a");
        a14.href = link[3];
        a14.textContent = links[3]
        p2.appendChild(a14)

        let p3 = document.createElement("p");
        p3.textContent = "AvSaad"
        div2.appendChild(p3);

    }
}


Start()
async function Start() {

    console.log("Hello1")
    let request = new Request("/JSON/Articles.json");
    let response = await fetch(request);

    let json = await response.json();

    const c = new Article(json);
    c.Load();

    // LoadNavbar(json_obj);
    // loadsection1(json_obj);
    // // loadsection2(json_obj);
    // loadfooter(json_obj);
}

// slider
let h1 = document.createElement("h1");
h1.classList.add("sec2head");
h1.textContent = "Related Videos";
body.appendChild(h1);

let div = document.createElement("div");
div.setAttribute("class", "container");
body.appendChild(div);


let i1 = document.createElement("iframe");
i1.setAttribute("class", "mySlides");
i1.setAttribute("src", "https://www.youtube.com/embed/MB5IX-np5fE");
div.appendChild(i1);
let i2 = document.createElement("iframe");
i2.setAttribute("class", "mySlides");
i2.setAttribute("src", "https://www.youtube.com/embed/ZidGozDhOjg");
div.appendChild(i2);

let i3 = document.createElement("iframe");
i3.setAttribute("class", "mySlides");
i3.setAttribute("src", "https://www.youtube.com/embed/WWloIAQpMcQ");
div.appendChild(i3);
let i4 = document.createElement("iframe");
i4.setAttribute("class", "mySlides");
i4.setAttribute("src", "https://www.youtube.com/embed/shG0ezBeeJc");
div.appendChild(i4);

button1 = document.createElement("button");
button1.setAttribute("class", "btn");
button1.setAttribute("onclick", "plusDivs(-1)");
button1.textContent = "Back";
div.appendChild(button1)
button2 = document.createElement("button");
button2.setAttribute("class", "btn");
button2.setAttribute("onclick", "plusDivs(-1)");
button2.textContent = "Next";
div.appendChild(button2)

body.appendChild(div);
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
// end slider