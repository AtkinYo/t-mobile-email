const navSlide = () => {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav li');
  //Toggle Navigation

  burger.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');

      //Animate Links
    navLinks.forEach((link, index) => {

      if(link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /  7 + 0.5}s`;
      };
  
      console.log(index / 7);
    });

    //Burger Animation
    burger.classList.toggle('toggle');
  });

}

navSlide();