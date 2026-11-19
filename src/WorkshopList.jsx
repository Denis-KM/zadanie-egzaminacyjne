const ALL_CATEGORIES = ['Frontend', 'Backend', 'QA']

// workshops = tablica objektów warsztatów, 
// selectedCategories = tablica wybranych kategorii, 
// setSelectedCategories = funkcja do aktualizacji wybranych kategorii, 
// onlyAvailable = boolean określający, czy wyświetlać tylko warsztaty z wolnymi miejscami, 
// setOnlyAvailable = funkcja do aktualizacji stanu onlyAvailable

function WorkshopList({
  workshops,
  selectedCategories,
  setSelectedCategories,
  onlyAvailable,
  setOnlyAvailable
}) {

  // Funkcja obsługująca zmianę wybranej kategorii warsztatów

  const handleCategoryChange = (category) => {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((item) => item !== category)
        : [...previous, category]
    )
  }

  // Filtrowanie warsztatów na podstawie wybranych kategorii oraz dostępności miejsc

  const filteredWorkshops = workshops.filter(
    (workshop) =>
      selectedCategories.includes(workshop.kategoria) &&
      (!onlyAvailable || workshop.wolneMiejsca > 0)
  );

  // Renderowanie listy warsztatów oraz formularza filtrującego

 return (
    <>
      <div className="mb-3">
        {ALL_CATEGORIES.map((category) => (
          <div className="form-check form-check-inline" key={category}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`filter-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label
              className="form-check-label"
              htmlFor={`filter-${category}`}
            >
              {category}
            </label>
          </div>
        ))}

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="filter-available"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="filter-available">
            Tylko warsztaty z wolnymi miejscami
          </label>
        </div>
      </div>

      {filteredWorkshops.length > 0 ? (
        <ol>
          {filteredWorkshops.map((workshop) => (
            <li key={workshop.id}>
              {`${workshop.tytul} (${workshop.kategoria}) – Prowadzący: ${workshop.prowadzacy} | Wolne miejsca: ${workshop.wolneMiejsca}`}
            </li>
          ))}
        </ol>
      ) : (
        <p>Brak warsztatów spełniających wybrane kryteria.</p>
      )}
    </>
  )
}


export default WorkshopList