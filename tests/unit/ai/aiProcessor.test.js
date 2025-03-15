import AIProcessor from '../../../src/ai/aiProcessor.js';

describe('AIProcessor', () => {
  let aiProcessor;
  
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Create a new instance for each test
    aiProcessor = new AIProcessor();
  });
  
  test('should initialize with basic commands', () => {
    expect(aiProcessor.commandMap).toBeDefined();
    expect(aiProcessor.commandMap.size).toBeGreaterThan(0);
  });
  
  test('should recognize cube creation commands', () => {
    const commands = [
      'create cube',
      'add cube',
      'make cube',
      'I want to create a cube',
      'please add a cube',
      'can you make a cube for me'
    ];
    
    commands.forEach(command => {
      const result = aiProcessor.processCommand(command);
      expect(result).toEqual({
        type: 'create',
        objectType: 'cube',
        options: {}
      });
    });
  });
  
  test('should recognize sphere creation commands', () => {
    const commands = [
      'create sphere',
      'add sphere',
      'make sphere',
      'I want to create a sphere',
      'please add a sphere',
      'can you make a sphere for me'
    ];
    
    commands.forEach(command => {
      const result = aiProcessor.processCommand(command);
      expect(result).toEqual({
        type: 'create',
        objectType: 'sphere',
        options: {}
      });
    });
  });
  
  test('should recognize cylinder creation commands', () => {
    const commands = [
      'create cylinder',
      'add cylinder',
      'make cylinder',
      'I want to create a cylinder',
      'please add a cylinder',
      'can you make a cylinder for me'
    ];
    
    commands.forEach(command => {
      const result = aiProcessor.processCommand(command);
      expect(result).toEqual({
        type: 'create',
        objectType: 'cylinder',
        options: {}
      });
    });
  });
  
  test('should return null for unrecognized commands', () => {
    const commands = [
      'hello',
      'what time is it',
      'create pyramid',
      'delete everything'
    ];
    
    commands.forEach(command => {
      const result = aiProcessor.processCommand(command);
      expect(result).toBeNull();
    });
  });
  
  test('should handle case insensitivity', () => {
    const commands = [
      'CREATE CUBE',
      'Add Sphere',
      'make CYLINDER'
    ];
    
    const expectedTypes = ['cube', 'sphere', 'cylinder'];
    
    commands.forEach((command, index) => {
      const result = aiProcessor.processCommand(command);
      expect(result.objectType).toBe(expectedTypes[index]);
    });
  });
});
