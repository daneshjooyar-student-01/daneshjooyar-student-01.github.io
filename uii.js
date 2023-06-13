$(document).ready(function(){

    var inp = document.querySelector('input');

    $(".click").click(function(){
        var size = $("input[type='number']").val();
        $('p').css('font-size', size + 'px')
      });

    function set_style(){
        var size = localStorage.getItem('size');
        $('p').attr('style', size)
    };
    set_style();

    function save_size(){
        localStorage.setItem('size',$('p').attr('style'))
    };


    $('.pelas').click(function(){
        $('p').animate({
            fontSize:'+=1px'
        }, 500, save_size);
        //save_size()
    });

    
    $('.mines').click(function(){
        $('p').animate({
            fontSize:'-=1px'
        },500,save_size);
        save_size()
    });

    $('.re').click(function(){
        $('p').attr('style','');
        save_size()
    });









});