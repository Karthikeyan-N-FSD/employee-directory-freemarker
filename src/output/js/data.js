const EMPLOYEE_KEY = 'employee_data';

export let employees = loadEmployees();

function loadEmployees() {
  const fromStorage = localStorage.getItem(EMPLOYEE_KEY);
  const defaultEmployees = [
    { id: 1, firstName: 'Raj', lastName: 'Sharma', email: 'raj.sharma@example.com', department: 'HR', role: 'Manager' },
    { id: 2, firstName: 'Priya', lastName: 'Patel', email: 'priya.patel@example.com', department: 'IT', role: 'Developer' },
    { id: 3, firstName: 'Aarav', lastName: 'Singh', email: 'aarav.singh@example.com', department: 'Finance', role: 'Analyst' },
    { id: 4, firstName: 'Ananya', lastName: 'Kumar', email: 'ananya.kumar@example.com', department: 'Marketing', role: 'Specialist' },
    { id: 5, firstName: 'Vikram', lastName: 'Reddy', email: 'vikram.reddy@example.com', department: 'Operations', role: 'Coordinator' },
    { id: 6, firstName: 'Divya', lastName: 'Mehta', email: 'divya.mehta@example.com', department: 'IT', role: 'System Admin' },
    { id: 7, firstName: 'Arjun', lastName: 'Verma', email: 'arjun.verma@example.com', department: 'Sales', role: 'Associate' },
    { id: 8, firstName: 'Ishani', lastName: 'Joshi', email: 'ishani.joshi@example.com', department: 'HR', role: 'Recruiter' },
    { id: 9, firstName: 'Rohan', lastName: 'Malhotra', email: 'rohan.malhotra@example.com', department: 'Research', role: 'Scientist' },
    { id: 10, firstName: 'Sneha', lastName: 'Gupta', email: 'sneha.gupta@example.com', department: 'Marketing', role: 'Intern' },
    { id: 11, firstName: 'Kiran', lastName: 'Iyer', email: 'kiran.iyer@example.com', department: 'Finance', role: 'Analyst' },
    { id: 12, firstName: 'Aditya', lastName: 'Choudhury', email: 'aditya.choudhury@example.com', department: 'IT', role: 'Developer' },
    { id: 13, firstName: 'Meera', lastName: 'Srivastava', email: 'meera.srivastava@example.com', department: 'Operations', role: 'Manager' },
    { id: 14, firstName: 'Sanjay', lastName: 'Bose', email: 'sanjay.bose@example.com', department: 'IT', role: 'Developer' }
  ];
  return fromStorage
    ? JSON.parse(fromStorage)
    : defaultEmployees;
}

export function saveEmployees() {
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(employees));
}

export function addEmployee(emp) {
  employees.push(emp);
  saveEmployees();
}

export function updateEmployee(updated) {
  const idx = employees.findIndex(e => e.id === updated.id);
  if (idx > -1) {
    employees[idx] = updated;
    saveEmployees();
  }
}

export function deleteEmployeeById(id) {
  employees = employees.filter(e => e.id !== id);
  saveEmployees();
}