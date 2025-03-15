// Setup for end-to-end tests
import { toMatchImageSnapshot } from 'jest-image-snapshot';

// Add image snapshot matcher
expect.extend({ toMatchImageSnapshot });

// Global setup for all tests
beforeAll(async () => {
  // Set default timeout for all tests
  jest.setTimeout(30000);
  
  // Set viewport size
  await page.setViewport({
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
  });
});

// Global teardown
afterAll(async () => {
  // Close the browser
  await browser.close();
});
