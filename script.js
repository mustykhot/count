let number=0;

function func1() {

              const final = ++number;
              document.getElementById("count").innerHTML= final;

              if (final>0){
                document.getElementById("count").style.color = "green";
                
                
               }
               else if (final<0){
                 document.getElementById("count").style.color = "red";
                
               }
               else if (final==0){
                 document.getElementById("count").style.color = "black";
                
               }

                
        
}

function func2() {

                const final = --number;
                document.getElementById("count").innerHTML= final;

                if (final>0){
                document.getElementById("count").style.color = "green";
                
                
               }
               else if (final<0){
                 document.getElementById("count").style.color = "red";
                 
               }
               else if (final==0){
                 document.getElementById("count").style.color = "black";
                
               }

                
                

}
