function liberaTab(evt, conhecimento) {
    
    var i, tabcontent, linkJS;

    //laço que coloca todos os elementos de classe "tabcontent" com display nulo, para não aparecer assim que entrar no site
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";      
    }

    //laço que faz o replacement de todos os estados "active" para nulo, em todas os elementos de classe "linkJS"
    linkJS = document.getElementsByClassName("linkJS");
    for (i=0; i<linkJS.length; i++){
        linkJS[i].className = linkJS[i].className.replace(" active", "");
    }


    document.getElementById(conhecimento).style.display = "block";

    evt.currentTarget.className = " active" + 1;
}