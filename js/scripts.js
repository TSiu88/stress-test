$(document).ready(function(){
  $("#form1").submit(function(event){
    var warn = 1;
    var symp = 2;
    var cop = -1;
    var total = 0;
    var high = 7;
    var low = 0;

    $("input:checkbox[name=warningSigns]:checked").each(function(){
      total += warn;
    });
  
    $("input:checkbox[name=symptoms]:checked").each(function() {
      total += symp;
    });


    $("input:checkbox[name=coping]:checked").each(function() {
      total += cop;
    });

    $("#results").show();
    if(total > high){
      $("#serious").show();
      $("#healthy").hide();
      $("#moderate").hide();
    }else if(total <= low){
      $("#healthy").show();
      $("#moderate").hide();
      $("#serious").hide();
    }else{
      $("#moderate").show();
      $("#serious").hide();
      $("#healthy").hide();
    }

    event.preventDefault();
  });
});