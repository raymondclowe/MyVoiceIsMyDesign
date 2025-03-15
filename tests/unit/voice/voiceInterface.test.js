import VoiceInterface from '../../../src/voice/voiceInterface.js';

describe('VoiceInterface', () => {
  let voiceInterface;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Create a new instance for each test
    voiceInterface = new VoiceInterface();
  });

  test('should initialize with correct properties', () => {
    expect(voiceInterface.recognition).toBeDefined();
    expect(voiceInterface.commandQueue).toEqual([]);
  });

  test('should start speech recognition when start is called', () => {
    voiceInterface.start();
    expect(voiceInterface.recognition.start).toHaveBeenCalled();
  });

  test('should process commands and add them to the queue', () => {
    const command = 'create a cube';
    voiceInterface.processCommand(command);
    expect(voiceInterface.commandQueue).toContain('create a cube');
  });

  test('should normalize commands to lowercase', () => {
    const command = 'CREATE A CUBE';
    voiceInterface.processCommand(command);
    expect(voiceInterface.commandQueue).toContain('create a cube');
  });

  test('should execute commands from the queue', () => {
    // Mock console.log to verify execution
    const consoleSpy = jest.spyOn(console, 'log');
    
    voiceInterface.processCommand('create a cube');
    expect(consoleSpy).toHaveBeenCalledWith('Executing command:', 'create a cube');
    expect(voiceInterface.commandQueue).toHaveLength(0);
    
    consoleSpy.mockRestore();
  });

  test('should handle speech recognition results', () => {
    // Mock the processCommand method
    const processCommandSpy = jest.spyOn(voiceInterface, 'processCommand');
    
    // Start recognition
    voiceInterface.start();
    
    // Simulate a speech recognition result
    const mockEvent = {
      results: [
        [{ transcript: 'create a cube' }]
      ]
    };
    
    // Manually trigger the onresult callback
    voiceInterface.recognition.onresult(mockEvent);
    
    expect(processCommandSpy).toHaveBeenCalledWith('create a cube');
    
    processCommandSpy.mockRestore();
  });
});
