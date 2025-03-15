module.exports = {
  launch: {
    headless: 'new',
    slowMo: 50,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  },
  server: {
    command: 'npx serve -p 3000',
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
  browserContext: 'default',
};
