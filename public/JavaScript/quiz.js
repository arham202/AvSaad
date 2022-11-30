let body = document.querySelector("body");
let bg = document.createElement("img");

let section = document.querySelector("section");
section.classList.add("sec1")


let nav = document.querySelector("nav");
nav.classList.add("topnav");

class Quiz{
    
    constructor(json) {
        this.json = json;
    }
    Load() {
        const { json } = this;
        // this.LoadNavbar(json);
        this.loadsection1(json);
        this.loadsection2(json);
        this.loadquiz(json);
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
    login.href = "login"
    login.textContent = "Login"
    nav.appendChild(login)
}

loadsection1(obj){
    let u = obj['Images']
    let img1 = document.createElement("img");
    img1.classList.add("img1");
    img1.src = u[0];
    section.appendChild(img1);

    let h1 = document.createElement("h1");
    h1.classList.add("start");
    h1.textContent = "Take a Mental Health Test";
    section.appendChild(h1);

    let p = document.createElement("p");
    p.classList.add("para1");
    p.textContent = obj['WelcomeD'];
    section.appendChild(p);
}

loadsection2(obj){
    
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
    

    let h33 = document.createElement("h3");
    h33.classList.add("h31");
    h33.textContent = ch[2];
    div311.appendChild(h33);

    let p3 = document.createElement("p");
    p3.textContent = cp[2];
    div311.appendChild(p3);

    let line  = document.createElement("hr");
    line.setAttribute("class","line");
    body.appendChild(line);
}




loadquiz(obj){
    
    let pdiv = document.createElement("div");
    pdiv.classList.add("ques");
    body.appendChild(pdiv);

    let q = obj['Questions'];
    let a = obj['Answer'];

    // ques1
    let p1 = document.createElement("p");
    p1.classList.add("questions")
    p1.textContent = "1.\xa0\xa0\xa0\xa0\xa0\xa0"+q[0];
    pdiv.appendChild(p1);
        
    // option 1
        let input11 = document.createElement("input");
        let linput11 = document.createElement("label");
        input11.setAttribute("type","radio");
        input11.setAttribute("name","ans1");
        input11.setAttribute("value",1);
        pdiv.appendChild(input11); 
        linput11.setAttribute("for","ans1");
        linput11.textContent = a[0];
        pdiv.appendChild(linput11);
    // option 2
        let input12 = document.createElement("input");
        let linput12 = document.createElement("label");
        input12.setAttribute("type","radio");
        input12.setAttribute("name","ans1");
        input12.setAttribute("value",2);
        pdiv.appendChild(input12); 
        linput12.setAttribute("for","ans1");
        linput12.textContent = a[1];
        pdiv.appendChild(linput12);
    // option 3
        let input13 = document.createElement("input");
        let linput13 = document.createElement("label");
        input13.setAttribute("type","radio");
        input13.setAttribute("name","ans1");
        input13.setAttribute("value",3);
        pdiv.appendChild(input13); 
        linput13.setAttribute("for","ans1");
        linput13.textContent = a[2];
        pdiv.appendChild(linput13);
    // option 4
    let input14 = document.createElement("input");
    let linput14 = document.createElement("label");
    input14.setAttribute("type","radio");
    input14.setAttribute("name","ans1");
    input14.setAttribute("value",4);
    pdiv.appendChild(input14); 
    linput14.setAttribute("for","ans1");
    linput14.textContent = a[3];
    pdiv.appendChild(linput14);

    // ques 2
     let p2 = document.createElement("p");
     p2.classList.add("questions")
     p2.textContent = "2.\xa0\xa0\xa0\xa0\xa0\xa0"+q[1];
     pdiv.appendChild(p2);
         
     // option 1
         let input21 = document.createElement("input");
         let linput21 = document.createElement("label");
         input21.setAttribute("type","radio");
         input21.setAttribute("name","ans2");
         input21.setAttribute("value",1);
         pdiv.appendChild(input21); 
         linput21.setAttribute("for","ans2");
         linput21.textContent = a[0];
         pdiv.appendChild(linput21);
     // option 2
         let input22 = document.createElement("input");
         let linput22 = document.createElement("label");
         input22.setAttribute("type","radio");
         input22.setAttribute("name","ans2");
         input22.setAttribute("value",2);
         pdiv.appendChild(input22); 
         linput22.setAttribute("for","ans2");
         linput22.textContent = a[1];
         pdiv.appendChild(linput22);
     // option 3
         let input23 = document.createElement("input");
         let linput23 = document.createElement("label");
         input23.setAttribute("type","radio");
         input23.setAttribute("name","ans2");
         input23.setAttribute("value",3);
         pdiv.appendChild(input23); 
         linput23.setAttribute("for","ans2");
         linput23.textContent = a[2];
         pdiv.appendChild(linput23);
     // option 4
     let input24 = document.createElement("input");
     let linput24 = document.createElement("label");
     input24.setAttribute("type","radio");
     input24.setAttribute("name","ans2");
     input24.setAttribute("value",4);
     pdiv.appendChild(input24); 
     linput24.setAttribute("for","ans2");
     linput24.textContent = a[3];
     pdiv.appendChild(linput24);

    // ques 3
    let p3 = document.createElement("p");
    p3.classList.add("questions")
    p3.textContent = "3.\xa0\xa0\xa0\xa0\xa0\xa0"+q[2];
    pdiv.appendChild(p3);
        
    // option 1
        let input31 = document.createElement("input");
        let linput31 = document.createElement("label");
        input31.setAttribute("type","radio");
        input31.setAttribute("name","ans3");
        input31.setAttribute("value",1);
        pdiv.appendChild(input31); 
        linput31.setAttribute("for","ans3");
        linput31.textContent = a[0];
        pdiv.appendChild(linput31);
    // option 2
        let input32 = document.createElement("input");
        let linput32 = document.createElement("label");
        input32.setAttribute("type","radio");
        input32.setAttribute("name","ans3");
        input32.setAttribute("value",2);
        pdiv.appendChild(input32); 
        linput32.setAttribute("for","ans3");
        linput32.textContent = a[1];
        pdiv.appendChild(linput32);
    // option 3
        let input33 = document.createElement("input");
        let linput33 = document.createElement("label");
        input33.setAttribute("type","radio");
        input33.setAttribute("name","ans3");
        input33.setAttribute("value",3);
        pdiv.appendChild(input33); 
        linput33.setAttribute("for","ans3");
        linput33.textContent = a[2];
        pdiv.appendChild(linput33);
    // option 4
    let input34 = document.createElement("input");
    let linput34 = document.createElement("label");
    input34.setAttribute("type","radio");
    input34.setAttribute("name","ans3");
    input34.setAttribute("value",4);
    pdiv.appendChild(input34); 
    linput34.setAttribute("for","ans3");
    linput34.textContent = a[3];
    pdiv.appendChild(linput34);

    // ques 4
    let p4 = document.createElement("p");
    p4.classList.add("questions")
    p4.textContent = "4.\xa0\xa0\xa0\xa0\xa0\xa0"+q[3];
    pdiv.appendChild(p4);
        
    // option 1
        let input41 = document.createElement("input");
        let linput41 = document.createElement("label");
        input41.setAttribute("type","radio");
        input41.setAttribute("name","ans4");
        input41.setAttribute("value",1);
        pdiv.appendChild(input41); 
        linput41.setAttribute("for","ans4");
        linput41.textContent = a[0];
        pdiv.appendChild(linput41);
    // option 2
        let input42 = document.createElement("input");
        let linput42 = document.createElement("label");
        input42.setAttribute("type","radio");
        input42.setAttribute("name","ans4");
        input42.setAttribute("value",2);
        pdiv.appendChild(input42); 
        linput42.setAttribute("for","ans4");
        linput42.textContent = a[1];
        pdiv.appendChild(linput42);
    // option 3
        let input43 = document.createElement("input");
        let linput43 = document.createElement("label");
        input43.setAttribute("type","radio");
        input43.setAttribute("name","ans4");
        input43.setAttribute("value",3);
        pdiv.appendChild(input43); 
        linput43.setAttribute("for","ans4");
        linput43.textContent = a[2];
        pdiv.appendChild(linput43);
    // option 4
    let input44 = document.createElement("input");
    let linput44 = document.createElement("label");
    input44.setAttribute("type","radio");
    input44.setAttribute("name","ans4");
    input44.setAttribute("value",4);
    pdiv.appendChild(input44); 
    linput44.setAttribute("for","ans4");
    linput44.textContent = a[3];
    pdiv.appendChild(linput44);

    // ques 5
    let p5 = document.createElement("p");
    p5.classList.add("questions")
    p5.textContent = "5.\xa0\xa0\xa0\xa0\xa0\xa0"+q[4];
    pdiv.appendChild(p5);
        
    // option 1
        let input51 = document.createElement("input");
        let linput51 = document.createElement("label");
        input51.setAttribute("type","radio");
        input51.setAttribute("name","ans5");
        input51.setAttribute("value",1);
        pdiv.appendChild(input51); 
        linput51.setAttribute("for","ans5");
        linput51.textContent = a[0];
        pdiv.appendChild(linput51);
    // option 2
        let input52 = document.createElement("input");
        let linput52 = document.createElement("label");
        input52.setAttribute("type","radio");
        input52.setAttribute("name","ans5");
        input52.setAttribute("value",2);
        pdiv.appendChild(input52); 
        linput52.setAttribute("for","ans5");
        linput52.textContent = a[1];
        pdiv.appendChild(linput52);
    // option 3
        let input53 = document.createElement("input");
        let linput53 = document.createElement("label");
        input53.setAttribute("type","radio");
        input53.setAttribute("name","ans5");
        input53.setAttribute("value",2);
        pdiv.appendChild(input53); 
        linput53.setAttribute("for","ans5");
        linput53.textContent = a[2];
        pdiv.appendChild(linput53);
    // option 4
    let input54 = document.createElement("input");
    let linput54 = document.createElement("label");
    input54.setAttribute("type","radio");
    input54.setAttribute("name","ans5");
    input54.setAttribute("value",4);
    pdiv.appendChild(input54); 
    linput54.setAttribute("for","ans5");
    linput54.textContent = a[3];
    pdiv.appendChild(linput54);

    // ques 6
    let p6 = document.createElement("p");
    p6.classList.add("questions")
    p6.textContent = "6.\xa0\xa0\xa0\xa0\xa0\xa0"+q[5];
    pdiv.appendChild(p6);
        
    // option 1
        let input61 = document.createElement("input");
        let linput61 = document.createElement("label");
        input61.setAttribute("type","radio");
        input61.setAttribute("name","ans6");
        input61.setAttribute("value",1);
        pdiv.appendChild(input61); 
        linput61.setAttribute("for","ans6");
        linput61.textContent = a[0];
        pdiv.appendChild(linput61);
    // option 2
        let input62 = document.createElement("input");
        let linput62 = document.createElement("label");
        input62.setAttribute("type","radio");
        input62.setAttribute("name","ans6");
        input62.setAttribute("value",2);
        pdiv.appendChild(input62); 
        linput62.setAttribute("for","ans6");
        linput62.textContent = a[1];
        pdiv.appendChild(linput62);
    // option 3
        let input63 = document.createElement("input");
        let linput63 = document.createElement("label");
        input63.setAttribute("type","radio");
        input63.setAttribute("name","ans6");
        input63.setAttribute("value",2);
        pdiv.appendChild(input63); 
        linput63.setAttribute("for","ans6");
        linput63.textContent = a[2];
        pdiv.appendChild(linput63);
    // option 4
    let input64 = document.createElement("input");
    let linput64 = document.createElement("label");
    input64.setAttribute("type","radio");
    input64.setAttribute("name","ans6");
    input64.setAttribute("value",4);
    pdiv.appendChild(input64); 
    linput64.setAttribute("for","ans6");
    linput64.textContent = a[3];
    pdiv.appendChild(linput64);

    // ques 7
    let p7 = document.createElement("p");
    p7.classList.add("questions")
    p7.textContent = "7.\xa0\xa0\xa0\xa0\xa0\xa0"+q[6];
    pdiv.appendChild(p7);
        
    // option 1
        let input71 = document.createElement("input");
        let linput71 = document.createElement("label");
        input71.setAttribute("type","radio");
        input71.setAttribute("name","ans7");
        input71.setAttribute("value",1);
        pdiv.appendChild(input71); 
        linput71.setAttribute("for","ans7");
        linput71.textContent = a[0];
        pdiv.appendChild(linput71);
    // option 2
        let input72 = document.createElement("input");
        let linput72 = document.createElement("label");
        input72.setAttribute("type","radio");
        input72.setAttribute("name","ans7");
        input72.setAttribute("value",2);
        pdiv.appendChild(input72); 
        linput72.setAttribute("for","ans7");
        linput72.textContent = a[1];
        pdiv.appendChild(linput72);
    // option 3
        let input73 = document.createElement("input");
        let linput73 = document.createElement("label");
        input73.setAttribute("type","radio");
        input73.setAttribute("name","ans7");
        input73.setAttribute("value",2);
        pdiv.appendChild(input73); 
        linput73.setAttribute("for","ans7");
        linput73.textContent = a[2];
        pdiv.appendChild(linput73);
    // option 4
    let input74 = document.createElement("input");
    let linput74 = document.createElement("label");
    input74.setAttribute("type","radio");
    input74.setAttribute("name","ans7");
    input74.setAttribute("value",4);
    pdiv.appendChild(input74); 
    linput74.setAttribute("for","ans7");
    linput74.textContent = a[3];
    pdiv.appendChild(linput74);
    
    let br1 = document.createElement("br");
    pdiv.appendChild(br1);

    let submit = document.createElement("button");
    submit.classList.add("submit");
    submit.setAttribute("class","submit");
    submit.setAttribute("onclick","return getResults()");
    submit.setAttribute("type","submit");
    submit.textContent = "Submit";
    pdiv.appendChild(submit)

    let img4 = document.createElement("img");
    img4.setAttribute("id","img4")
    img4.src = "/Images/sad.png";
    pdiv.appendChild(img4);

    let pr = document.createElement("p");
    pr.setAttribute("id","results");
    pdiv.appendChild(pr);
    
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

function getResults(obj){
    var sum = 0;
    let cimg4 = document.getElementById('img4');
    cimg4.setAttribute("class","/Images/smile");
    cimg4.src = "/Images/happy-5096.png"; 
    
    for(var i = 1; i <= 7; i++) {
      var radiosName = document.getElementsByName('ans'+i);
    
      for(var j = 0; j < radiosName.length; j++) {
        var radiosValue = radiosName[j];
        if(radiosValue.checked)
            sum = sum + j;
      }
    }
    
    if(sum<=7){
       let r = document.getElementById('results');
       r.setAttribute("class","r");
       r.textContent = "Your Result";
       let p = document.createElement("p");
       p.setAttribute("class","rhead");
       p.textContent = "Perfect Health";
       let p1 = document.createElement("p");
       p1.setAttribute("class","rcontent");
       p1.textContent = "Your answers suggest you may not be suffering from depression. Still if you feel something isn't quite right, we recommend you schedule an appointment with your doctor. If you need help finding a mental health professional, we suggest that you reach out to emergency mental health resources.";
       p.appendChild(p1);
       r.appendChild(p);
    }
    else if(sum>7 && sum<14){
        let r1 = document.getElementById('results');
        r1.setAttribute("class","r");
        r1.textContent = "Your Result";
        let p0 = document.createElement("p");
        p0.setAttribute("class","rhead");
        p0.textContent = "Moderate Health";
        let p01 = document.createElement("p");
        p01.setAttribute("class","rcontent");
        p01.textContent = "Your answers suggest you are suffering from moderate depression. Consider watchful waiting, and testing again normally within two weeks. We additionally suggest it would be prudent to start a conversation with your doctor.";
        p0.appendChild(p01);
        r1.appendChild(p0);
    }
    else if(sum=>14){
        let r1 = document.getElementById('results');
        r1.setAttribute("class","r");
        r1.textContent = "Your Result";
        let p0 = document.createElement("p");
        p0.setAttribute("class","rhead");
        p0.textContent = "Poor Health";
        let p01 = document.createElement("p");
        p01.setAttribute("class","rcontent");
        p01.textContent = "Your answers suggest you are suffering from severe depression. It is important that you schedule an appointment with your doctor or a mental health worker now. ";
        p0.appendChild(p01);
        r1.appendChild(p0);
    }
}


Start()
async function Start() {

    console.log("Hello1")
    let request = new Request("/JSON/quiz.json");
    let response = await fetch(request);

    let json = await response.json();

    const c = new Quiz(json);
    c.Load();
}

    