Start()
async function Start() {

    console.log("Hello1")
    let request = new Request("/JSON/EatingDisorder.json");
    let response = await fetch(request);

    let json = await response.json();

    // console.log(json)
    const c = new Eating(json);
    c.Load();

    // LoadNavbar(json);
    // loadsection1(json);
    // // loadsection2(json);
    // loadfooter(json);
}


class Eating {

    constructor(json) {
        this.json = json
    }
    Load() {

        const { json } = this;
        // console.log(json)
        let body = document.querySelector("body");

        this.loadEventTitle_1(json);
        this.loadEventTitle_2(json);
        this.loadEventTitle_3(json);
        this.loadEventTitle_4(json);
        this.loadEventTitle_5(json);
    }
 loadEventTitle_1(obj) {
    let event_desc_1 = document.querySelector('.head h2')
    event_desc_1.textContent = obj['Title'];
}
 loadEventTitle_2(obj) {
    let event_desc_2 = document.querySelector('.sec p')
    let event_desc_3 = document.querySelector('.heading1 h2')
    event_desc_2.textContent = obj['Contenttop']
    event_desc_3.textContent = obj['Title2']
}
 loadEventTitle_3(obj) {
    let event_desc_4 = document.querySelector('.box1 p')
    let event_desc_5 = document.querySelector('.box1 h2')
    let q = obj['Questions'];
    let a = obj['Answers'];
    event_desc_4.textContent = a[0]
    event_desc_5.textContent = q[0]
}
 loadEventTitle_4(obj) {
    let event_desc_6 = document.querySelector('.box2 p')
    let event_desc_7 = document.querySelector('.box2 h2')
    let q = obj['Questions'];
    let a = obj['Answers'];
    event_desc_6.textContent = a[1]
    event_desc_7.textContent = q[1]
}
 loadEventTitle_5(obj) {
    let event_desc_8 = document.querySelector('.box3 p')
    let event_desc_9 = document.querySelector('.box3 h2')
    let q = obj['Questions'];
    let a = obj['Answers'];
    event_desc_8.textContent = a[2]
    event_desc_9.textContent = q[2]
}

}
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}