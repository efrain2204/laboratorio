console.log("cuatro");
var scene, renderer, camera;
var controls;
var cub1;

var gcontrols;
var celeste = 0, rosa = 0, rojo = 0;
var boxMaterial;


init();
animate();

function crear_cubos(x, y, z, color) {
	var boxGeometry = new THREE.BoxGeometry(x, y, z);
	boxMaterial = new THREE.MeshLambertMaterial({ color: color, wireframe: false });
	object = new THREE.Mesh(boxGeometry, boxMaterial);
	return object;
}
function crear_cilindro(x, y, z, r, color) {
	const geometry = new THREE.CylinderGeometry(x, y, z, r);
	const material = new THREE.MeshBasicMaterial({ color: color });
	const cylinder = new THREE.Mesh(geometry, material);
	return cylinder;
}
function crear_esfera(r, x, y, color) {
	const geometry = new THREE.SphereGeometry(r, x, y);
	const material = new THREE.MeshBasicMaterial({ color: color });
	const sphere = new THREE.Mesh(geometry, material);
	return sphere;
}
function get_value_controls(name) {
	return document.getElementById(name).value;
}


function init() {
	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(width, height);
	renderer.setClearColor(0xb5abaa);

	// Build the container
	document.getElementById('main').appendChild(renderer.domElement);
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
	camera.position.y = 160;
	camera.position.z = 400;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	// Creando objetos
	cub1 = crear_cubos(100, 100, 100, 0xeee);
	cub1.position.set(-100, 50, 0);
  scene.add(cub1);
  
	cub1 = crear_cubos(100, 100, 100, 0xeee);
	cub1.position.set(100, 50, 0);
  scene.add(cub1);
  
  cub1 = crear_cubos(100, 100, 10, 0xeee);
  cub1.position.set(0, 50, 45);
  cub1.material.transparent = true;
  cub1.material.opacity = 0.5; 
  scene.add(cub1);
  
  cub1 = crear_cubos(100, 100, 10, 0xeee);
  cub1.position.set(0, 50, -45);
  cub1.material.transparent = true;
  cub1.material.opacity = 0.5; 
	scene.add(cub1);


	//Agregar cuadricula base
	var gridXZ = new THREE.GridHelper(200, 40);
	gridXZ.setColors(new THREE.Color(), new THREE.Color(0xffffff));
	scene.add(gridXZ);

	//Luz
	var luz = new THREE.PointLight(0xffffff);
	luz.position.set(0, 300, 200);
	scene.add(luz);

	var ambientLight = new THREE.AmbientLight(0x111111);
	scene.add(ambientLight);

	// gcontrols = new function () {
	// 	this.celeste = 0.01;
	// 	this.rosa = 0.01;
	// 	this.rojo = 0.01;
	// 	this.wireshow = false;
	// }

	// var gui = new dat.GUI();
	// gui.add(gcontrols, 'celeste', -1.5, 1.5);
	// gui.add(gcontrols, 'rosa', -1.5, 1.5);
	// gui.add(gcontrols, 'rojo', -1.5, 1.5);

	window.addEventListener('resize', onWindowResize, false);

}


function animate() {
	requestAnimationFrame(animate);
	update();
	render();
}

function update() {
	controls.update();

	// //Controsl update
	// celeste = get_value_controls("obj1");
	// document.getElementById("text_obj1").innerHTML = celeste;

	// rosa = get_value_controls("obj2");
	// document.getElementById("text_obj2").innerHTML = rosa;

	// rojo = get_value_controls("obj3");
	// document.getElementById("text_obj3").innerHTML = rojo;
	// celeste = gcontrols.celeste;
	// rosa = gcontrols.rosa;
	// rojo = gcontrols.rojo;
}

function onWindowResize() {
	var width = window.innerWidth, height = window.innerHeight;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height);
}


function render() {
	// cy.position.set(-100, 50, 0);
	// esfera.position.set(0,15,0);

	// arm.rotation.y = celeste;
	// arm.position.set(30 * Math.cos(celeste), 30, -30 * Math.sin(celeste));

	// arm2.rotation.y = rosa;
	// arm2.position.set(30 + 30 * Math.cos(rosa), 0, -35 * Math.sin(rosa));


	// arm3.rotation.z = rojo;
	// arm3.position.set(30 + 30 * Math.cos(rojo), 30 * Math.sin(rojo), 0);
	// movement - please calibrate these values
	var xSpeed = 0.07;
	var ySpeed = 0.07;

	document.addEventListener("keydown", onDocumentKeyDown, false);
	function onDocumentKeyDown(event) {
		var keyCode = event.which;

		if (keyCode == 87) {
			cub1.position.z -= ySpeed;
		} else if (keyCode == 83) {
			cub1.position.z += ySpeed;
		} else if (keyCode == 65) {
			cub1.position.x -= xSpeed;
		} else if (keyCode == 68) {
			cub1.position.x += xSpeed;
		} else if (keyCode == 32) {
			cub1.position.set(0, 0, 0);
		}
	};


	//Coordenadas
	const axesHelper = new THREE.AxisHelper(100);
	scene.add(axesHelper);

	renderer.render(scene, camera);
}