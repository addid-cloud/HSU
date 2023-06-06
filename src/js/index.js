const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const nav = document.getElementById('myNav')
const hero = document.getElementById('myHero')
const heroOffset = hero.offsetHeight
window.onscroll = function(){
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollPosition >= heroOffset){
        nav.classList.add("bg-green-200")
        nav.classList.add("rounded")
        nav.classList.add("mt-2")
        nav.classList.add("text-slate-800")
        nav.classList.remove("transparant")
    }else if(!mobileMenu.classList.contains('hidden')){
        nav.classList.add("transparant")
        nav.classList.remove("bg-green-200")
    }
    else{
        nav.classList.remove("text-slate-800")
        nav.classList.remove("bg-green-200")
        nav.classList.remove("mt-2")
        nav.classList.add("transparant")

    }
}
menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('md:hidden');
    menuBtn.classList.toggle('text-slate-950')
    if(nav.classList.contains('bg-green-200')){
        nav.classList.toggle('bg-green-200')
    }
  });   

  const openBtn = document.getElementById('openBtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });