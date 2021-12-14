$(function(){
    
    $("#act").on("click", function() {
        $alert("hello")
      $("detaiComment").slideToggle();
    });
    
    $("hoge").on("click", function() {
        $alert("hello")
      $("detaiComment").slideToggle();
    });
  });

  function test(){
      let target = document.getElementById("detailComent1");
      target.classList.toggle("detailComent")
  }

  function changeContent1(){
    let target = document.getElementById("detailComent1");
    let target2 = document.getElementById("detailComent2");
    let target3 = document.getElementById("detailComent3");

    target.classList.toggle("detailComent");
    target2.classList.toggle("detailComent");
    target3.classList.toggle("detailComent");   
  }