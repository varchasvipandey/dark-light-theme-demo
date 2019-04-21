//Page Load
//function wantTo(){
//    
//        setTimeout(function(){
//    var want = confirm("Do you want use this page in dark mode?")
//    
//    if(want){
//        toDark();
//    } else {
//        toLight();
//    }
//    
//    
//}, 5000);
//    
//}


var themeFlag = 0; 

function wantTo(){
    setTimeout(function(){
        if(themeFlag == 0){
            var want = confirm("You are  currently using light theme. Do you want to try dark theme?")
            
            if(want){
                toDark();
            }else{
                toLight();
            }
        } else{
            var want = confirm("You are  currently using dark theme. Do you want to switch back to light theme?")
            
            if(want){
                toLight();
            }else{
                toDark();
            }
        }
    }, 10000);
}



//Dark theme
function toDark(){
   document.getElementById("background-main").style.background = "#171717";
    
    var x = document.getElementsByTagName("h1"); 
    for(i=0; i<x.length; i++){
        x[i].style.color = "#0062ff";
    }
    
    var y = document.getElementsByTagName("h2"); 
    for(i=0; i<y.length; i++){
        y[i].style.color = "#0062ff";
    }
    
    var z = document.getElementsByTagName("h3"); 
    for(i=0; i<z.length; i++){
        z[i].style.color = "#0062ff";
    }
    
    var w = document.getElementsByTagName("h4"); 
    for(i=0; i<w.length; i++){
        w[i].style.color = "#0062ff";
    }
    
    var paras = document.getElementsByTagName("p"); 
    for(i=0; i<paras.length; i++){
        paras[i].style.color = "#0a9fc3";
    }
    
    var links = document.getElementsByTagName("a"); 
    for(i=0; i<links.length; i++){
        links[i].style.color = "#0a9fc3";
    }
    
    var codes = document.getElementsByTagName("xmp"); 
    for(i=0; i<codes.length; i++){
        codes[i].style.color = "yellow";
    }
    
    var lineBrakes = document.getElementsByTagName("hr"); 
    for(i=0; i<lineBrakes.length; i++){
        lineBrakes[i].style.background = "rgba(255, 255, 255, 0.45)";
    }
    document.getElementById("aboutSection").style.background = "#262525";
    
    themeFlag = 1;
}

//Light theme
function toLight(){
    document.getElementById("background-main").style.background = "white";
    
    var x = document.getElementsByTagName("h1"); 
    for(i=0; i<x.length; i++){
        x[i].style.color = "#c42a2a";
    }
    
    var y = document.getElementsByTagName("h2"); 
    for(i=0; i<y.length; i++){
        y[i].style.color = "#c42a2a";
    }
    
    var z = document.getElementsByTagName("h3"); 
    for(i=0; i<z.length; i++){
        z[i].style.color = "#c42a2a";
    }
    
    var w = document.getElementsByTagName("h4"); 
    for(i=0; i<w.length; i++){
        w[i].style.color = "#c42a2a";
    }
    
    var paras = document.getElementsByTagName("p"); 
    for(i=0; i<paras.length; i++){
        paras[i].style.color = "red";
    }
    
    var links = document.getElementsByTagName("a"); 
    for(i=0; i<links.length; i++){
        links[i].style.color = "red";
    }
    
    var codes = document.getElementsByTagName("xmp"); 
    for(i=0; i<codes.length; i++){
        codes[i].style.color = "green";
    }
    
    var lineBrakes = document.getElementsByTagName("hr"); 
    for(i=0; i<lineBrakes.length; i++){
        lineBrakes[i].style.background = "rgba(0, 0, 0, 0.08)";
    }
    
    document.getElementById("aboutSection").style.background = "#f0d0d0";
    
    themeFlag = 0;
}

