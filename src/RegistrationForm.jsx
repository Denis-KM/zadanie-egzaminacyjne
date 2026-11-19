import { useState } from "react";

// Formularz rejestracyjny uczestnika warsztatu

function RegistrationForm({ workshops, setWorkshops }) {

  // Stan przechowujący dane uczestnika oraz wybrany warsztat

  const [participantName, setParticipantName] = useState("")
  const [participantEmail, setParticipantEmail] = useState("")
  const [workshopId, setWorkshopId] = useState("")

  // Funkcja obsługująca przesłanie formularza
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const trimmedName = participantName.trim()
    const trimmedEmail = participantEmail.trim()

    if (trimmedName === "" || trimmedEmail === "") {
      console.log("Błąd: Uzupełnij imię, nazwisko oraz adres e-mail.")
      return
    }

    const idToFind = Number(workshopId)

    // Sprawdzenie, czy podany numer warsztatu istnieje i czy są dostępne miejsca

    const selectedWorkshop = workshops.find(
      (workshop) => workshop.id === idToFind
    )

    if (!selectedWorkshop) {
      console.log("Błąd: Nieprawidłowy numer warsztatu.")
      return
    }

    if (selectedWorkshop.wolneMiejsca <= 0) {
      console.log(
        `Brak wolnych miejsc na wybrany warsztat: ${selectedWorkshop.tytul}`
      )
      return
    }

    const remainingPlaces = selectedWorkshop.wolneMiejsca - 1

    // Aktualizacja stanu warsztatów po zapisaniu uczestnika

    setWorkshops((previousWorkshops) =>
      previousWorkshops.map((workshop) =>
        workshop.id === selectedWorkshop.id
          ? { ...workshop, wolneMiejsca: remainingPlaces }
          : workshop
      )
    )

    console.log(`Zapisano uczestnika: ${trimmedName} (${trimmedEmail})`)
    console.log(
      `Wybrany warsztat: ${selectedWorkshop.tytul} (Pozostało miejsc: ${remainingPlaces})`
    )

    setParticipantName("")
    setParticipantEmail("")
    setWorkshopId("")
  }

  // Renderowanie formularza rejestracyjnego
  
  return (
    <>
      <h2>Formularz zgłoszeniowy</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Imię i nazwisko uczestnika:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Adres e-mail:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={participantEmail}
            onChange={(e) => setParticipantEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="workshopId" className="form-label">
            Numer warsztatu (ID):
          </label>
          <input
            type="number"
            id="workshopId"
            className="form-control"
            value={workshopId}
            onChange={(e) => setWorkshopId(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz na warsztat
        </button>
      </form>
    </>
  )
}

export default RegistrationForm
