// Mock the Web Speech API
global.SpeechRecognition = jest.fn().mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

global.webkitSpeechRecognition = global.SpeechRecognition;

// Mock the Three.js library
jest.mock('three', () => {
  return {
    Scene: jest.fn().mockImplementation(() => ({
      add: jest.fn(),
      remove: jest.fn(),
    })),
    PerspectiveCamera: jest.fn(),
    WebGLRenderer: jest.fn().mockImplementation(() => ({
      setSize: jest.fn(),
      render: jest.fn(),
      domElement: document.createElement('canvas'),
    })),
    BoxGeometry: jest.fn(),
    SphereGeometry: jest.fn(),
    CylinderGeometry: jest.fn(),
    MeshStandardMaterial: jest.fn(),
    Mesh: jest.fn().mockImplementation(() => ({
      position: { set: jest.fn() },
      rotation: { set: jest.fn() },
      scale: { set: jest.fn() },
    })),
    AmbientLight: jest.fn(),
    DirectionalLight: jest.fn(),
    Vector3: jest.fn(),
  };
});

// Setup DOM elements that might be needed
document.body.innerHTML = `
  <div id="scene-container"></div>
  <button id="start-voice">Start Voice Recognition</button>
  <button id="stop-voice">Stop Voice Recognition</button>
  <div id="voice-feedback"></div>
`;
