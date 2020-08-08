$(function(){
    
    $('.js-tab-trigger').on('click', function(){
        var tabName = $(this).data('tab'),
            tab = $('.js-tab-content[data-tab="'+tabName+'"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        tab.addClass('active');
    });

   



    let nav = $('#header__menu'); 
    let navToggle = $("#navToggle");
    let header__burger = $(".header__burger");

    $("[data-scroll]").on('click', function(event){
        event.preventDefault();//отменяет стандартное поведение ссылки при клики

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        nav.removeClass("active");
        header__burger.removeClass("active");
        
        $('html, body').animate({
        scrollTop: elementOffset - 65
        }, 700);
        
  });

   /*Nav Toggle*/


   navToggle.on('click', function(event){
        event.preventDefault();//отменяет стандартное поведение ссылки при клики

        nav.toggleClass("show");
        
        
  });


  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
});
});