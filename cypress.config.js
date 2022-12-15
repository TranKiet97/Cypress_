const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/JoanMedia/**.*',
    reporter: "mochawesome"
  },
  defaultCommandTimeout: 10000
});
