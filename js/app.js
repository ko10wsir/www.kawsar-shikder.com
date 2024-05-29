
// skills start
const tabs =document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener("click", () =>{
        const target = document.querySelector(tab.dataset.target)
tabContent.forEach(tabContents => {
    tabContents.classList.remove('skills_active')
})
target.classList.add('skills_active')

tabs.forEach(tab => {
    tab.classList.remove('skills_active')
})
tab.classList.add('skills_active')
    })
})
// skills end
// portfolio start
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work_item')
function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active_work'))
    this.classList.add('active_work')
}
linkWork.forEach(l=> l.addEventListener("click", activeWork))
// portfolio end
// portfolio popup start
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup (){
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup_close").addEventListener("click", togglePortfolioPopup)
function portfolioItemDetails(portfolioItem){
document.querySelector(".pp_th img").src = portfolioItem.querySelector(".work_image").src;
document.querySelector(".portfolio_popup_subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
document.querySelector(".portfolio_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
}
// portfolio popup end
// input start_______________________________________________________________________________
const inputs = document.querySelectorAll(".input");
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus")
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})
// input end__________________________________________________________________________________
// services popup start
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("services_button")){
        togglePortfolioPopupe();
        portfolioItemDetailse(e.target.parentElement);
    }
})
function togglePortfolioPopupe (){
    document.querySelector(".services_popup").classList.toggle("open");
}
document.querySelector(".services_popup_close").addEventListener("click", togglePortfolioPopupe)
function portfolioItemDetailse(portfolioItem){
document.querySelector(".pp_th img").src = portfolioItem.querySelector(".services_popup_image").src;
document.querySelector(".services_popup_subtitle span").innerHTML = portfolioItem.querySelector(".services_title").innerHTML;
document.querySelector(".services_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
}
// services popup end
// testmonial start
let swiper = new Swiper(".testimonials_container", {
  spaceBetween: 24,
  Loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
// testmonial end
// main start
const sections = document.querySelectorAll("section[id]");
scrollwindow. addEventListener ("scroll ", navHighlighter);
function navHighlighter(){
    let scrollY = window.PageYOffset;
sections.forEach(current => {
    const sectionHeight = current.offsetHight;
    const sectionTop = current.offsetTop - 50;
    sectionIds = current.getAttribute("id");
    if(scrollY > sectionTop && screenY <= sectionTop + sectionHeight){
    document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active_link")
    }
    else{
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active_link")
        }
})
}
// main end
const nav = document.querySelector(".nav_menu"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
       for(let j=0; j<totalNavList; j++){
        navList[j].querySelector("a").classList.remove("active_link");
       }
        this.classList.add("active_link")
        showSection(this);
    })
}
function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active_link");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active_link")
}
// nav
const navMenu = document.querySelector('sidebar')
const navToggle = document.querySelector('nav_toggle')
const navClose = document.querySelector('nav_close')
if(navToggle){
    navToggle.addEventListener("click",() => {
        navMenu.classList.add('show-sidebar')
    })
}
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
    })
}