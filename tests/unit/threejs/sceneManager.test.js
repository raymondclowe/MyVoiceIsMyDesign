import SceneManager from '../../../src/threejs/sceneManager.js';
import * as THREE from 'three';

describe('SceneManager', () => {
  let sceneManager;
  
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Mock document.body.appendChild
    document.body.appendChild = jest.fn();
    
    // Mock requestAnimationFrame
    global.requestAnimationFrame = jest.fn(cb => cb());
    
    // Create a new instance for each test
    sceneManager = new SceneManager();
  });
  
  test('should initialize with correct properties', () => {
    expect(sceneManager.scene).toBeDefined();
    expect(sceneManager.camera).toBeDefined();
    expect(sceneManager.renderer).toBeDefined();
    expect(sceneManager.objects).toBeInstanceOf(Map);
  });
  
  test('should set up renderer and append to DOM', () => {
    expect(sceneManager.renderer.setSize).toHaveBeenCalledWith(
      window.innerWidth, 
      window.innerHeight
    );
    expect(document.body.appendChild).toHaveBeenCalledWith(
      sceneManager.renderer.domElement
    );
  });
  
  test('should set up camera position', () => {
    expect(sceneManager.camera.position.z).toBe(5);
  });
  
  test('should add lights to the scene', () => {
    expect(THREE.AmbientLight).toHaveBeenCalled();
    expect(THREE.DirectionalLight).toHaveBeenCalled();
    expect(sceneManager.scene.add).toHaveBeenCalledTimes(2);
  });
  
  test('should start animation loop', () => {
    expect(global.requestAnimationFrame).toHaveBeenCalled();
    expect(sceneManager.renderer.render).toHaveBeenCalledWith(
      sceneManager.scene, 
      sceneManager.camera
    );
  });
  
  test('should create a cube object', () => {
    const cube = sceneManager.createObject('cube');
    
    expect(THREE.BoxGeometry).toHaveBeenCalled();
    expect(THREE.MeshPhongMaterial).toHaveBeenCalled();
    expect(THREE.Mesh).toHaveBeenCalled();
    expect(sceneManager.scene.add).toHaveBeenCalledWith(cube);
    expect(sceneManager.objects.has(cube.uuid)).toBeTruthy();
  });
  
  test('should create a sphere object', () => {
    const sphere = sceneManager.createObject('sphere');
    
    expect(THREE.SphereGeometry).toHaveBeenCalled();
    expect(THREE.MeshPhongMaterial).toHaveBeenCalled();
    expect(THREE.Mesh).toHaveBeenCalled();
    expect(sceneManager.scene.add).toHaveBeenCalledWith(sphere);
    expect(sceneManager.objects.has(sphere.uuid)).toBeTruthy();
  });
  
  test('should create a cylinder object', () => {
    const cylinder = sceneManager.createObject('cylinder');
    
    expect(THREE.CylinderGeometry).toHaveBeenCalled();
    expect(THREE.MeshPhongMaterial).toHaveBeenCalled();
    expect(THREE.Mesh).toHaveBeenCalled();
    expect(sceneManager.scene.add).toHaveBeenCalledWith(cylinder);
    expect(sceneManager.objects.has(cylinder.uuid)).toBeTruthy();
  });
  
  test('should throw error for unknown object type', () => {
    expect(() => {
      sceneManager.createObject('unknown');
    }).toThrow('Unknown object type: unknown');
  });
  
  test('should apply custom options to created objects', () => {
    const options = {
      color: 0xff0000,
      wireframe: true
    };
    
    sceneManager.createObject('cube', options);
    
    expect(THREE.MeshPhongMaterial).toHaveBeenCalledWith({
      color: 0xff0000,
      wireframe: true
    });
  });
});
