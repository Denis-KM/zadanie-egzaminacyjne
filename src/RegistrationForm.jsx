import { useState } from "react";


function RegistrationForm({ workshops, setWorkshops }) {
  const [participantName, setParticipantName] = useState("")
  const [participantEmail, setParticipantEmail] = useState("")
  const [workshopId, setWorkshopId] = useState("")

  const handleFormSubmit = (event) => {

    if (participantName.trim() === "" || participantEmail.trim() === "") {
      console.log("Błąd: Uzupełnij imię, nazwisko oraz adres e-mail.")
      return
    }

    const idToFind = Number(workshopId)

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
  }

  return (
    <>

    </>
  )
}

export default RegistrationForm
