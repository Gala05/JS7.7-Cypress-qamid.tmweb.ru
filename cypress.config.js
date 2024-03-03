const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8h47es",
  e2e: {
    baseUrl: "https://qamid.tmweb.ru",
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
