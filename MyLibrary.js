
function bounceOff(Object1, Object2){
    if (Object1.x-Object2.x<=Object1.width/2+Object2.width/2 
      && Object2.x-Object1.x<=Object1.width/2+Object2.width/2 
       ){
          Object1.velocityX=(-1)*Object1.velocityX;
          Object1.shapeColor="purple"
          Object2.shapeColor="purple"
       }
       if(Object1.y-Object2.y<=Object1.height/2+Object2.height/2 
        && Object2.y-Object1.y<=Object1.height/2+Object2.height/2){
            Object1.velocityY=(-1)*Object1.velocityY;
            Object1.shapeColor="purple"
            Object2.shapeColor="purple"
        }
  }
  function isTouching(Object1,Object2){
    if (Object1.x-Object2.x<=Object1.width/2+Object2.width/2 
      && Object1.y-Object2.y<=Object1.height/2+Object2.height/2
      && Object1.x-Object2.x<=Object1.width/2+Object2.width/2 
      && Object1.y-Object2.y<=Object1.height/2+Object2.height/2 
       ){
        
        return true; 
      } else{
    
        return false;
      }
  
  }

function bounce(Object1, Object2){
    if (Object1.x-Object2.x<=Object1.width/2+Object2.width/2 
        && Object2.x-Object1.x<=Object1.width/2+Object2.width/2 
         ){
            var a = Object2.velocityX;
            Object2.velocityX=Object1.velocityX; 
            Object1.velocityX=a;
               
            Object1.shapeColor="white"
          Object2.shapeColor="white"
            
         }
         if(Object1.y-Object2.y<=Object1.height/2+Object2.height/2 
          && Object2.y-Object1.y<=Object1.height/2+Object2.height/2){
              
            var a = Object2.velocityY;
            Object2.velocityY=Object1.velocityY; 
            Object1.velocityY=a;
              Object2.shapeColor="white"
              Object1.shapeColor="white"
          }
}
function displace(Object1, Object2){
    if (Object1.x-Object2.x<=Object1.width/2+Object2.width/2 
        && Object2.x-Object1.x<=Object1.width/2+Object2.width/2 
         ){
            Object2.velocityX=Object1.velocityX; 
            Object1.shapeColor="yellow"  
            Object2.shapeColor="yellow" 
            
         }
         if(Object1.y-Object2.y<=Object1.height/2+Object2.height/2 
          && Object2.y-Object1.y<=Object1.height/2+Object2.height/2){
              Object2.velocityY=Object1.velocityY; 
              Object1.shapeColor="yellow"
              Object2.shapeColor="yellow"
              
          }
}
function collide(Object1, Object2){
    if (Object1.x-Object2.x<=Object1.width/2+Object2.width/2 
        && Object2.x-Object1.x<=Object1.width/2+Object2.width/2 
         ){
            Object2.velocityX=0;
            Object1.velocityX=0;
            Object1.shapeColor="blue"
              Object2.shapeColor="blue" 
            
         }
         if(Object1.y-Object2.y<=Object1.height/2+Object2.height/2 
          && Object2.y-Object1.y<=Object1.height/2+Object2.height/2){
              Object2.velocityY=0;
              Object1.velocityY=0;
              Object1.shapeColor="blue"
              Object2.shapeColor="blue" 
              
          }
}