import { Scene, PerspectiveCamera, WebGLRenderer, Color, Vector3,PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide, } from "three";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;
let cssRenderer: CSS3DRenderer;

let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let rotateLeft = false, rotateRight = false;

let velocity: Vector3 = new Vector3();
const audio = new Audio('https://assets.c48.uk/audio/caramelldansen.opus');
let floor: Mesh<PlaneGeometry, MeshBasicMaterial>;

const movementSpeed = 1;
const rotationSpeed = 0.02;
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const wallDistance = 0.4 * vw;

audio.load();

function addObject(namesd: string, p1: number, p2: number, p3: number, r1: number, r2: number, r3: number): void {
    const thing = document.getElementById(namesd);
    if (!thing) return;
    thing.style.display = 'block';
    const thingObject = new CSS3DObject(thing);
    thingObject.position.set(p1, p2, p3);
    thingObject.rotation.set(r1, r2, r3);
    scene.add(thingObject);
}

function init() {
    scene = new Scene();
    scene.background = new Color(0x201263);

    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    document.body.appendChild(cssRenderer.domElement);

    const floorGeometry = new PlaneGeometry(8000, 8000);
    const floorMaterial = new MeshBasicMaterial({ color: 0x808080, side: DoubleSide });
    floor = new Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -1;
    scene.add(floor);

    addObject('content2', 0, 0, -wallDistance, 0, 0, 0);
    addObject('content3', -wallDistance, 0, 0, 0, Math.PI / 2, 0);
    addObject('content1', wallDistance, 0, 0, 0, -Math.PI / 2, 0);
    addObject('content0', 0, 0, wallDistance, 0, Math.PI, 0);
    addObject('content4', 0, 0, -wallDistance-2000, 0, 0, 0);

    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    animate();
    setInterval(animfloor, 20);

    const msuic = localStorage.getItem("audio");
    if (msuic === "play" || msuic === null || msuic === undefined){
        music();
    }
}

function onWindowResize(): void {
    alert("if the resize was a zoom (ctrl+ and ctrl-) that can mess this up. Press OK to reload. Press cancel to also reload.");
    document.location.replace("index.html");
}

function onKeyDown(event: KeyboardEvent): void {
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

function onKeyUp(event: KeyboardEvent): void {
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

function animfloor(): void {
    if (!floor) return;
    const time = Date.now() * 0.0001; // Slower transition
    const hue = 210; // Fixed hue for blue
    const lightness = (Math.sin(time * Math.PI * 2) + 1) / 2; // Oscillates between 0 and 1
    floor.material.color.setHSL(hue / 360, 1, lightness * 0.5 + 0.25); // Lightness between 0.25 and 0.75
}

function checkCollisions(position: Vector3): void {
    const halfBoxSize = wallDistance - 50; // Adjust this value as needed
    if (position.x < -halfBoxSize) position.x = -halfBoxSize;
    if (position.x > halfBoxSize) position.x = halfBoxSize;
    if (position.z < -halfBoxSize) position.z = -halfBoxSize;
    if (position.z > halfBoxSize) position.z = halfBoxSize;
}

function animate(): void {
    requestAnimationFrame(animate);

    const direction = new Vector3();
    camera.getWorldDirection(direction);

    const moveDirection = new Vector3();

    if (moveForward) moveDirection.add(direction);
    if (moveBackward) moveDirection.add(direction.clone().negate());
    if (moveLeft) moveDirection.add(new Vector3().crossVectors(camera.up, direction).normalize());
    if (moveRight) moveDirection.add(new Vector3().crossVectors(direction, camera.up).normalize());

    moveDirection.normalize();
    velocity.add(moveDirection.multiplyScalar(movementSpeed));

    if (rotateLeft) camera.rotation.y -= rotationSpeed;
    if (rotateRight) camera.rotation.y += rotationSpeed;

    camera.position.add(velocity);
    checkCollisions(camera.position);
    velocity.multiplyScalar(0.9);

    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
}

const enterBtn = document.getElementById('enterButton');
enterBtn?.addEventListener('click', function() {
    (this as HTMLElement).style.display = 'none';
    init();
});

function handleAudioEnded(): void {
    audio.currentTime = 0;
    void audio.play();
}

function music(): void {
    const mbtn = document.getElementById("musicBtn");
    if (!mbtn) return;
    mbtn.innerHTML = "Pause Music";
    mbtn.onclick = pauseMusic;
    void audio.play();
    audio.addEventListener("ended", handleAudioEnded);
    localStorage.setItem("audio", "play");
}

function pauseMusic(): void {
    const mbtn = document.getElementById("musicBtn");
    if (!mbtn) return;
    mbtn.innerHTML = "Play Music";
    mbtn.onclick = music;
    audio.removeEventListener("ended", handleAudioEnded);
    audio.pause();
    localStorage.setItem("audio", "paused");
}

function dipSettin(): void {
    const settings = document.getElementById('settings');
    const explain = document.getElementById('explain');
    if (settings) settings.style.display = "block";
    if (explain) explain.style.display = "none";
}

function dopSettin(): void {
    const settings = document.getElementById('settings');
    const explain = document.getElementById('explain');
    if (settings) settings.style.display = "none";
    if (explain) explain.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    const dip = document.getElementById("dipSettin");
    const dop = document.getElementById("dopSettin");
    const musicBtn = document.getElementById("musicBtn");
    if (dip) dip.onclick = dipSettin;
    if (dop) dop.onclick = dopSettin;
    if (musicBtn) musicBtn.onclick = pauseMusic;
});

window.addEventListener('resize', onWindowResize, false);