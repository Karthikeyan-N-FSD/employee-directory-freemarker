
<#assign employees = [
  { "id": 1, "firstName": "Raj", "lastName": "Sharma", "email": "raj.sharma@example.com", "department": "HR", "role": "Manager" },
  { "id": 2, "firstName": "Priya", "lastName": "Patel", "email": "priya.patel@example.com", "department": "IT", "role": "Developer" },
  { "id": 3, "firstName": "Aarav", "lastName": "Singh", "email": "aarav.singh@example.com", "department": "Finance", "role": "Analyst" },
  { "id": 4, "firstName": "Ananya", "lastName": "Kumar", "email": "ananya.kumar@example.com", "department": "Marketing", "role": "Specialist" },
  { "id": 5, "firstName": "Vikram", "lastName": "Reddy", "email": "vikram.reddy@example.com", "department": "Operations", "role": "Coordinator" },
  { "id": 6, "firstName": "Divya", "lastName": "Mehta", "email": "divya.mehta@example.com", "department": "IT", "role": "System Admin" },
  { "id": 7, "firstName": "Arjun", "lastName": "Verma", "email": "arjun.verma@example.com", "department": "Sales", "role": "Associate" },
  { "id": 8, "firstName": "Ishani", "lastName": "Joshi", "email": "ishani.joshi@example.com", "department": "HR", "role": "Recruiter" },
  { "id": 9, "firstName": "Rohan", "lastName": "Malhotra", "email": "rohan.malhotra@example.com", "department": "Research", "role": "Scientist" },
  { "id": 10, "firstName": "Sneha", "lastName": "Gupta", "email": "sneha.gupta@example.com", "department": "Marketing", "role": "Intern" },
  { "id": 11, "firstName": "Kiran", "lastName": "Iyer", "email": "kiran.iyer@example.com", "department": "Finance", "role": "Analyst" },
  { "id": 12, "firstName": "Aditya", "lastName": "Choudhury", "email": "aditya.choudhury@example.com", "department": "IT", "role": "Developer" },
  { "id": 13, "firstName": "Meera", "lastName": "Srivastava", "email": "meera.srivastava@example.com", "department": "Operations", "role": "Manager" },
  { "id": 14, "firstName": "Sanjay", "lastName": "Bose", "email": "sanjay.bose@example.com", "department": "IT", "role": "Developer" }
] >
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Employee Directory</title>
  <link rel="stylesheet" href="./css/styles.css" />
</head>

<body>
  <header class="main-header">
    <div class="container">
      <h1>Employee Directory</h1>
      <input type="text" id="search" class="search-input" placeholder="Search by name or email" />
      <button id="filterToggleBtn" class="header-btn" type="button">Filter</button>
    </div>
  </header>

  <div class="controls-bar">
    <div class="container">
      <div class="controls-group">
        <div class="control-item">
          <label for="sortBy">Sort:</label>
          <select id="sortBy">
            <option value="">--Select--</option>
            <option value="firstName">First Name</option>
            <option value="department">Department</option>
          </select>
        </div>
        <div class="control-item">
          <label for="perPage">Show:</label>
          <select id="perPage">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <button id="addBtn" class="add-employee-btn">Add Employee</button>
    </div>
  </div>

  <main class="container main-content">
    <div id="employeeList">
      <ul>
        <#list employees as emp>
        <li>${emp.firstName} ${emp.lastName} - ${emp.email} (${emp.department}, ${emp.role})</li>
        </#list>
      </ul>
    </div>
    <div id="no-results" class="hidden">
      <h3>No Employees Found</h3>
      <p>Try adjusting your search or filter criteria.</p>
    </div>
    <div id="pagination"></div>
  </main>

  <!-- Filter Sidebar Popup -->
  <div id="filterSidebarContainer" class="filter-popup">
    <aside id="filterSidebar" class="filter-panel-popup">
      <div class="filter-header">
        <h2>Filter Employees</h2>
        <button id="closeFilterPanel" class="close-btn" type="button">&times;</button>
      </div>
      <label for="filterName">First Name</label>
      <input type="text" id="filterName" />
      <label for="filterDeptText">Department</label>
      <input type="text" id="filterDeptText" />
      <label for="filterRoleText">Role</label>
      <input type="text" id="filterRoleText" />
      <div class="modal-actions">
        <button id="applyFilters" class="btn btn-primary" type="button">Apply</button>
        <button id="resetFilters" class="btn btn-secondary" type="button">Reset</button>
      </div>
    </aside>
  </div>

  <footer class="footer">
    &copy; 2025 Employee Directory App. All rights reserved.
  </footer>

  <script type="module" src="./js/dashboard.js"></script>
  
  

</body>

</html>