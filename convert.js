function ex(){
    let ks = Number(document.querySelector("#amount").value);
     if(document.querySelector("#lan").value=="US"){
       const usd=1;
       result = (ks/1781.40)*usd;
       document.querySelector("#value").innerHTML=ks+"KS="+result.toFixed(2)+" USD";
       document.querySelector("#amount").value="";
       ru();
       document.querySelector("#pa").innerHTML="1 USD = 1781.40 KS ";
 
     }else if(document.querySelector("#lan").value=="Japan"){  //japan
      const y =0.064; 
      result = ks*y;
      document.querySelector("#value").innerHTML=result.toFixed(2)+" ¥(yen)"  
      document.querySelector("#amount").value="";
      ru();
      document.querySelector("#pa").innerHTML="1 USD=113.69 ¥(yen)";

     }else if(document.querySelector("#lan").value=="Russia"){  //russia
      const rb =0.043; 
      result = ks*rb;
      document.querySelector("#value").innerHTML=result.toFixed(2)+" ₽(ruble)"  
      document.querySelector("#amount").value="";
     
      ru();
      document.querySelector("#pa").innerHTML="1 USD = 76.70 ₽(ruble) ";



     }else if(document.querySelector("#lan").value=="India"){  //india
       const r=0.042;
       result =ks*r;
       document.querySelector("#value").innerHTML=result.toFixed(2)+" ₹(rupee)";
       document.querySelector("#amount").value="";
       ru();
       document.querySelector("#pa").innerHTML="1 USD = 75.00₹";



     }else if(document.querySelector("#lan").value=="China"){  //china
      const y=0.0036; 
      result =ks*y;
      document.querySelector("#value").innerHTML=result.toFixed(2)+" ¥(yuan)";
      document.querySelector("#amount").value="";
      ru();
      document.querySelector("#pa").innerHTML="6.34 ¥(yuan) = 1 USD";


     }else if(document.querySelector("#lan").value=="Thai"){  //thailand
      const b=0.019;
      result =ks*b;
      document.querySelector("#value").innerHTML=result.toFixed(2)+" baht";
      document.querySelector("#amount").value="";
      ru();
      document.querySelector("#pa").innerHTML="32.95 baht = 1 USD";


     }
      function ru(){
        let c = document.querySelector("#lan").value;
      switch(c){
        case("Russia"):document.body.style.color="red";
         document.getElementById("im").style.visibility="visible";
         document.getElementById("us").style.visibility="visible";
         document.getElementById("aud").style.visibility="visible";
         document.getElementById("aud").play();
         
        break;
        default:document.body.style.color="black";
        document.getElementById("im").style.visibility="hidden";
        document.getElementById("us").style.visibility="hidden";
        document.getElementById("aud").style.visibility="hidden";
        document.getElementById("aud").pause();
        break;
       }

      }
     
    }
    