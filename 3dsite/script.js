let scene, camera, renderer, cssRenderer;
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let rotateUp = false, rotateDown = false, rotateLeft = false, rotateRight = false;
let velocity = new THREE.Vector3();
const movementSpeed = 1;
const rotationSpeed = 0.02;
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const wallDistance = 0.4*vw; // Distance of walls from the center

let floor;

function addObject(namesd, p1, p2, p3, r1, r2, r3) {
    const thing = document.getElementById(namesd);
    thing.style.display = 'block';
    const thingObject = new THREE.CSS3DObject(thing);
    thingObject.position.set(p1, p2, p3);
    thingObject.rotation.set(r1, r2, r3);
    scene.add(thingObject);
}

function init() {
    music();
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x201263);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // WebGL Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // CSS3D Renderer
    cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    document.body.appendChild(cssRenderer.domElement);

    // Add floor
    const floorGeometry = new THREE.PlaneGeometry(8000, 8000);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
    floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -1;
    scene.add(floor);

    // Adjust the rotation and position values to create a 3/4 box shape
    addObject('content2', 0, 0, -wallDistance, 0, 0, 0);         // Front wall
    addObject('content3', -wallDistance, 0, 0, 0, Math.PI / 2, 0);  // Left wall
    addObject('content1', wallDistance, 0, 0, 0, -Math.PI / 2, 0);  // Right wall
    addObject('content0', 0, 0, wallDistance, 0, Math.PI, 0);   // Back wall
    addObject('content4', 0, 0, -wallDistance-2000, 0, 0, 0);         // Warn wall

    // Event listeners for key press
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    animate();
    setInterval(animfloor, 20);
}

function onWindowResize() {
    alert("if the resize was a zoom (ctrl+ and ctrl-) that can mess this up. Press OK to reload.");
    document.location.replace("index.html");
    /* camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.setSize(window.innerWidth, window.innerHeight); */
}

function onKeyDown(event) {
    switch (event.code) {
        case 'KeyW':
            moveForward = true;
            break;
        case 'KeyS':
            moveBackward = true;
            break;
        case 'KeyA':
            moveLeft = true;
            break;
        case 'KeyD':
            moveRight = true;
            break;
        case 'ArrowLeft':
        case 'KeyJ':
            rotateRight = true;
            break;
        case 'ArrowRight':
        case 'KeyL':
            rotateLeft = true;
            break;
    }
}

function onKeyUp(event) {
    switch (event.code) {
        case 'KeyW':
            moveForward = false;
            break;
        case 'KeyS':
            moveBackward = false;
            break;
        case 'KeyA':
            moveLeft = false;
            break;
        case 'KeyD':
            moveRight = false;
            break;
        case 'ArrowLeft':
        case 'KeyJ':
            rotateRight = false;
            break;
        case 'ArrowRight':
        case 'KeyL':
            rotateLeft = false;
            break;
    }
}

async function animfloor() {
    // Change floor color
    const time = Date.now() * 0.0001; // Slower transition
    const hue = 210; // Fixed hue for blue
    const lightness = (Math.sin(time * Math.PI * 2) + 1) / 2; // Oscillates between 0 and 1
    floor.material.color.setHSL(hue / 360, 1, lightness * 0.5 + 0.25); // Lightness between 0.25 and 0.75
}

function checkCollisions(position) {
    const halfBoxSize = wallDistance - 50; // Adjust this value as needed
    if (position.x < -halfBoxSize) position.x = -halfBoxSize;
    if (position.x > halfBoxSize) position.x = halfBoxSize;
    if (position.z < -halfBoxSize) position.z = -halfBoxSize;
    if (position.z > halfBoxSize) position.z = halfBoxSize;
}


function animate() {
    requestAnimationFrame(animate);

    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    const moveDirection = new THREE.Vector3();

    if (moveForward) moveDirection.add(direction);
    if (moveBackward) moveDirection.add(direction.negate());
    if (moveLeft) moveDirection.add(new THREE.Vector3().crossVectors(camera.up, direction).normalize());
    if (moveRight) moveDirection.add(new THREE.Vector3().crossVectors(direction, camera.up).normalize());

    moveDirection.normalize();
    velocity.add(moveDirection.multiplyScalar(movementSpeed));

    // Rotate camera
    if (rotateLeft) camera.rotation.y -= rotationSpeed;
    if (rotateRight) camera.rotation.y += rotationSpeed;

    // Apply velocity and damping
    camera.position.add(velocity);
    checkCollisions(camera.position);
    velocity.multiplyScalar(0.9);

    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
}

document.getElementById('enterButton').addEventListener('click', function() {
    this.style.display = 'none';
    init();
});

async function music() {
    var audio = new Audio('caramelldansen.mp3');
    audio.play();
    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        audio.play();
    });
}

// Handle window resize
window.addEventListener('resize', onWindowResize, false);