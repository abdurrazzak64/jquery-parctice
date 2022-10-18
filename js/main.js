$(document).ready(function(){
  $(".event").on({
    mouseenter: function(){
      $(this).css("background-color","#ccc");
    },
    mouseleave: function(){
      $(this).css("background-color","green");
    },
    click: function(){
      $(this).css("background-color","yellow");
    }
  });

  $("#hide").click(function(){
    $('.para').hide('1000');
  });
  $("#show").click(function(){
    $('.para').show('1000');
  });

  $("#tog").click(function(){
    $('.toggl').toggle('slow');
  });

  $("#fedin").click(function(){
    $('.box1').fadeIn();
    $('.box2').fadeIn('slow');
    $('.box3').fadeIn(3000);
  });

  $(".bt").click(function(){
    $('.slidee').slideToggle(2000);
  });


  $("#btn1").click(function(){
    alert("Text: " +$("#get").text());
  });
  $("#btn2").click(function(){
    alert("#Text : " + $("#get").html());
  });

  $("#btn3").click(function(){
    alert($("#get1").val());
  });

  $("#btn4").click(function(){
    $("#set").text("Hi!");
  });
  $("#btn5").click(function(){
    $("#set1").html("<h1>RAZA</h1>");
  });
  $("#btn6").click(function(){
    $("#set2").val("Enter Your Name");
  });

  $("#btn7").click(function(){
    $("#ad").append("Raza");
  });

  $("#add").click(function(){
    $("#razaa").before("<b>Raza</b>");
  });
  $("#add2").click(function(){
    $("#razaa").after("<b>Raza</b>");
  });

  $("#btnremove").click(function(){
    $(".remove").remove();
  });

  $(".adclas").click(function(){
    $(".adcls").css({
      "background-color" : "red",
      "font-size" : "40px",
      "color" : "#fff"
    });
  });

  $(".btndiman").click(function(){
    $(".diman").width(200).height(200);
  });

});
