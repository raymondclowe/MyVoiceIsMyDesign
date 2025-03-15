# Design Mockups

## Purpose
This document provides visual representations and descriptions of the key screens and UI elements for the MyVoiceIsMyDesign application. While actual visual mockups would typically be included as image files, this document describes the layout and design in text format that can be used by designers to create the actual visual assets.

## Overall Layout

```
+-------------------------------------------------------+
|  LOGO/TITLE                             CONFIG BUTTON |
+-------------------------------------------------------+
|                         |                             |
|                         |                             |
|  INTERACTION PANEL      |      3D PREVIEW PANEL       |
|  (Voice Input,          |      (Three.js Rendering)   |
|   Text Display,         |                             |
|   Controls)             |                             |
|                         |                             |
|                         |                             |
|                         |                             |
|                         |                             |
+-------------------------------------------------------+
|  STATUS MESSAGES                      EXPORT BUTTON   |
+-------------------------------------------------------+
```

## Color Palette

- **Primary Color**: #3498db (Bright Blue) - Used for primary buttons, highlights
- **Secondary Color**: #2ecc71 (Emerald Green) - Used for success indicators, confirmation
- **Accent Color**: #e74c3c (Alizarin Red) - Used for warnings, important notices
- **Background Color**: #f5f5f5 (Light Gray) - Main application background
- **Panel Background**: #ffffff (White) - Panel backgrounds
- **Text Color**: #333333 (Dark Gray) - Primary text
- **Secondary Text**: #7f8c8d (Medium Gray) - Secondary text, labels

## Typography

- **Primary Font**: 'Roboto', sans-serif - Clean, modern sans-serif font
- **Heading Sizes**:
  - H1 (Application Title): 24px
  - H2 (Panel Titles): 18px
  - H3 (Section Headers): 16px
- **Body Text**: 14px
- **Button Text**: 14px, Bold
- **Status Messages**: 12px

## Key Screens

### 1. Initial Screen

```
+-------------------------------------------------------+
|  MyVoiceIsMyDesign                              Configure ⚙️ |
+-------------------------------------------------------+
|                         |                             |
|  Welcome to MyVoiceIsMyDesign! |                             |
|                         |                             |
|  Describe what you'd    |         [CUBE]              |
|  like to create.        |                             |
|                         |                             |
|  [🎤 Talk to Me]        |                             |
|                         |                             |
|  ________________       |                             |
|  |                |     |                             |
|  |________________|     |                             |
|                         |                             |
+-------------------------------------------------------+
|  Ready to create                         Export 📤    |
+-------------------------------------------------------+
```

### 2. Configuration Screen

```
+-------------------------------------------------------+
|  MyVoiceIsMyDesign                                 Close ✖️  |
+-------------------------------------------------------+
|                                                       |
|  Configuration                                        |
|                                                       |
|  AI Provider:                                         |
|  [OpenAI ▼]                                           |
|                                                       |
|  API Key:                                             |
|  [______________________________]                     |
|                                                       |
|  Store API Key Locally? [✓]                           |
|  (Your key is stored only in your browser)            |
|                                                       |
|  [Test Connection]                [Save Settings]     |
|                                                       |
+-------------------------------------------------------+
```

### 3. Active Listening Screen

```
+-------------------------------------------------------+
|  MyVoiceIsMyDesign                              Configure ⚙️ |
+-------------------------------------------------------+
|                         |                             |
|  I'm listening...       |                             |
|                         |                             |
|  Speak clearly and      |         [CUBE]              |
|  describe what you'd    |                             |
|  like to create.        |                             |
|                         |                             |
|  [🔴 Stop]              |                             |
|                         |                             |
|  ________________       |                             |
|  |                |     |                             |
|  |________________|     |                             |
|                         |                             |
+-------------------------------------------------------+
|  Listening...                             Export 📤    |
+-------------------------------------------------------+
```

### 4. Processing Screen

```
+-------------------------------------------------------+
|  MyVoiceIsMyDesign                              Configure ⚙️ |
+-------------------------------------------------------+
|                         |                             |
|  Creating your model... |                             |
|                         |                             |
|  "A small vase with     |         [CUBE]              |
|  geometric patterns     |        [LOADING]            |
|  and a wide opening"    |                             |
|                         |                             |
|  [🎤 Talk to Me]        |                             |
|                         |                             |
|  ________________       |                             |
|  |                |     |                             |
|  |________________|     |                             |
|                         |                             |
+-------------------------------------------------------+
|  Processing request...                    Export 📤    |
+-------------------------------------------------------+
```

### 5. Model Display Screen

```
+-------------------------------------------------------+
|  MyVoiceIsMyDesign                              Configure ⚙️ |
+-------------------------------------------------------+
|                         |                             |
|  Here's your vase!      |                             |
|                         |                             |
|  How does it look?      |         [VASE MODEL]        |
|  You can ask me to      |                             |
|  make changes.          |                             |
|                         |                             |
|  [🎤 Talk to Me]        |                             |
|                         |                             |
|  ________________       |                             |
|  |                |     |                             |
|  |________________|     |                             |
|                         |                             |
+-------------------------------------------------------+
|  Model ready. Say "export" when finished.  Export 📤  |
+-------------------------------------------------------+
```

### 6. Export Screen

```
+-------------------------------------------------------+
|  MyVoiceIsMyDesign                              Configure ⚙️ |
+-------------------------------------------------------+
|                         |                             |
|  Your model is ready    |                             |
|  for export!            |                             |
|                         |         [VASE MODEL]        |
|  Printability Check:    |                             |
|  ✓ Model is watertight  |                             |
|  ✓ No thin walls        |                             |
|  ✓ Good base support    |                             |
|                         |                             |
|  Recommended Settings:  |                             |
|  • Layer Height: 0.2mm  |                             |
|  • Infill: 20%          |                             |
|                         |                             |
+-------------------------------------------------------+
|  Ready to print                      [Download STL]   |
+-------------------------------------------------------+
```

## UI Components

### Microphone Button
- Circular button with microphone icon
- States:
  - Inactive: Light gray background
  - Active/Listening: Pulsing red background
  - Processing: Spinning animation

### Text Input Area
- Simple text field with light border
- Placeholder text: "Your description will appear here..."
- Editable when voice input is complete

### 3D Preview Panel
- White background with subtle grid
- Orbit controls activated by mouse drag
- Zoom controls via mouse wheel
- Loading state shows spinning cube wireframe

### Export Button
- Rectangular button with download icon
- Disabled state when no valid model is available
- Hover state with slight color change

### Configuration Button
- Gear icon in top right
- Opens modal configuration panel
- Subtle highlight on hover

## Responsive Considerations

### Desktop (>1024px)
- Full two-panel layout as shown above
- Comfortable spacing between elements

### Tablet (768px-1024px)
- Maintain two-panel layout with reduced padding
- Slightly smaller font sizes

### Mobile (<768px)
- Stack panels vertically:
  - 3D preview on top
  - Interaction panel below
- Full-width buttons
- Simplified status messages
