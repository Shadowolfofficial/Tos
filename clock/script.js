function  myFunction(){
    var d=new Date();
    
    
    
    //document.getElementById("demo").style.color="red";
    
    var h=d.getHours();
    var m=d.getMinutes();
    var da=d.getDay();
    
    if(da===1){
        da="Lundi";
    }
    
    else if(da===2){
        da="Mardi";
    }
    
    else if(da===3){
        da="Mercredi";
    }
   else if(da===4){
        da="Jeudi";
    }
    else if(da===5){
        da="Vendredi";
    }
    
   else  if(da===6){
        da="Samedi";
    }
   
   else {
       da="Dimanche";
   }
   
   
    document.getElementById("demo").innerHTML=h+" :  "+m+"  "+"<br>"+da;
}



setInterval(myFunction,100);
