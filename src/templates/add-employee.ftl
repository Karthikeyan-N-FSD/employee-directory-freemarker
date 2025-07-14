<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Add / Edit Employee</title>
  <link rel="stylesheet" href="./css/styles.css" />
</head>
<body>
  <main>
    <form id="employeeForm" class="form-container">
      <h1 id="formTitle">Add Employee</h1>
      <input type="hidden" id="empId" />
      <label>First Name<input type="text" id="firstName" required /></label>
      <label>Last Name<input type="text" id="lastName" required /></label>
      <label>Email<input type="email" id="email" required /></label>
      <label>Department<select id="department" required></select></label>
      <label>Role<select id="role" required></select></label>
      <div class="form-actions">
        <button type="button" id="cancelBtn">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  </main>

  <script type="module" src="./js/form.js"></script>
</body>
</html>