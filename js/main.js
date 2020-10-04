$(document).ready(function () {
       $('.owl-carousel').owlCarousel({
              loop: true,
              dots: true,
              margin: 10,
              responsive: {
                     300: {
                            items: 1
                     },
                     990: {
                            items: 1
                     },
                     1000: {
                            items: 1
                     },
              }
       });

       $('.navigation-menu').meanmenu({
              meanMenuContainer: '#mobile_menu',
              meanScreenWidth: 768,
       })
})

function clock(){
       var date = new Date();

       var day = date.getDate();
       var month = date.getMonth();
       var year = date.getFullYear();

       var name  =  ['January','February','March','April','May','June','July','August','September','October','November','December'];
       var monthname = name[month];

       
       document.querySelector('#date').innerHTML = " "+day +" "+monthname+" "+year;
       document.querySelector('#footer-year').innerHTML = year;
}
clock();