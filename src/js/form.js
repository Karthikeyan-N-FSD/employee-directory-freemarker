import { employees, addEmployee, updateEmployee } from './data.js';

function getQueryParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

function populateDepartmentsAndRoles() {
  const depts = [...new Set(employees.map(e => e.department))];
  const roles = [...new Set(employees.map(e => e.role))];
  const deptSel = document.getElementById('department');
  const roleSel = document.getElementById('role');
  depts.forEach(d => deptSel.innerHTML += `<option value="${d}">${d}</option>`);
  roles.forEach(r => roleSel.innerHTML += `<option value="${r}">${r}</option>`);
}

function initForm() {
  const { id } = getQueryParams();
  if (id) {
    document.getElementById('formTitle').textContent = 'Edit Employee';
    const emp = employees.find(e => e.id == id);
    if (emp) {
      document.getElementById('empId').value = emp.id;
      document.getElementById('firstName').value = emp.firstName;
      document.getElementById('lastName').value = emp.lastName;
      document.getElementById('email').value = emp.email;
      document.getElementById('department').value = emp.department;
      document.getElementById('role').value = emp.role;
    }
  }
}

function bindFormEvents() {
  document.getElementById('cancelBtn').addEventListener('click', () => window.location = 'dashboard.html');
  document.getElementById('employeeForm').addEventListener('submit', e => {
    e.preventDefault();
    const id = +document.getElementById('empId').value;
    const data = {
      id: id || (employees.length ? Math.max(...employees.map(x => x.id)) + 1 : 1),
      firstName: document.getElementById('firstName').value.trim(),
      lastName: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      department: document.getElementById('department').value,
      role: document.getElementById('role').value
    };
    if (!data.firstName || !data.lastName || !data.email) { alert('Please fill all required fields.'); return; }
    id ? updateEmployee(data) : addEmployee(data);
    window.location = 'dashboard.html';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateDepartmentsAndRoles();
  initForm();
  bindFormEvents();
});
