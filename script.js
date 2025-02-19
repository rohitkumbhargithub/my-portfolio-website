
// menu navbar icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const tech = document.getElementById('tech');
const counters = document.querySelectorAll('.counter');
let isActived = false;

window.addEventListener('scroll', ()=>{
    if(scrollY  > tech.offsetTop - tech.offsetHeight - 300 && isActived === false){
        counters.forEach(counter => {
            counter.innerText  = 0;
            let count = 0;

            function updateCount(){
                const target = parseInt(counter.dataset.count);
                if(count < target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 70);
                }else{
                    counter.innerText = target;
                }
            }
            updateCount();
            isActived = true;
            counter.style.color = "#00b379";

        }
    )
    }else if(scrollY  < tech.offsetTop - tech.offsetHeight - 500 || pageYOffset === 0 && isActived === true){
        counters.forEach(counter => {
            counter.innerText  = 0;
        });
        isActived = false;
    }
}
);



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}


// sticky navbar
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if(window.scrollY > 0){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }

    // remove menu
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});





// swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   dark light
let darkMode = document.querySelector('#darkMode');

darkMode.onclick = () => {
    darkMode.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}


// show skills
aboutHeading = document.querySelectorAll('.about-heading span');
aboutInfo = document.querySelectorAll('.about-brief div');

aboutHeading.forEach(heading => {
        heading.addEventListener('click', () => {
            document.querySelector("span.active").classList.remove("active");
            heading.classList.add("active");
        })
})



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")


}


// loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.toggle('loader-hidden');

    loader.addEventListener("transitionend", () => {
    loader.classList.remove('loader');
    })
})


// scroll reveal
ScrollReveal(
    { 
        reset: true,
        distance: '10px',
        duration: 2500,
        dealy: 300
    } 
);

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portdolio-box, .testimonial-wrapper, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img, .about-content', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-brief', {origin: 'right'});


let toastBox = document.getElementById('toastBox');
    let successMsg = '<img src="https://cdn-icons-gif.flaticon.com/14732/14732010.gif"  /> Thank You, Message Send.';

    function showToast(msg){
      let toast = document.createElement('div');
      toast.classList.add('toast');
      toast.innerHTML = msg;
      toastBox.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 3000);
    }

const startDate = new Date(2024, 9);
const currentDate = new Date();
const monthsDifference =
      currentDate.getFullYear() * 12 +
      currentDate.getMonth() -
      (startDate.getFullYear() * 12 + startDate.getMonth());

    const formattedStartDate = startDate.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
    });

    const displayText = `${formattedStartDate} - Present (${monthsDifference} months)`;
    document.getElementById('date-display').textContent = displayText;

// google sheet code
const scriptURL = 'https://script.google.com/macros/s/AKfycbx78T_o9jAKzcXlBGJVfx7Nylwr2Zl6tAAo9EENUl9dHGkhmXoU-t9jeXgGdTJOdqrU/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    showToast(successMsg);
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => response)
    .then(() => {window.location.reload();})
    .catch(err => console.error('Error!', err.message))
})