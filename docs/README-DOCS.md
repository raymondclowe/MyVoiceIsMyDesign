# MyVoiceIsMyDesign Documentation

This directory contains the complete documentation for the MyVoiceIsMyDesign project, a web-based 3D editor for novice 3D printer enthusiasts. The application uses three.js for rendering, AI assistance for model creation, and voice input/output for natural interaction.

## Documentation Overview

| Document | Purpose |
|----------|---------|
| [01-project-vision.md](01-project-vision.md) | High-level overview of the project's goals and intended outcome |
| [02-text-and-tone.md](02-text-and-tone.md) | Defines the voice, tone, and language style for the application |
| [03-todo-document.md](03-todo-document.md) | Prioritized list of tasks and features for the initial prototype and subsequent phases |
| [04-prototype-scope.md](04-prototype-scope.md) | Defines the boundaries and specific requirements for the initial prototype |
| [05-design-mockups.md](05-design-mockups.md) | Visual representations and descriptions of the key screens and UI elements |
| [06-workflow-document.md](06-workflow-document.md) | Outlines the development process and how the documents will be used |

## Project Status

The project is currently in the brainstorming and planning phase. These documents represent the initial vision and plan for the MyVoiceIsMyDesign application. The next step is to begin development of a proof-of-concept prototype that implements the core workflow.

## Key Features

- **Voice Input**: Users can describe what they want to create using natural language
- **AI Assistance**: AI interprets user descriptions and generates 3D models
- **Three.js Rendering**: Real-time 3D preview of models
- **Printability Analysis**: Feedback on whether models will print successfully
- **STL Export**: Export models for 3D printing

## Technology Approach

- **Frontend Only**: Pure HTML/JavaScript implementation without backend dependencies
- **Local Processing**: All 3D modeling happens in the user's browser
- **API Integration**: Connects to standard AI language models (OpenAI, Open Router, Google AI)
- **User-Provided Keys**: Users bring their own API keys for AI services
- **Local Storage**: Models and settings stored in browser local storage, with export/backup and import/restore functions to and from json, js and stl as appropriate

## Next Steps

1. Review and finalize these documentation files
2. Set up the initial project structure
3. Implement a basic proof-of-concept that demonstrates the core workflow
4. Gather feedback and iterate on the design
