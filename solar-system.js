const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let angle = 0
const planets = [
    {
        dist: 150,
        col: [220, 20, 220],
        size: 20
    },
    {
        dist: 250,

        col: [20, 220, 20],
        size: 30
    },
    {
        dist: 350,
        col: [20, 20, 220],
        size: 50
    },
    {
        dist: 450,
        col: [200, 20, 20],
        size: 40
    }
]



function setup(){
    // (0,0) on a webgl canvas is the center!!!
    // not the topleft like on a 'normal' canvas
    createCanvas(canvasWidth, canvasHeight, WEBGL)

}

function draw(){
    background(30)
   
    translate(0,0,200)
    
    // this is the sun
    fill(200, 200, 60)
    sphere(100)

    planets.forEach((planet, i) => {
        
        drawPlanet(planet, angle)
    })

angle+=0.5
}

function drawPlanet({dist, col, size}, angle){
    const x = dist * sin(angle/size)
    const y = dist * cos(angle/size)
    // const z = dist * sin(angle/size + PI) * cos(angle/size + PI)
    push()
        translate(x, 0, y)
        rotateX(angle/size)
        rotateY(angle/size)
        rotateZ(angle/size)
        fill(col)
        sphere(size)
    pop()
}
