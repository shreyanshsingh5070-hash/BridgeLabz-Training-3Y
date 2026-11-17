const searchInput = document.getElementById("searchInput");
const studentRows = document.getElementById("studentRows");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const rows = [...studentRows.querySelectorAll("tr")];
  let visibleRows = 0;

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const matchesSearch = rowText.includes(searchTerm);
    row.hidden = !matchesSearch;
    if (matchesSearch) visibleRows++;
  });

  noResults.hidden = visibleRows !== 0;
});