console.log("uno");
var scene, renderer, camera;
var controls;
var placa, speed_x, speed_y, speed_z, op1, op2, op3,master_speed=0.0;

var gcontrols;
var boxMaterial;


init();
animate();

function crear_cubos(x, y, z, img) {
  var boxGeometry = new THREE.BoxGeometry(x, y, z);
  boxMaterial = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture(img), transparent: true });
  console.log(img);
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
  speed_x=0.0;
  speed_y=0.0;
  speed_z=0.0;

  var width = window.innerWidth;
  var height = window.innerHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xb5abaa);

  // Build the container
  document.getElementById('main').appendChild(renderer.domElement);
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
  camera.position.y = 460;
  camera.position.z = 500;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Creando objetos
  placa = crear_cubos(500, 1, 280, 'assest/img/front.png');
  placa.position.set(0, 0, 0);
  scene.add(placa);

  //Luz
  var luz = new THREE.PointLight(0xffffff);
  luz.position.set(0, 300, 200);
  scene.add(luz);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);


  window.addEventListener('resize', onWindowResize, false);

}
master_speed=0.01;
op1 = document.getElementById("girar_z");
op1.addEventListener("change",function(){
  if (this.checked) {
    speed_z=master_speed;
  } else {
    speed_z=0.0;
  }
});

op2 = document.getElementById("girar_y");
op2.addEventListener("change",function(){
  if (this.checked) {
    speed_y=master_speed;
  } else {
    speed_y=0.0;
  }
});

op3 = document.getElementById("girar_x");
op3.addEventListener("change",function(){
  if (this.checked) {
    speed_x=master_speed;
  } else {
    speed_x=0.0;
  }
});

function animate() {
  requestAnimationFrame(animate);
  update();
  render();
}

function update() {
  controls.update();
  
}

function onWindowResize() {
  var width = window.innerWidth, height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}


function render() {

  placa.rotation.z+=speed_z;


  placa.rotation.y+=speed_y;


  placa.rotation.x+=speed_x;


  //Coordenadas
  const axesHelper = new THREE.AxisHelper(100);
  scene.add(axesHelper);

  renderer.render(scene, camera);
}


