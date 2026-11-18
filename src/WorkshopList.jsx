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
  }}
  const filteredWorkshops = workshops.filter(
    (workshop) =>
      selectedCategories.includes(workshop.kategoria) &&
      (!onlyAvailable || workshop.wolneMiejsca > 0)
  )

