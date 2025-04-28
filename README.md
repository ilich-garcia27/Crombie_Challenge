# 🛒 Automation Project - Mercado Libre (Cypress)

This project contains automated tests for the Mercado Libre platform, using the Cypress framework and applying the Page Object Model (POM) pattern.

---

## 🚀 Technologies Used

- [Cypress](https://www.cypress.io/) - End-to-end testing framework
- JavaScript (ES6+)
- Page Object Model (POM) as design pattern
- Node.js and npm (for package management)

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ilich-garcia27/Crombie_Challenge.git
2. Install dependencies:
   ```bash
   npm install
4. Open Cypress:
   ```bash
   npx cypress open

---

## 🧪 Test Execution
- To open the Test Runner:
  ```bash
   npx cypress open
- To run the tests in headless mode:
  ```bash
   npx cypress run

---

## 📋 Covered Scenarios
- ✅ Search for a specific product.
- ✅ Navigate to the second page of results.
- ✅ Select the second product with "Free shipping" (or the second available product).
- ✅ Change the quantity of the product to 3 units.
- ✅ Add the product to the cart.
- ✅ Validate the appearance of the login screen if necessary.
