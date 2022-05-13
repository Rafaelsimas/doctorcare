window.addEventListener('scroll', onScroll)
onScroll()

/* função gerenciadora */
function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    /* linha alvo */
    const targetLine = scrollY + innerHeight / 2
    /* topo da seção */
    const sectionTop = section.offsetTop
    /* altura da seção */
    const sectioHeight = section.offsetHeight
    
    /* o topo da seção chegou ou ultrapassou a linha alto */
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    /* informações dos dados e da lógica */
  /*   console.log('O topo da seção chegou ou passou da linha ?', sectionTopReachOrPassedTargetLine)
 */
    /* verificar se a base está abaixo da linha alvo */
    const sectionEndsAt = sectionTop + sectioHeight
    
    /* o fim da seção passou da linha alvo */
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

   /*  console.log('O fundo da seção passou da linha ?', sectionEndPassedTargetLine) */

    /* limites da seção */
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    /* console.log(sectionBoundaries) */

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}


























function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else {
     navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 500){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}



ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home,
 #home img,
  #home .stats,
   #services,
   #services header,
   #services .card,
   #about,
   #about header,
   #about, .content`);
