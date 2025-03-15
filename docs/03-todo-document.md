# To-Do Document

## Purpose
This document outlines the prioritized tasks and features for the MyVoiceIsMyDesign application, focusing on what needs to be implemented for the initial prototype and subsequent phases.

## Phase 1: Core Functionality (Must-Have)

### User Interface Setup
- [ ] Create basic two-panel layout (left: interaction, right: 3D preview)
- [ ] Implement responsive design for various screen sizes
- [ ] Set up initial cube rendering using three.js
- [ ] Create loading/processing indicators

### Voice Input Implementation
- [ ] Integrate Web Speech API for voice-to-text conversion
- [ ] Add microphone button with active/inactive states
- [ ] Implement text display of recognized speech
- [ ] Create fallback text input for environments without microphone access

### AI Integration
- [ ] Create configuration page for API key input
- [ ] Implement local storage for API keys
- [ ] Set up API connection to chosen common AI providers (OpenAI, Open Router, or Google AI), and then the models that they provide should be offered. The app will recommend the best ones but warn about costs. Links to create accounts and pointers to common models to get started. Defaults should be reasonable and workable.
- [ ] Develop prompt engineering for 3D model generation by leveraging the ability of current AI language models LLM chatbots to create 3D scenes using javascript `three.js`
- [ ] Create error handling for API failures that clearly shows the problem, such particularly out of quota or credit or geoblocks.

### 3D Modeling Core
- [ ] Implement basic three.js scene setup
- [ ] Create model generation from AI text descriptions
- [ ] Develop camera controls for model viewing (rotate, zoom)
- [ ] Implement basic lighting setup for model visibility

### Interaction
- [ ] Add voice output for AI responses using standard web speech. e.g. "Got it working on that now". "Would you like that round or square?", "The model is ready, is this ok?"
- [ ] Wait for user to respond in text or speech for another round of modification. "Is that ok?", "Make it taller". "Is that ok?", "Add another hold to the base plate", "What size hole and where?", "Near the left edge, a 5mm hole", "Got it, I'm adding a 5mm hole near the left edge, I'm making it 10mm away from the edge to avoid the danger of the edge becoming weak, is that ok?", "No, keep the 5mm hole within 3mm of the edge", "Got that, adding the 5mm hole within 3mm of the edge now, working on that."

### Export Functionality
- [ ] Integrate STL export capability
- [ ] Add download functionality for exported models. HTML/JS/three.js export capability to download single web pages that will work offline
- [ ] Implement basic printability checks, particularly for overhangs that might require excessive supports in addative low cost home 3d printing with plastic fillament.
- [ ] Create export settings recommendations

## Phase 2: Enhancements (Nice-to-Have)

### Improved User Interaction
- [ ] Implement history of user interactions
- [ ] Create undo/redo functionality, both buttons and voice commands "No that's no good, revert to the previous version".


### Advanced Modeling Features
- [ ] Implement basic parameter adjustments (size, color, etc.)
- [ ] Add primitive shape selection (cube, sphere, cylinder, etc.)
- [ ] Create simple boolean operations (union, subtract, intersect)
- [ ] Implement basic texturing capabilities
- [ ] Combine mouse and voice. User clicks on an object in the viewport, it becomes highlighted, "make this one thinner".

### Enhanced Printability Analysis
- [ ] Add detailed printability checks (overhangs, thin walls, etc.)
- [ ] Implement automatic repair suggestions
- [ ] Create visual indicators for potential print issues
- [ ] Add print settings recommendations based on model complexity

### User Experience Improvements
- [ ] Implement onboarding tutorial
- [ ] Add example prompts for new users
- [ ] Create model templates for common objects
- [ ] Implement model saving/loading from local storage

## Phase 3: Future Vision (Post-MVP)

### Community Features
- [ ] Create optional model sharing functionality
- [ ] Implement gallery of user-created models
- [ ] Add ability to fork and modify shared models
- [ ] Create community voting/feedback system

### Advanced AI Integration
- [ ] Implement more sophisticated model generation
- [ ] Add style transfer capabilities
- [ ] Create AI-assisted model optimization
- [ ] Implement natural language editing of specific model parts

### Professional Features
- [ ] Add measurement tools
- [ ] Implement advanced material properties
- [ ] Create slicing preview
- [ ] Add support for multiple objects/assemblies

## Technical Considerations

### Performance Optimization
- [ ] Implement progressive model loading
- [ ] Optimize three.js rendering for mobile devices
- [ ] Create efficient AI prompt handling
- [ ] Implement caching for frequently used operations

### Testing Requirements
- [ ] Create test suite for core functionality
- [ ] Implement browser compatibility testing
- [ ] Develop performance benchmarks
- [ ] Create user testing protocol for feedback collection
