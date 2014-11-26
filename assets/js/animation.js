var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,

    mouseX = 0,
    mouseY = 0,

    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,

    SEPARATION = 200,
    AMOUNTX = 10,
    AMOUNTY = 10,

    COLORS = [0x2ECC71, 0x3498DB, 0x8E44AD, 0xE74C3C, 0xD35400, 0x1ABC9C, 0x2C3E50, 0x7F8C8D],
    OPACITIES = [0.9, 0.5, 0.7, 0.6, 0.95],
    RADII = [100],
    SLOWDOWN_FACTOR = 1.5,

    camera, scene, renderer;

init();
animate();

function init() {

    var container, separation = 100,
        amountX = 50,
        amountY = 50,
        particles, particle;

    container = document.getElementById("canvas");
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    cameraAspect = containerWidth / containerHeight;

    camera = new THREE.PerspectiveCamera(25, cameraAspect, 1, 1000);
    camera.position.z = 180;

    scene = new THREE.Scene();

    renderer = new THREE.CanvasRenderer({ alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    container.appendChild(renderer.domElement);

    var PI2 = Math.PI * 2;

    for (var i = 0; i < 1000; i++) {
        var material = new THREE.SpriteCanvasMaterial({
            color: COLORS[Math.floor(Math.random()*COLORS.length)],
            program: function (context) {
                context.beginPath();
                context.arc(0, 0, 0.3, 0, PI2, true);
                context.fill();
            },
            //opacity: OPACITIES[Math.floor(Math.random()*OPACITIES.length)]
        });
        particle = new THREE.Sprite(material);
        particle.position.x = Math.random() * 2 - 1;
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = Math.random() * 2 - 1;
        particle.position.normalize();
        particle.position.multiplyScalar(Math.random() * 10 + RADII[Math.floor(Math.random()*RADII.length)]);
        particle.scale.multiplyScalar(2);
        scene.add(particle);
    }

    // lines

    for (var i = 0; i < 300; i++) {

        var geometry = new THREE.Geometry();

        var vertex = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
        vertex.normalize();
        vertex.multiplyScalar(RADII[Math.floor(Math.random()*RADII.length)]);

        geometry.vertices.push(vertex);

        var vertex2 = vertex.clone();
        vertex2.multiplyScalar(Math.random() * 0.1 + 1);

        geometry.vertices.push(vertex2);

        var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: 0x00000,
            color: COLORS[Math.floor(Math.random()*COLORS.length)],
            opacity: Math.random()
        }));
        scene.add(line);
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.getElementById("canvas").offsetWidth, document.getElementById("canvas").offsetHeight);


}

//

function onDocumentMouseMove(event) {

    mouseX = (event.clientX - windowHalfX)/SLOWDOWN_FACTOR;
    mouseY = (event.clientY - windowHalfY)/SLOWDOWN_FACTOR;
}

function onDocumentTouchStart(event) {

    if (event.touches.length > 1) {

        event.preventDefault();

        mouseX = (event.touches[0].pageX - windowHalfX)/SLOWDOWN_FACTOR;
        mouseY = (event.touches[0].pageY - windowHalfY)/SLOWDOWN_FACTOR;

    }

}

function onDocumentTouchMove(event) {

    if (event.touches.length == 1) {

        event.preventDefault();

        mouseX = (event.touches[0].pageX - windowHalfX)/SLOWDOWN_FACTOR;
        mouseY = (event.touches[0].pageY - windowHalfY)/SLOWDOWN_FACTOR;

    }

}

//

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    camera.position.x += (mouseX - camera.position.x) * .005;
    camera.position.y += (-mouseY + 200 - camera.position.y) * .005;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);

}
