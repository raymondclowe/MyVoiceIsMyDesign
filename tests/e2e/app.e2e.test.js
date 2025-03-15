describe('MyVoiceIsMyDesign E2E', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  test('should load the application', async () => {
    // Check that the page title is correct
    const title = await page.title();
    expect(title).toBe('My Voice Is My Design');

    // Check that the Three.js canvas is rendered
    const canvas = await page.$('canvas');
    expect(canvas).not.toBeNull();
  });

  test('should have WebGL context', async () => {
    // Check if WebGL is working by evaluating a script in the page context
    const hasWebGL = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      return !!(canvas && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    });
    
    expect(hasWebGL).toBe(true);
  });

  test('should have no console errors', async () => {
    // Check for console errors
    const errors = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    // Reload the page to catch any errors
    await page.reload({ waitUntil: 'networkidle0' });
    
    expect(errors.length).toBe(0);
  });

  // Note: Testing actual voice recognition is challenging in an automated test
  // This would typically be done with manual testing or by mocking the Web Speech API
  // The following test simulates voice commands by directly calling the functions
  
  test('should be able to create objects programmatically', async () => {
    // Count initial objects in the scene
    const initialObjectCount = await page.evaluate(() => {
      return window.app.sceneManager.scene.children.length;
    });
    
    // Simulate a voice command by directly calling the function
    await page.evaluate(() => {
      // Create a cube
      const command = 'create cube';
      window.app.voiceInterface.processCommand(command);
    });
    
    // Wait for the scene to update
    await page.waitForTimeout(500);
    
    // Check that a new object was added to the scene
    const newObjectCount = await page.evaluate(() => {
      return window.app.sceneManager.scene.children.length;
    });
    
    expect(newObjectCount).toBeGreaterThan(initialObjectCount);
  });
});
