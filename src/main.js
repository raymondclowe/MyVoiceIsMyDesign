// Main Application Entry Point
import VoiceInterface from './voice/voiceInterface.js';
import SceneManager from './threejs/sceneManager.js';
import AIProcessor from './ai/aiProcessor.js';

class MyVoiceIsMyDesign {
  constructor() {
    this.voiceInterface = new VoiceInterface();
    this.sceneManager = new SceneManager();
    this.aiProcessor = new AIProcessor();
    
    this.init();
  }

  init() {
    // Setup voice interface
    this.voiceInterface.start();
    
    // Bind command execution
    this.voiceInterface.onCommand = (command) => {
      const processed = this.aiProcessor.processCommand(command);
      if (processed) {
        this.executeCommand(processed);
      }
    };
  }

  executeCommand(command) {
    switch(command.type) {
      case 'create':
        this.sceneManager.createObject(
          command.objectType,
          command.options
        );
        break;
      default:
        console.warn('Unknown command type:', command.type);
    }
  }
}

// Initialize application
const app = new MyVoiceIsMyDesign();
