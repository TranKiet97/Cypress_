const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/api_test/**.*',
    baseUrl: 'https://the-internet.herokuapp.com',
    reporter: "mochawesome"
  },
});
