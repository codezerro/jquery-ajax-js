$(document).ready(function(){

    $("p").on({
        mouseenter:function(){
            $(this).css("background-color","#f00")
        },
        mouseleave:function(){
            $(this).css("background-color","#33f")
        },
        click:function(){
            $(this).css("background-color","#0f0")
        },
        dblclick:function () {
            $(this).css("background-color","yellow")
        }
    })
    // $("input").focus(function(){
    //     $(this).css("background","#f00")
    // })
    // $('h1').hide();
    // $('.title').hide()
    // $('#title').hide()
    // $('button').click(function(){
    //     $('p.name').hide()
    // })

    // $('button').click(function(){
    //     $('ul li:first').hide()
    // })
    // $('button').click(function(){
    //     $('ul li:first-child p').hide()
    // })
    // $('p').dblclick(function(){
    //     $(this).hide()
    // })
    // $('p').mouseenter(function(){
    //     $(this).hide();
    // },
    // function(){
    //     $(this).show();
    // })
    // $('p').hover(function () {
    //     alert("hi")
    // },
    // function(){
    //     alert("Bye")
    // })
})

// $(selector).action()