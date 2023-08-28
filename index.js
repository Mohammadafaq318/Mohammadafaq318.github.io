var current_path = window.location.pathname;


if(current_path=="/index.html"){
    $("#nav-CV").removeClass("active");
    $("#nav-main").addClass("active");
}
else if(current_path=="/CV.html"){
    $("#nav-CV").addClass("active");
    $("#nav-main").removeClass("active");
}

$("#btn-cv").button().click(function(){
    window.location.href='CV.html';
});

$("#btn-email").button().click(function(){
    var email = 'mafaqq318@gmail.com';
    window.location = 'mailto:' + email 
});