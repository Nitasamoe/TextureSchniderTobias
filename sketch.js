function setup() {
  createCanvas(1500,1500);
  frameRate(10);
  
  
  
  
  var arrSide = [];
  
  arrSide.push()
  
  var arr= [{
        one:{x:0,y:0},
        two:{x:random(0,100),y:0},
        three:{x:0,y:random(0,100)}
        }];
        
    for(x=0; x<17; x++){
       arr.push(
         {
          one:{x:arr[x].two.x,y:arr[x].two.y},
          two:{x:arr[x].three.x,y:arr[x].three.y},
          three:{x:arr[x].three.x+random(0,100),y:arr[x].three.y+random(0,100)}
         }
         )
    }
      
        
        
  for(x=0; x<arr.length;x++){
        noStroke();
        fill(random(80,190));
            beginShape(TRIANGLES);
        vertex(arr[x].one.x, arr[x].one.y);
        vertex(arr[x].two.x, arr[x].two.y);
        vertex(arr[x].three.x, arr[x].three.y);
        endShape();
}    
  }


function draw() { 


}