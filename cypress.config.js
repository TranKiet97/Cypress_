const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/tests/**.*',
    reporter: "mochawesome",
    experimentalStudio: true,
    chromeWebSecurity: false,
    $schema: "https://on.cypress.io/cypress.schema.json",
    baseUrl: "https://the-internet.herokuapp.com/"
    // keystrokeDelay: 500,
  },
  defaultCommandTimeout: 600
});
