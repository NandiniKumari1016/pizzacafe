

// creating a responsive navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header_Elem = document.querySelector(".header-section");

const toggleNavbar = () =>{
  header_Elem.classList.toggle("active");
};

mobile_nav.addEventListener('click' , () => toggleNavbar());