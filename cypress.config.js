const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.mercadolibre.com.mx/",
    supportFile: false
  }
});
