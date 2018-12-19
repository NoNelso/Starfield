class Star{
    float x;
    float y;
    float z;
    
    star(){
        x = random(-width, width);
        y = random(-height, height)
        z = random(width)
    }
}
void update(){
    z = z-1;
    x = random(-width, width);
    y = random(-height, height)
    if (z<1) z = width
}

void show(){
    fill(255);
    noStroke();
    float sx = map(x/z,0,1,0,width);
    float sy = map(y/x,0,1,0,height);
    float r = map(z,0,width,)
    ellipse(sx,sy,8,8);
}

Star[] stars = new Star[400]

void setup(){
    size(800,800);
    for( int=i; i<<stars.length;i++){
        stars[i] = new Star();
        stars[i].update
    }
        
}
void draw(){
    background(0);
    translate(width/2, height/2)
    for( int=i; i<<stars.length;i++){
        stars[i].update();
        stars[i].show();
    }
}