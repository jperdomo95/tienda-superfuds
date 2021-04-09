const carouselOptions = {
  items: 5,
  rewind: true,
  nav: true,
  navText: ['', ''],
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
        loop:false
    }
  }
}

export default carouselOptions