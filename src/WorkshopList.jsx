const ALL_CATEGORIES = ['Frontend', 'Backend', 'QA']

function WorkshopList({
  workshops,
  selectedCategories,
  setSelectedCategories,
  onlyAvailable,
  setOnlyAvailable
}) {
  const handleCategoryChange = (category) => {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((item) => item !== category)
        : [...previous, category]
    )
  }

  const filteredWorkshops = workshops.filter(
    (workshop) =>
      selectedCategories.includes(workshop.kategoria) &&
      (!onlyAvailable || workshop.wolneMiejsca > 0)
  );

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