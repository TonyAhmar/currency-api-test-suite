const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // Base URL 
      config.baseUrl = 'https://open.er-api.com/v6/latest/USD';

      // Configuration for end-to-end testing
      //config.specPattern = 'cypress/integration/**/*.spec.js';
      config.specPattern = 'cypress/integration/**/*.feature'; // File pattern for feature files

      // Settings related to video recording
      config.video = false; // Set to true if you want to record video of test runs
      config.videosFolder = 'cypress/videos'; // Folder to store video recordings

      // Settings related to screenshots
      config.screenshotsFolder = 'cypress/screenshots'; // Folder to store screenshots

      // Environment variables
      config.env = {
        // You can define environment-specific variables here
      };

      // Configuration for Cucumber preprocessor
      config.cucumber = {
        stepDefinitions: 'cypress/support/step_definitions', // Folder for step definitions
        excludeSpecPattern: '**/*.js', // Ignore JS files to avoid conflicts
      };

      // Additional configurations
      config.chromeWebSecurity = false; // Disable web security for cross-origin requests (optional)
      config.viewportWidth = 1440; // Width of the browser viewport
      config.viewportHeight = 900; // Height of the browser viewport

      return config;
    },
  },
});
