var start = new Date().getTime();
            
            var count = 0;
                
            
            function getRandomColor(){
                
                var letters = '0123456789ABCDEF'.split('');
                
                var color= "#";
                
                for (var i=0; i<6; i++){
                
                    color += letters[Math.floor(Math.random()*16)];
                }
                
                return color;
            }
            
            function makeShapeAppear(){
                
                
                var top = Math.random()*400;
                
                var left = Math.random()*1000;
                
                var width = Math.random()*300;
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                
                if(Math.random() < 0.5){
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                }
                else{
                    
                    document.getElementById("shape").style.borderRadius = "0%";
                }
                
                
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
                
                document.getElementById("shape").style.width = width + "px";
                
                document.getElementById("shape").style.height = width + "px";
                
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
            }
            
            function appearAgain(){
                var randomPeriod = Math.random()*2000;
            
                setTimeout(makeShapeAppear, randomPeriod);
            }
            
            
            document.getElementById("shape").onclick = function(){
                
                
                count += 1;
                
                if( count == 1){
                    document.getElementById("attempts").innerHTML = count + " time";
                    
                }else{
                    document.getElementById("attempts").innerHTML = count + " times";    
                }
                
                document.getElementById("shape").style.display = "none";
                  
                var end = new Date().getTime();
                
                var timeTaken = (end - start)/1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAgain();
                
               
              }