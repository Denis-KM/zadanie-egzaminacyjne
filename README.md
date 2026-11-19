# System Rejestracji na Warsztaty IT

Prosta aplikacja webowa stworzona w React (z wykorzystaniem Vite), umożliwiająca przeglądanie dostępnych warsztatów programistycznych, ich filtrowanie oraz zapisywanie uczestników na wybrane wydarzenia.

## Funkcjonalności

- **Lista warsztatów:** Wyświetla dostępne szkolenia wraz z kategorią, osobą prowadzącą oraz aktualną liczbą wolnych miejsc.
- **Filtrowanie wyników:** Umożliwia filtrowanie warsztatów według kategorii (`Frontend`, `Backend`, `QA`) oraz zawężenie listy wyłącznie do wydarzeń z wolnymi miejscami.
- **Formularz zgłoszeniowy:** Pozwala na zapisanie uczestnika (imię, nazwisko, adres e-mail) na wybrany warsztat po podaniu jego numeru ID.
- **Walidacja i aktualizacja stanu:** Sprawdza poprawność danych, weryfikuje dostępność miejsc oraz automatycznie zmniejsza ich pulę po udanym zapisie (informacje zwrotne logowane są w konsoli przeglądarki).

## Technologie

- **React**
- **Vite**
- **Bootstrap**
- **JavaScript**

## Struktura projektu

- `App.jsx` – główny komponent przechowujący stan listy warsztatów oraz aktywnych filtrów.
- `WorkshopList.jsx` – komponent odpowiedzialny za wyświetlanie i filtrowanie listy szkoleń.
- `RegistrationForm.jsx` – formularz rejestracyjny obsługujący walidację danych i aktualizację liczby wolnych miejsc.

## Instalacja i uruchomienie

1. **Sklonuj repozytorium:**
   ```bash
   git clone https://github.com/Denis-KM/zadanie-egzaminacyjne.git
   cd zadanie-egzaminacyjne
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Uruchom serwer deweloperski:**
   ```bash
   npm run dev
   ```

4. Otwórz aplikację w przeglądarce pod adresem wskazanym w terminalu (domyślnie `http://localhost:5173`).
