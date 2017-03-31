/*
  Controlar los gestos tactiles del menu,
  mediante la libreria hammer.js 
*/

const menu = document.getElementById('dashboard-menu')
const logoIconClose = document.getElementById('menu-button-icon-img-close')  
const logoIconOpen = document.getElementById('menu-button-icon-img-open')

const menuInit = () => {

  let hammerMenu = new Hammer(document,{})
  
  hammerMenu.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
  hammerMenu.on('swipe',menuAction)

  let hammerMenuIconClose = new Hammer(logoIconClose,{})
  hammerMenuIconClose.on('tap',closedMenu)

  let hammerMenuIconOpen = new Hammer(logoIconOpen,{})
  hammerMenuIconOpen.on('tap',openMenu)
}

const menuAction = (e) => {

  if( e.deltaX < -20 ) closedMenu()
  if( e.deltaX > 20 ) openMenu()

}

const closedMenu = () => {

  menu.style.transition = '1s'
  menu.style.left = '-150%'
  
}

const openMenu = () => {

  menu.style.transition = '1s'
  menu.style.left = '0'

}

menuInit()





