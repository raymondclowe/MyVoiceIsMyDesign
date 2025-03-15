// Voice Interface Module
class VoiceInterface {
  constructor() {
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
    this.commandQueue = [];
  }

  start() {
    this.recognition.start();
    this.recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      this.processCommand(transcript);
    };
  }

  processCommand(command) {
    // Basic command parsing
    const normalized = command.toLowerCase().trim();
    this.commandQueue.push(normalized);
    this.executeNextCommand();
  }

  executeNextCommand() {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      // TODO: Implement command execution
      console.log('Executing command:', command);
    }
  }
}

export default VoiceInterface;
