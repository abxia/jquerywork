$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
          autoplay: {
            delay: 2000,
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
      });
  $('.dropdown').click(function (e){ 
  e.preventDefault();
  $('.sub').slideToggle('fast');
  $(this).addClass('active');
  });
  $(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".sub").slideUp("1000");
    }
});

$('.backtop a').click(function (e) { 
  e.preventDefault();
  $('html,body').animate({
    scrollTop:0
  }, 1000);
});

$('.qa .qu h2').click(function(){
  $(this).toggleClass('active');
  $(this).parent().find('p').slideToggle();
  $(this).parent().siblings().find('p')
  .slideUp(1000);
});


//chart.js//
new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Africa groot", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world GROOTS population in 2050'

    }
  }
});

});