const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

//sun
const sunColor = [220, 220, 0]
const sunRingColor = [120, 120 ,20]
const sunSize = 100

// ground
const groundColor = [190,160,160]

//road
const markLength = 20
let scrollVal = -canvasHeight * 4

let angle = 0
let angle2 = 0
function setup(){
    createCanvas(canvasWidth, canvasHeight, WEBGL)

}

function draw(){
    background([120,120,220])
   
    angleMode(DEGREES)
    //rotateY(angle2)
    drawSun(0, -canvasHeight/2, -500)
    drawGround()
    angle++
    angle2+=1
    scrollVal+=5
}

function drawSun(x,y,z){
    push()
        translate(x,y,z)
        //rotateY(angle)
        fill(sunColor)
        stroke(sunRingColor)
        strokeWeight(20)
        ellipse(0, 0, sunSize)
    pop()
}

function drawGround(){
    push()
        translate(0, canvasHeight/4, 0)
        rotateX(90)
        fill(groundColor)
        box(canvasWidth * 6, canvasHeight * 10, 10)
        drawRoad()
        drawBuilding(120,-100,40)
    pop()
}

function drawRoad(){
    fill(0)
    box(100, canvasHeight * 10, 11)
    drawLines()
}

function drawLines(){
    fill(255)
    for(let i = 0; i < canvasHeight; i ++){
        push()
            translate(0, i * (markLength * 2) + scrollVal, 12)
            box(10, markLength, 1)
        pop()
    }
}

function drawBuilding(x,y,z){
    const height = z * 1.8
    push()
        translate(x, y + (scrollVal + canvasHeight * 3), z)
        fill(220, 0, 220)
        box(height/2, canvasHeight * 2, height)
    pop()
}