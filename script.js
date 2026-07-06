// ===============================
// Portfolio JavaScript
// ===============================

// Say Hello Button

function showMessage() {

    alert(
        "👋 Hello!\n\nThank you for visiting my portfolio.\n\nFeel free to contact me through Email or GitHub.\n\nHave a great day!"
    );

}


// ===============================
// Smooth Scrolling for Navbar
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior:'smooth'

        });

    });

});


// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll",function(){

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }

    else{

        nav.style.boxShadow="0 3px 12px rgba(0,0,0,.08)";

    }

});


// ===============================
// Active Navbar Link
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Typing Animation
// ===============================

const text="Full Stack Web Developer";

let index=0;

const heading=document.querySelector(".hero-text h2");

heading.innerHTML="";

function typingEffect(){

    if(index<text.length){

        heading.innerHTML+=text.charAt(index);

        index++;

        setTimeout(typingEffect,90);

    }

}

typingEffect();


// ===============================
// Scroll To Top Button
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.right="25px";

topButton.style.bottom="25px";

topButton.style.padding="12px 15px";

topButton.style.border="none";

topButton.style.background="#0d6efd";

topButton.style.color="#fff";

topButton.style.borderRadius="50%";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.fontSize="18px";

topButton.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
