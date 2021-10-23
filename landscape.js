const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const groundColor = [90, 60, 60]
const sunSize = 100
const sunColor = [220,220, 0]
const redSunColor = [220, 0, 0]
const sunRingColor = [120,120,20]
const markLength = 40
let angle = 0
let scrollVal = -canvasHeight * 2

function setup(){
    createCanvas(canvasWidth, canvasHeight, WEBGL)

}


function draw(){
    background([130,30,200])
    angleMode(DEGREES)
    rotateY(angle)
    drawSun(0, -canvasHeight/2, -500, sunSize * 2)
    drawGround()
    //drawRoad()
    scrollVal+=2
    angle+=0.1
}

function drawSun(x, y, z, size){
    push()
        translate(x, y, z * 4)
        rotateZ(angle)
        fill(redSunColor)
        stroke(sunRingColor)
        strokeWeight(20)
        ellipse(0,0,size * 1.3)
        fill(sunColor)
        noStroke()
        push()
        translate(0,0,10)
        ellipse(0, 0, size)
        pop()
    pop()
}

function drawGround(angle){
    
    push()
        translate(0, canvasHeight/4, 0)
        rotateX(100)
        fill(groundColor) 
        box(canvasWidth * 6, canvasHeight * 10, 10)
        drawRoad()
        drawLines()
        drawBuilding(320,0,200)
        drawBuilding(-400,-400 , 20)
    pop()
}

function drawRoad(){
    fill(0)
    box(100, canvasHeight * 10, 11)
}

function drawLines(){
    fill(255)
    noStroke()
    for(let i = -200; i < canvasHeight; i++){
        push()
        // rotateX(2)
        translate(0, i * (markLength * 2) + scrollVal, 10)
        box(10, markLength, 1)
        pop()
    }
}


function drawBuilding(x,y,z){
    // angle+=1
    const height = z * 1.8
    push()
        translate(x,y + scrollVal,z)
        fill([0,200,0])
        stroke([0,0,120])
        strokeWeight(10)
        // rect(0,0, 1000, 500)
        box(height/2,height,height)
    pop()
}