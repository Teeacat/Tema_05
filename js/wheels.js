document.querySelector ("html").addEventListener("click", function () {
    alert("Help me");
});

const myheading=document.querySelector ("h1");
myheading.textContent="This is my header in JS";

const pElement=document.querySelector ("p");
pElement.textContent="This is also written in javascript with no purpose what so ever. But its ok, because im learning."




//const scene = new THREE.scene();
//const renderer = new THREE.WebGLRenderer ();
//const camera = new THREE.perspectiveCamera ( 75, innerwidth / window.innerHeight, 0.1, 1000)

//const geometry = new THREE.CylinderGeometry (5,5,20,32)
//const material = new THREE.MeshBasicMaterial({color:0x619C87, wireframe:true})
//const cylinder = new THREE.Mesh (geometry, material)

//scene.add (cylinder)
//camera.position.z=20

//renderer.setSize(window.innerWidth, window,innerHeight)
//document.body.appendChild (renderer.DOMelement)

//function animate (){
//    cylinder.rotation.x += 0.01
//    cylinder.rotation.y +=0.01
//renderer.render (scene, camera)
//requestAnimationFrame (animate)
//}
//animate ()
