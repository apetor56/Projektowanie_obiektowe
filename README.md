# Projektowanie_obiektowe
Zadania z kursu "Projektowanie obiektowe" (rok akademicki 2023/24)

[**Zadanie 1 Paradygmaty**](01_paradygmaty/)

✅ 3.0 Procedura do generowania 50 losowych liczb od 0 do 100: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/61983d434363338f9940b3dcc336d6ac159eecb2)

✅ 3.5 Procedura do sortowania liczb: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/0aea483ba2ea476c4edd5a5272072a6bedfdc6c7) + [fix](https://github.com/apetor56/projektowanie_obiektowe/commit/5a661ef8a19791752e66c1e646f0bc1a9c4e10da)

✅ 4.0 Dodanie parametrów do procedury losującej określającymi zakres losowania: od, do, ile: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/2fb52af987fbde54ef1c370ca397c3787ef41e11)

✅ 4.5 5 testów jednostkowych testujące procedury: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/8a253343d4f89a454a6945565a75a95056e6dab8)

✅ 5.0 Skrypt w bashu do uruchamiania aplikacji w Pascalu via docker: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/7e56eee0b7f033963c4240e2a2eb942fd08e3484)

[**Zadanie 2 Wzorce architektury**](02_wzorce_architektury/)

Należy stworzyć aplikację webową na bazie frameworka Symfony na obrazie kprzystalski/projobj-php:latest. Baza danych dowolna, sugeruję SQLite.

✅ 3.0 Należy stworzyć jeden model z kontrolerem z produktami, zgodnie z CRUD: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/43ab843a084b658b53e7cd0deca27c1e9b62d494)

❌ 3.5 Należy stworzyć skrypty do testów endpointów via curl

❌ 4.0 Należy stworzyć dwa dodatkowe kontrolery wraz z modelami

❌ 4.5 Należy stworzyć widoki do wszystkich kontrolerów

❌ 5.0 Stworzenie panelu administracyjnego z mockowanym logowaniem

[**Zadanie 3 Wzorce kreacyjne**](03_wzorce_kreacyjne/)

Spring Boot (Kotlin)

Proszę stworzyć prosty serwis do autoryzacji, który zasymuluje autoryzację użytkownika za pomocą przesłanej nazwy użytkownika oraz hasła. Serwis powinien zostać wstrzyknięty do kontrolera za pomocą anotacji @Autowired. Aplikacja ma oczywiście zawierać jeden kontroler i powinna zostać napisana w języku Kotlin. Oparta powinna zostać na frameworku Spring Boot, podobnie jak na zajęciach. Serwis do autoryzacji powinien być singletonem.

✅ 3.0 Należy stworzyć jeden kontroler wraz z danymi wyświetlanymi z listy na endpoint’cie w formacie JSON - Kotlin + Spring Boot: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/5ee0daf9a8c72a5ff8eebc29706582a045ca3363)

✅ 3.5 Należy stworzyć klasę do autoryzacji (mock) jako Singleton w formie eager: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/ad8f91181bd2ff0c2735e7e27e1893d3e5f34d94)

✅ 4.0 Należy obsłużyć dane autoryzacji przekazywane przez użytkownika: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/4d447ac43ae0aa801a617997804bdb13c72db12f)

✅ 4.5 Należy wstrzyknąć singleton do głównej klasy via @Autowired: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/59f64035e8d5ce742834da525cc693660e92bdff)

✅ 5.0 Obok wersji Eager do wyboru powinna być wersja Singletona w wersji lazy: [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/771886557273f3fb9e2e64c0330d367048c1f8a5)

[**Zadanie 4 Wzorce strukturalne**](04_wzorce_strukturalne/)

Należy stworzyć aplikację w Go na frameworku echo. Aplikacja ma mieć jeden endpoint, minimum jedną funkcję proxy, która pobiera dane np. o pogodzie, giełdzie, etc. (do wyboru) z zewnętrznego API. Zapytania do endpointu można wysyłać w jako GET lub POST.

✅ 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Pogody, która pozwala na pobieranie danych o pogodzie (lub akcjach giełdowych) - [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/94aafd4857a7b71dea851e83aa137af27ad5524f)

✅ 3.5 Należy stworzyć model Pogoda (lub Giełda) wykorzystując gorm, a dane załadować z listy przy uruchomieniu - [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/dd12526aec791d7b32bee0c98c6364040b61cd63)

❌ 4.0 Należy stworzyć klasę proxy, która pobierze dane z serwisu zewnętrznego podczas zapytania do naszego kontrolera

❌ 4.5 Należy zapisać pobrane dane z zewnątrz do bazy danych

❌ 5.0 Należy rozszerzyć endpoint na więcej niż jedną lokalizację (Pogoda), lub akcje (Giełda) zwracając JSONa

[**Zadanie 5 Wzorce behawioralne React (JavaScript/Typescript)**](05_wzorce_bechawioralne)

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Uslugi, Zamowienia oraz Płatności. Zamówienia oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Uslugach powinniśmy pobierać dane o dostępnych usługach z aplikacji serwerowej. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

✅ 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej - [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/90fd52462e6bee166218b9ca84310fc8f3f81961)

✅ 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing - [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/b3682d9da2ea6c47741e7ff467cc6e0986fcdd96)

✅ 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks - [commit](https://github.com/apetor56/projektowanie_obiektowe/commit/b3682d9da2ea6c47741e7ff467cc6e0986fcdd96)

❌ 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose

❌ 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS
