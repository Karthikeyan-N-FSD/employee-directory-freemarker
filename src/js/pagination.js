  export function paginate(data, page, perPage) {
  const start = (page - 1) * perPage;
  return { paged: data.slice(start, start + perPage), totalPages: Math.ceil(data.length / perPage) };
}

export function renderPagination(container, totalPages, currentPage, onPageClick) {
  container.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    if (i === currentPage) btn.classList.add('active');
    btn.addEventListener('click', () => onPageClick(i));
    container.appendChild(btn);
  }
}