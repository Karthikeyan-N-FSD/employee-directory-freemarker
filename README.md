# Employee Directory

## Overview

This Employee Directory is a simple web application built using Freemarker templates and vanilla JavaScript. It allows users to view, add, edit, filter, and delete employees. Employee data is stored in the browser's localStorage for persistence.

---

## Project Structure

```
employee-directory/
└── src/
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── dashboard.js
    │   ├── data.js
    │   ├── filters.js
    │   ├── form.js
    │   └── pagination.js
    ├── output/
    │   ├── dashboard.html
    │   └── add-employee.html
    ├── templates/
    │   ├── dashboard.ftl
    │   └── add-employee.ftl
    └── index.html
RenderDashboard.java
```

---

## Setup & Run Instructions

### Prerequisites

- Java (JDK 8 or higher)
- [Freemarker JAR (direct download)](https://repo1.maven.org/maven2/org/freemarker/freemarker/2.3.32/freemarker-2.3.32.jar)
- A modern browser (Chrome, Edge, Firefox, etc.)
- VS Code with Live Server extension for local development

### Steps

1. **Download Freemarker JAR**
   - Place `freemarker-2.3.32.jar` in your project root.

2. **Generate HTML from Freemarker templates**
   - Compile the Java renderer:
     ```
     javac -cp freemarker-2.3.32.jar RenderDashboard.java
     ```
   - Run the renderer:
     ```
     java -cp .;freemarker-2.3.32.jar RenderDashboard
     ```
   - This will generate `dashboard.html` and `add-employee.html` in the `src/output` folder.

3. **Serve the `src` folder**
   - Use VS Code Live Server:
     - Open the `src` folder in VS Code.
     - Right-click `index.html` and select "Open with Live Server".

4. **Usage**
   - View employees on the dashboard.
   - Click "Add Employee" to go to the add form.
   - Add, edit, delete, filter, and paginate employees.

---

## 📸 Screenshots

### 🔹 Dashboard View  
![Dashboard](https://github.com/user-attachments/assets/5ae320e6-ecb9-40e4-8155-fdc43db98d6c)

---

### 🔹 Filter Employees  
![Filter](https://github.com/user-attachments/assets/d0edfaa3-753d-462e-9308-c021c67cee5a)

---

### 🔹 Add Employee Form  
![Add Form](https://github.com/user-attachments/assets/4fccb4f9-599c-4bf8-a7df-ebbe220d1960)

---

## Reflection

**Challenges Faced:**
- As I am new to Freemarker templates, setting up the environment and learning the basics took some time. If I had more time, I would continue enhancing my skills in Freemarker and template-based rendering.
- Ensuring consistent data handling between the static HTML UI and the dynamic JavaScript (especially when using localStorage) required careful synchronization.

**Improvements for Future:**
- In future, I will focus on learning Freemarker templates and Java fundamentals, and explore how to load and update data dynamically from a Java backend.
- Improve UI/UX with better feedback and responsive design.
- Implement search and filter logic server-side for scalability.
- Add automated tests for JavaScript.

---
