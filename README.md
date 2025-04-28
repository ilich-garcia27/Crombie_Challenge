# 🛒 Proyecto de Automatización - Mercado Libre (Cypress)

Este proyecto contiene pruebas automatizadas de la plataforma Mercado Libre, utilizando el framework Cypress y aplicando el patrón Page Object Model (POM).

---

## 📚 Índice

- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Ejecución de pruebas](#ejecución-de-pruebas)
- [Escenarios cubiertos](#escenarios-cubiertos)

---

## 🚀 Tecnologías utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automatización de pruebas end-to-end
- JavaScript (ES6+)
- Page Object Model (POM) como patrón de diseño
- Node.js y npm (para administración de paquetes)

---

## 🛠️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ilich-garcia27/Crombie_Challenge.git
2. Instalar dependencias:
   ```bash
   npm install
4. Abrir Cypress:
   ```bash
   npx cypress open

---

## 🧪 Ejecución de pruebas
- Para abrir el Test Runner:
  ```bash
   npx cypress open
- Para ejecutar las pruebas en modo headless:
  ```bash
   npx cypress run

---

## 📋 Escenarios cubiertos
- ✅ Buscar un producto específico.
- ✅ Navegar a la segunda página de resultados.
- ✅ Seleccionar el segundo producto con "Envío gratis" (o segundo producto disponible).
- ✅ Cambiar la cantidad del producto a 3 unidades.
- ✅ Agregar el producto al carrito.
- ✅ Validar la aparición de la pantalla de login si es necesario.
