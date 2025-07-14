import { deleteEmployeeById, employees, saveEmployees } from './data.js';
import { paginate, renderPagination } from './pagination.js';
import { applyFilters } from './filters.js';

let state = {
  currentPage: 1,
  search: '',
  department: '',
  role: '',
  sortBy: '',
  perPage: 10
};

function render() {
  const filtered = applyFilters(state);
  const { paged, totalPages } = paginate(filtered, state.currentPage, state.perPage);

  const container = document.getElementById('employeeList');
  container.innerHTML = paged.map(e => `
    <div class="card">
      <h3>${e.firstName} ${e.lastName}</h3>
      <p><strong>Email:</strong> ${e.email}</p>
      <p><strong>Department:</strong> ${e.department}</p>
      <p><strong>Role:</strong> ${e.role}</p>
      <div class="actions">
        <button onclick="location.href='add-employee.html?id=${e.id}'">Edit</button>
        <button onclick="onDelete(${e.id})">Delete</button>
      </div>
    </div>
  `).join('');

  renderPagination(
    document.getElementById('pagination'),
    totalPages,
    state.currentPage,
    page => {
      state.currentPage = page;
      render();
    }
  );
}

window.onDelete = function(id) {
  if (confirm('Are you sure you want to delete this employee?')) {
    deleteEmployeeById(id);
    render();
  }
};

function bindControls() {
  document.getElementById('search').addEventListener('input', e => {
    state.search = e.target.value;
    render();
  });

  document.getElementById('sortBy').addEventListener('change', e => {
    state.sortBy = e.target.value;
    render();
  });

  document.getElementById('perPage').addEventListener('change', e => {
    state.perPage = parseInt(e.target.value);
    state.currentPage = 1;
    render();
  });

  document.getElementById('applyFilters').addEventListener('click', () => {
    state.currentPage = 1;
    render();
  });

  document.getElementById('resetFilters').addEventListener('click', () => {
    document.getElementById('filterName').value = '';
    document.getElementById('filterDeptText').value = '';
    document.getElementById('filterRoleText').value = '';
    state.currentPage = 1;
    render();
  });

  document.getElementById('addBtn').addEventListener('click', () => {
    window.location.href = 'add-employee.html';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bindControls();
  render();

  // Filter popup logic
  const filterPopup = document.getElementById('filterSidebarContainer');
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  const closeFilterPanel = document.getElementById('closeFilterPanel');

  filterToggleBtn.addEventListener('click', () => {
    filterPopup.classList.add('active');
  });
  closeFilterPanel.addEventListener('click', () => {
    filterPopup.classList.remove('active');
  });
  filterPopup.addEventListener('click', (e) => {
    if (e.target === filterPopup) filterPopup.classList.remove('active');
  });
});

function renderEmployeeList() {
  const list = document.getElementById('employeeList');
  list.innerHTML = '<ul>' +
    employees.map(emp =>
      `<li>${emp.firstName} ${emp.lastName} - ${emp.email} (${emp.department}, ${emp.role})</li>`
    ).join('') +
    '</ul>';
}
