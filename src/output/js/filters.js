import { employees } from './data.js';

export function applyFilters(state) {
  const name = document.getElementById('filterName').value.trim().toLowerCase();
  const dept = document.getElementById('filterDeptText').value.trim().toLowerCase();
  const role = document.getElementById('filterRoleText').value.trim().toLowerCase();

  let filtered = employees.filter(e => {
    const matchesName = e.firstName.toLowerCase().includes(name);
    const matchesDept = e.department.toLowerCase().includes(dept);
    const matchesRole = e.role.toLowerCase().includes(role);
    return matchesName && matchesDept && matchesRole;
  });

  if (state.search) {
    const term = state.search.toLowerCase();
    filtered = filtered.filter(e =>
      e.firstName.toLowerCase().includes(term) ||
      e.lastName.toLowerCase().includes(term) ||
      e.email.toLowerCase().includes(term)
    );
  }

  if (state.sortBy) {
    filtered.sort((a, b) => a[state.sortBy].localeCompare(b[state.sortBy]));
  }

  return filtered;
}