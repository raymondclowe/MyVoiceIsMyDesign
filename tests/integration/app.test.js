import MyVoiceIsMyDesign from '../../src/main.js';
import VoiceInterface from '../../src/voice/voiceInterface.js';
import SceneManager from '../../src/threejs/sceneManager.js';
import AIProcessor from '../../src/ai/aiProcessor.js';

// Mock the modules
jest.mock('../../src/voice/voiceInterface.js');
jest.mock('../../src/threejs/sceneManager.js');
jest.mock('../../src/ai/aiProcessor.js');

describe('MyVoiceIsMyDesign Integration', () => {
  let app;
  let mockVoiceInterface;
  let mockSceneManager;
  let mockAIProcessor;
  
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Setup mock implementations
    mockVoiceInterface = {
      start: jest.fn(),
      onCommand: null
    };
    
    mockSceneManager = {
      createObject: jest.fn()
    };
    
    mockAIProcessor = {
      processCommand: jest.fn()
    };
    
    // Set up mock constructors
    VoiceInterface.mockImplementation(() => mockVoiceInterface);
    SceneManager.mockImplementation(() => mockSceneManager);
    AIProcessor.mockImplementation(() => mockAIProcessor);
    
    // Create app instance
    app = new MyVoiceIsMyDesign();
  });
  
  test('should initialize all components', () => {
    expect(VoiceInterface).toHaveBeenCalled();
    expect(SceneManager).toHaveBeenCalled();
    expect(AIProcessor).toHaveBeenCalled();
    expect(mockVoiceInterface.start).toHaveBeenCalled();
  });
  
  test('should process voice commands through the AI processor', () => {
    // Setup AI processor mock to return a valid command
    const mockCommand = {
      type: 'create',
      objectType: 'cube',
      options: {}
    };
    mockAIProcessor.processCommand.mockReturnValue(mockCommand);
    
    // Simulate a voice command
    mockVoiceInterface.onCommand('create a cube');
    
    // Verify the command was processed
    expect(mockAIProcessor.processCommand).toHaveBeenCalledWith('create a cube');
    expect(mockSceneManager.createObject).toHaveBeenCalledWith('cube', {});
  });
  
  test('should handle unrecognized commands', () => {
    // Setup AI processor mock to return null (unrecognized command)
    mockAIProcessor.processCommand.mockReturnValue(null);
    
    // Simulate a voice command
    mockVoiceInterface.onCommand('unknown command');
    
    // Verify the command was processed but no object was created
    expect(mockAIProcessor.processCommand).toHaveBeenCalledWith('unknown command');
    expect(mockSceneManager.createObject).not.toHaveBeenCalled();
  });
  
  test('should handle different object types', () => {
    // Test cube creation
    mockAIProcessor.processCommand.mockReturnValue({
      type: 'create',
      objectType: 'cube',
      options: {}
    });
    mockVoiceInterface.onCommand('create a cube');
    expect(mockSceneManager.createObject).toHaveBeenCalledWith('cube', {});
    
    // Reset mock
    jest.clearAllMocks();
    
    // Test sphere creation
    mockAIProcessor.processCommand.mockReturnValue({
      type: 'create',
      objectType: 'sphere',
      options: {}
    });
    mockVoiceInterface.onCommand('create a sphere');
    expect(mockSceneManager.createObject).toHaveBeenCalledWith('sphere', {});
    
    // Reset mock
    jest.clearAllMocks();
    
    // Test cylinder creation
    mockAIProcessor.processCommand.mockReturnValue({
      type: 'create',
      objectType: 'cylinder',
      options: {}
    });
    mockVoiceInterface.onCommand('create a cylinder');
    expect(mockSceneManager.createObject).toHaveBeenCalledWith('cylinder', {});
  });
  
  test('should pass options to scene manager', () => {
    // Setup AI processor mock to return a command with options
    const options = {
      color: 0xff0000,
      wireframe: true
    };
    
    mockAIProcessor.processCommand.mockReturnValue({
      type: 'create',
      objectType: 'cube',
      options
    });
    
    // Simulate a voice command
    mockVoiceInterface.onCommand('create a red cube');
    
    // Verify the options were passed to the scene manager
    expect(mockSceneManager.createObject).toHaveBeenCalledWith('cube', options);
  });
});
