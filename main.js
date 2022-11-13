// navbar moreDarker

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const aboutPosition = document.querySelector("#about-me");

window.addEventListener('scroll', () => {
    if(window.scrollY>navbarHeight) {
        navbar.classList.add('moreDark');
    } else {
        navbar.classList.remove('moreDark');
    }
    
    
    // if(window.scrollY>aboutPosition.getBoundingClientRect().top) {
        
    // }
    
});

// Auto-Scrolling to designated-point and toggle navbar__right

const navbarMenu = document.querySelector('.navbar__right');
const navbarArray = document.querySelectorAll('.navbar__right li');
const contactBtn = document.querySelector('.header__button');

navbarMenu.addEventListener('click',(e) => {

    //Toggle navbar__right
    navbarMenu.classList.add('hide');
    //Finish
    
    const target=e.target;
    const link = target.dataset.link;

    navbarArray.forEach((value) => {
        value.classList.remove('active');
    })
    target.classList.add('active');

    if(link == null) {
        return;
    } else {
        let designatedPoint = document.querySelector(link);
        console.log(designatedPoint.scrollY);
        // const y = designatedPoint - navbarHeight;
        designatedPoint.scrollIntoView({behavior:'smooth'});
    }
});

contactBtn.addEventListener('click', (e) =>{
    console.log(e.target.dataset.link);
    const gotoContact = document.querySelector(e.target.dataset.link);
    gotoContact.scrollIntoView({behavior:'smooth'})
}); 


// Header becomes transparent with scrolling
window.addEventListener('scroll',() => {
    const header = document.querySelector('#header');
    const headerHeight = header.getBoundingClientRect().height;
    let scrollHeight = window.scrollY;
    
    if(headerHeight>scrollHeight) {
        header.style.opacity = 1-scrollHeight/headerHeight;
    } else {
        return;
    }
});

// Appearing an arrowButton-to-top, logo scrolling to top

const docHeight = document.documentElement.scrollHeight;
const arrowBtn = document.querySelector('#for-arrow-div');
console.log(docHeight);

window.addEventListener('scroll',() => {
    let myHeight = window.scrollY;
    if(myHeight>(docHeight/4)) {
        arrowBtn.classList.add('visible');
    } else {
        arrowBtn.classList.remove('visible');
    };
});

arrowBtn.addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

const logo__Gunny = document.querySelector('.navbar__left a');
logo__Gunny.addEventListener('click',(e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})


// Specific img appearence when click, in my work

const imgLi = document.querySelectorAll('.image__box');
const buttons = document.querySelector('.my-work__buttons');
const btnArray = document.querySelectorAll('.my-work__buttons button');


buttons.addEventListener('click', (e) => {  
    
    let btnType = e.target.dataset.type;
    if(btnType==null) {
        return;
    };
    

    btnArray.forEach((value) => {
        value.classList.remove('active');
    })
    const button = e.target;
    button.classList.add('active');

    imgLi.forEach((li) => {
        if(li.dataset.type === btnType || btnType === 'all') {
            li.classList.remove('invisible');
            li.classList.add('bigger');
        } else {
            li.classList.add('invisible');
        }
    });
});

// navbar burger button toggle

const togglebtn = document.querySelector('.navbar__toggle-btn');
// const navbarMenu = document.querySelector('.navbar__right');

togglebtn.addEventListener('click',() => {
    navbarMenu.classList.toggle('hide');
});

