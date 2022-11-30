let body = document.querySelector("body");
let nav = document.querySelector("nav");
nav.classList.add("topnav");


class About{
    
    constructor(json) {
        this.json = json;
    }
    Load(){
        const { json } = this;
        // this.LoadNavbar(json);
        this.Heading(json);
        this.Content(json);
        this.loadsection2(json);
        this.section3(json);
        this.loadfooter(json);
    }

LoadNavbar(obj){

    let h2 = document.createElement("h2");

    let span2 = document.createElement("span");
    span2.classList.add("logospan1");
    span2.textContent="A";
    h2.appendChild(span2);

    let span3 = document.createElement("span");
    span3.classList.add("logospan2");
    span3.textContent="v";
    h2.appendChild(span3);

    let span1 = document.createElement("span");
    span1.classList.add("logospan3")
    span1.textContent="S"
    h2.appendChild(span1);

    let span4 = document.createElement("span");
    span4.classList.add("logospan2")
    span4.textContent="a"
    h2.appendChild(span4);

    let span5 = document.createElement("span");
    span5.classList.add("logospan4")
    span5.textContent="ad"
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
    login.href = "/log"
    login.textContent = "Login"
    nav.appendChild(login)
}


 Heading(obj) {
    let header = document.querySelector("header")
    let heading = document.createElement("h2")
    heading.classList.add("heading")
    heading.textContent = obj["AboutUs"]
    header.appendChild(heading)
}

Content(obj) {
    let section = document.querySelector("section")
    let content = document.createElement("p")
    content.classList.add("content")
    content.textContent = obj["Content"]
    section.appendChild(content)


    let heading1 = document.createElement("h2")
    heading1.classList.add("heading1")
    heading1.textContent = obj["WhyUs"]
    section.appendChild(heading1)
}

loadsection2(obj) {
    let imgs = obj['Images'];
    let ch = obj['Cardhead'];
    let cp = obj['Cardspara']
    let div1 = document.createElement("div");
    div1.classList.add("row");
    body.appendChild(div1);

    // card1
    let div11 = document.createElement("div");
    div11.classList.add("column");
    div1.appendChild(div11);

    let div111 = document.createElement("div");
    div111.classList.add("card1");
    div11.appendChild(div111);

    let img2 = document.createElement("img");
    img2.classList.add("img2");
    img2.src = imgs[1];
    div111.appendChild(img2);

    let h31 = document.createElement("h3");
    h31.classList.add("h31");
    h31.textContent = ch[0];
    div111.appendChild(h31);

    let p1 = document.createElement("p");
    p1.textContent = cp[0];
    div111.appendChild(p1);

    // card2
    let div21 = document.createElement("div");
    div21.classList.add("column");
    div1.appendChild(div21);

    let div211 = document.createElement("div");
    div211.classList.add("card2");
    div21.appendChild(div211);

    let img3 = document.createElement("img");
    img3.classList.add("img2");
    img3.src = imgs[2];
    div211.appendChild(img3);

    let h32 = document.createElement("h3");
    h32.classList.add("h31");
    h32.textContent = ch[1];
    div211.appendChild(h32);

    let p2 = document.createElement("p");
    p2.textContent = cp[1];
    div211.appendChild(p2);

    // card 3

    let div31 = document.createElement("div");
    div31.classList.add("column");
    div1.appendChild(div31);

    let div311 = document.createElement("div");
    div311.classList.add("card1");
    div31.appendChild(div311);

    let img4 = document.createElement("img");
    img4.classList.add("img2");
    img4.src = imgs[3];
    div311.appendChild(img4);

    let h54 = document.createElement("h3");
    h54.classList.add("h31");
    h54.textContent = ch[2];
    div311.appendChild(h54);

    let p3 = document.createElement("p");
    p3.textContent = cp[2];
    div311.appendChild(p3);

    let line = document.createElement("hr");
    line.setAttribute("class", "line");
    body.appendChild(line);
}

section3(obj) {
    let qn = obj['Questions'];
    let an = obj['Answers'];
    let div3 = document.createElement("div");
    div3.classList.add("div3");
    body.appendChild(div3);

    let h54 = document.createElement("h1");
    h54.classList.add("h54");
    h54.textContent = obj["FAQ"];
    div3.appendChild(h54);
    //Q1
    let details = document.createElement("details");
    details.classList.add("details");

    let sum1 = document.createElement("summary");
    sum1.classList.add("sum1");
    sum1.textContent = qn[0];
    details.appendChild(sum1);

    let p5 = document.createElement("p");
    p5.classList.add("p5");
    p5.textContent = an[0];
    details.appendChild(p5);

    body.appendChild(details);
    //Q2      
    let details2 = document.createElement("details");
    details2.classList.add("details2");

    let sum2 = document.createElement("summary");
    sum2.classList.add("sum2");
    sum2.textContent = qn[1];
    details2.appendChild(sum2);

    let p6 = document.createElement("p");
    p6.classList.add("p6");
    p6.textContent = an[1]; 
    details2.appendChild(p6);

    body.appendChild(details2);
    //Q3
    let details3 = document.createElement("details");
    details3.classList.add("details3");

    let sum3 = document.createElement("summary");
    sum3.classList.add("sum3");
    sum3.textContent = qn[2]
    details3.appendChild(sum3);

    let p7 = document.createElement("p");
    p7.classList.add("p7");
    p7.textContent = an[2]
    details3.appendChild(p7);

    body.appendChild(details3);
    //Q4
    let details4 = document.createElement("details");
    details4.classList.add("details4");

    let sum4 = document.createElement("summary");
    sum4.classList.add("sum4");
    sum4.textContent = qn[3]
    details4.appendChild(sum4);

    let p8 = document.createElement("p");
    p8.classList.add("p8");
    p8.textContent = an[3]
    details4.appendChild(p8);

    body.appendChild(details4);
}

loadfooter(obj){

    let pfooter = document.createElement("footer");
    pfooter.setAttribute("class","footer-distributed");
    body.appendChild(pfooter);

    let div1 = document.createElement("div");
    div1.setAttribute("class","footer-right");
    pfooter.appendChild(div1);

    let a1 = document.createElement("a");
    a1.href = "#";
    div1.appendChild(a1);
    let i1 = document.createElement("i");
    i1.setAttribute("class","fa fa-facebook");
    a1.appendChild(i1);

    let a2 = document.createElement("a");
    a2.href = "#";
    div1.appendChild(a2);
    let i2 = document.createElement("i");
    i2.setAttribute("class","fa fa-twitter");
    a2.appendChild(i2);

    let a3 = document.createElement("a");
    a3.href = "#";
    div1.appendChild(a3);
    let i3 = document.createElement("i");
    i3.setAttribute("class","fa fa-linkedin");
    a3.appendChild(i3);

    let a4 = document.createElement("a");
    a4.href = "#";
    div1.appendChild(a4);
    let i4 = document.createElement("i");
    i4.setAttribute("class","fa fa-github");
    a4.appendChild(i4);

    let div2 = document.createElement("div");
    div2.setAttribute("class","footer-left");
    pfooter.appendChild(div2);

    let p2 = document.createElement("p");
    p2.setAttribute("class","footer-links");
    div2.appendChild(p2);

    let links = obj['Links']
    let link = obj['connect']

    let a11 = document.createElement("a");
    a11.setAttribute("class","link-1");
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
    p3.textContent= "AvSaad"
    div2.appendChild(p3);
}
}


Start()
async function Start() {

    console.log("Hello1")
    let request = new Request("/JSON/Aboutus.json");
    let response = await fetch(request);

    let json = await response.json();

    const c = new About(json);
    c.Load();
}