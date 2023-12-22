// Initialize scene, camera, renderer, controls, and loader
let scene, camera, renderer, controls, loader;
let model; // Added to access the model in the animate function

function init() {
    const modelContainer = document.getElementById('about-model');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Changed background color to white

    const fov = 45;
    const aspect = modelContainer.clientWidth / modelContainer.clientHeight;
    camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
    camera.position.set(0, 0, 160);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
    modelContainer.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.target.set(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    loader = new THREE.GLTFLoader();
    loader.load('./main-assets/3D-earth/earth.gltf', function (gltf) {
        model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
        model.rotation.y = Math.PI / 8; // Set initial rotation

        scene.add(model);
        animate(); // Call animate after the model is loaded and added to the scene
    }, undefined, function (error) {
        console.error(error);
    });

    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);

    if (model) {
        model.rotation.y += 0.005; // Auto-rotate effect
        const time = Date.now() * 0.001;
        model.position.y = Math.sin(time) * 2; // Floating effect
    }

    controls.update();
    renderer.render(scene, camera);
}

function onWindowResize() {
    const modelContainer = document.getElementById('about-model');
    camera.aspect = modelContainer.clientWidth / modelContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
}

init();
