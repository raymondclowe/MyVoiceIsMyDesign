// AI Processing Module
class AIProcessor {
  constructor() {
    this.commandMap = new Map();
    this.initBasicCommands();
  }

  initBasicCommands() {
    // Basic shape commands
    this.commandMap.set('create cube', { type: 'cube' });
    this.commandMap.set('add cube', { type: 'cube' });
    this.commandMap.set('make cube', { type: 'cube' });
    
    this.commandMap.set('create sphere', { type: 'sphere' });
    this.commandMap.set('add sphere', { type: 'sphere' });
    this.commandMap.set('make sphere', { type: 'sphere' });

    this.commandMap.set('create cylinder', { type: 'cylinder' });
    this.commandMap.set('add cylinder', { type: 'cylinder' });
    this.commandMap.set('make cylinder', { type: 'cylinder' });
  }

  processCommand(command) {
    // Find matching command
    for (const [key, value] of this.commandMap.entries()) {
      if (command.includes(key)) {
        return {
          type: 'create',
          objectType: value.type,
          options: {}
        };
      }
    }

    return null;
  }
}

export default AIProcessor;
