img ="";
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    text("Cat",315,75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    rect(300, 60, 300, 350);

}