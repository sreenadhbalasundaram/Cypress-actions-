const { defineConfig } = require("cypress");
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      installLogsPrinter(on, {
        printLogsToFile: "always",
        outputRoot: "cypress/results/detailCommandLogs",
        outputTarget: {
          "detailCommandLogs.json": "json",
        },
      });

      on('task', {
        log(message) {
            console.log(message);
            return null;
        },
      });

      return config;
    },
    specPattern: "cypress/integration/**/*.js",
    baseUrl: "https://example.cypress.io",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videoCompression: false,
  }, 
});