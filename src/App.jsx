import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import RegistrationForm from './RegistrationForm.jsx';
import WorkshopList from './WorkshopList.jsx';

// Główny komponent aplikacji

function App() {
  

  // Stan przechowujący listę warsztatów

  const [warsztaty, setWarsztaty] = useState([
{ id: 1, tytul: "Architektura aplikacji w React", kategoria: "Frontend", prowadzacy: "Anna Kowalska", wolneMiejsca: 4 },
{ id: 2, tytul: "Bezpieczeństwo API w .NET", kategoria: "Backend", prowadzacy: "Piotr Nowak", wolneMiejsca: 2 },
{ id: 3, tytul: "Testy automatyczne w Cypress", kategoria: "QA", prowadzacy: "Marek Zieliński", wolneMiejsca: 0 },
{ id: 4, tytul: "Projektowanie interfejsów z Bootstrap", kategoria: "Frontend", prowadzacy: "Katarzyna Wiśniewska", wolneMiejsca: 7 },
{ id: 5, tytul: "Bazy danych PostgreSQL w praktyce", kategoria: "Backend", prowadzacy: "Tomasz Wójcik", wolneMiejsca: 1 }
]);

  // Stan przechowujący wybrane kategorie warsztatów oraz filtr dostępności

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);


  // Renderowanie komponentów WorkshopList i RegistrationForm z odpowiednimi propsami
  
  return (
    <>
      <WorkshopList workshops={warsztaty} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} onlyAvailable={onlyAvailable} setOnlyAvailable={setOnlyAvailable} />
      <RegistrationForm workshops={warsztaty} setWorkshops={setWarsztaty} />
    </>
  )
}

export default App
