// Three.js Scene Manager
import * as THREE from 'three';

class SceneManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.objects = new Map();
    
    this.init();
  }

  init() {
    // Setup renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // Setup camera
    this.camera.position.z = 5;

    // Add basic lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);

    // Start render loop
    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  createObject(type, options = {}) {
    let geometry, material;
    
    switch(type.toLowerCase()) {
      case 'cube':
        geometry = new THREE.BoxGeometry(1, 1, 1);
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(0.5, 32, 32);
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
        break;
      default:
        throw new Error(`Unknown object type: ${type}`);
    }

    material = new THREE.MeshPhongMaterial({
      color: options.color || 0x00ff00,
      wireframe: options.wireframe || false
    });

    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
    this.objects.set(mesh.uuid, mesh);
    return mesh;
  }
}

export default SceneManager;
