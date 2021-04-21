console.log("dos");
var scene, renderer, camera;
var controls;
var base1,base,pinza1,pinza2,arm, arm2, arm3, cy, esfera,speed_base;

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
function crear_esfera(r,x,y,color) {
	const geometry = new THREE.SphereGeometry(r, x, y);
	const material = new THREE.MeshBasicMaterial({ color:color });
	const sphere = new THREE.Mesh(geometry, material);
	return sphere;
}
function get_value_controls(name) {
	return document.getElementById(name).value;
}



function init() {

	speed_base=0.0;
	
	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(width, height);
	renderer.setClearColor(0xb5abaa);

	// Build the container
	document.getElementById('main').appendChild(renderer.domElement);
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
	camera.position.y = 260;
	camera.position.z = 400;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	// Creando objetos
	cy = crear_cilindro(30, 30, 30, 32, 0x000);
	cy.position.set(0, 15, 0);
	scene.add(cy);

	base1 = crear_cubos(30, 120, 30, 0x00ffff);
	base1.position.set(0,40, 0);
	cy.add(base1);

	arm = crear_cubos(60, 10, 10, 0x00ffff);
	base1.add(arm);

	arm2 = crear_cubos(60, 10, 10, 0xfa46d0);
	arm.add(arm2);

	// pinzas
	base = crear_cubos(5,10, 25, 0xe3e3e3);
	base.position.set(32.5,0,0)
	arm2.add(base);

	pinza1 = crear_cubos(13, 6, 2, 0xfff333);
	// pinza1.position.set(10,0,10)
	base.add(pinza1);

	pinza2 = crear_cubos(13, 6, 2, 0xfff333);
	// pinza2.position.set(10,0,-10)
	base.add(pinza2);




	//Agregar cuadricula base
	var gridXZ = new THREE.GridHelper(200, 40);
	gridXZ.setColors(new THREE.Color(0xff0000), new THREE.Color(0xffffff));
	scene.add(gridXZ);

	//Luz
	var luz = new THREE.PointLight(0xffffff);
	luz.position.set(0, 300, 200);
	scene.add(luz);

	var ambientLight = new THREE.AmbientLight(0x111111);
	scene.add(ambientLight);
	window.addEventListener('resize', onWindowResize, false);

}

master_speed=0.01;
base = document.getElementById("girar_base");
base.addEventListener("change",function(){
  if (this.checked) {
    speed_base=master_speed;
  } else {
    speed_base=0.0;
  }
});


function animate() {
	requestAnimationFrame(animate);
	update();
	render();
}

function update() {
	controls.update();

	//Controsl update
	celeste = get_value_controls("obj1");
	document.getElementById("text_obj1").innerHTML = celeste;

	rosa = get_value_controls("obj2");
	document.getElementById("text_obj2").innerHTML = rosa;

}

function onWindowResize() {
	var width = window.innerWidth, height = window.innerHeight;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height);
}

var pinza_push = 0.01;
var bool_pinza=false;
function render() {

	cy.rotation.y+=speed_base;

	arm.rotation.z = celeste;
	arm.position.set(10+30 * Math.cos(celeste), 55+30* Math.sin(celeste), 0);

	arm2.rotation.z = rosa;
	arm2.position.set(30 + 30 * Math.cos(rosa), 30* Math.sin(rosa), 0);

	document.addEventListener("keyup", onDocumentKeyDown, false);
	function onDocumentKeyDown(event) {
		var keyCode = event.which;

		if (keyCode == 32) {
			if(bool_pinza==true){
				pinza_push=-8;
				bool_pinza=false
			}else{
				pinza_push=3;
				bool_pinza=true
			}
			
		}
	};

	pinza1.position.set(9,0,10+pinza_push)
	pinza2.position.set(9,0,-10-pinza_push)


	//Coordenadas
	const axesHelper = new THREE.AxisHelper(100);
	scene.add(axesHelper);

	renderer.render(scene, camera);
}


