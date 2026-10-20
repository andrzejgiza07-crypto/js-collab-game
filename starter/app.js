// WSPOLNY KONTRAKT: nazwy zmiennych i funkcji uzgadnia caly zespol.
const MAKS_ENERGIA = 10;
let pokoj = 1;
let energia = MAKS_ENERGIA;
let karta = false;
let bezpiecznik = false;
let zasilanie = false;
let koniec = false;
let wygrana = false;

// SEKCJA 0 — GOTOWY SILNIK NAUCZYCIELA
function start() {
  pokoj = 1;
  energia = MAKS_ENERGIA;
  karta = false;
  bezpiecznik = false;
  zasilanie = false;
  koniec = false;
  wygrana = false;
  console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
  pomoc();
  rozejrzyj();
}

function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: " + energia);
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

// SEKCJA A — INFORMACJE I MAPA
function nazwaPokoju(numer) {
  // TODO A1: switch; zwroc nazwe pokoju jako tekst.
  switch (numer){
    case 1:
      return "Recepcja";
    case 2:
      return 'Magazyn';
    case 3:
      return 'Serwerownia'
    case 4:
      return 'Wyjście';
    default:
      return "Nieznane pomieszczenie";
  }

}


function pomoc() {
  console.log("=== POMOC: UCIECZKA Z SERWEROWNI ===");
  console.log("KOMENDY OGÓLNE:");
  console.log("start() - rozpocznij grę od nowa");
  console.log("pomoc() - wyświetl instrukcję");
  console.log("status() - sprawdź stan gry i energię");
  console.log("mapa() - wyświetl mapę pomieszczeń");
  console.log("rozejrzyj() - sprawdź otoczenie");

  console.log("RUCH:");
  console.log('idz("prawo") - przejdź do następnego pokoju');
  console.log('idz("lewo") - wróć do poprzedniego pokoju');

  console.log("AKCJE:");
  console.log('akcja("karta") - zabierz kartę w recepcji');
  console.log('akcja("bezpiecznik") - zabierz bezpiecznik w magazynie');
  console.log('akcja("napraw") - napraw zasilanie w serwerowni');
  console.log('akcja("wyjdz") - otwórz drzwi w pokoju wyjściowym');

  console.log("ZASADY GRY:");
  console.log("- Masz 10 jednostek energii na początku gry.");
  console.log("- Każdy poprawny ruch lub udana akcja kosztuje 1 energię.");
  console.log("- Niepoprawne komendy i niemożliwe akcje nie powinny kosztować energii.");
  console.log("- Aby wygrać, zdobądź kartę, zabierz bezpiecznik, napraw zasilanie i otwórz drzwi.");
  console.log("- Po przegranej wpisz start(), aby rozpocząć od nowa.");
}
function status() {
  console.log("Pokoj: ",nazwaPokoju(pokoj));
  console.log("Energia: ",energia);
  console.log("Karta: "+(karta ? "tak" : "nie"));
  console.log("bezpiecznik: "+(bezpiecznik ? "tak" : "nie"));
  console.log("Zasilanie: "+(zasilanie ? "tak" : "nie"));
  console.log("Stan gry: "+(wygrana ? "wygrales" : "podwujny chuj w dupe"));
  console.log("chuj ci w dupe");
}
function mapa() {
  for (let numer = 1; numer <= 4; numer = numer + 1) {
  console.log(numer,nazwaPokoju(numer));
  if(numer==pokoj){
    console.log("jestes tutaj")
  }
}
}
function rozejrzyj() {
  switch (pokoj) {
    case 1:
      console.log(karta ? "Karta została zabrana." : "Na biurku leży karta dostępu.");
      break;

    case 2:
      console.log(!bezpiecznik && !zasilanie
        ? "Na półce leży bezpiecznik."
        : bezpiecznik
          ? "Masz bezpiecznik w kieszeni."
          : "Bezpiecznik został zamontowany.");
      break;

    case 3:
      console.log(zasilanie
        ? "Zasilanie działa."
        : bezpiecznik
          ? "Możesz zamontować bezpiecznik i naprawić zasilanie."
          : "Brak zasilania. Potrzebujesz bezpiecznika.");
      break;

    case 4:
      console.log(karta && zasilanie
        ? "Możesz otworzyć drzwi!"
        : "Wyjście jest zamknięte. Potrzebujesz karty i działającego zasilania.");
      break;
  }
}

// SEKCJA B — RUCH

function idz(kierunek) {
  if (koniec) {
    console.log("Gra skonczona. Wpisz start() aby zagrac ponownie.");
    return;
  }

  let nastepnyPokoj = pokoj;

  switch (kierunek) {
    case "prawo":
      nastepnyPokoj = pokoj + 1;
      break;
    case "lewo":
      nastepnyPokoj = pokoj - 1;
      break;
    default:
      console.log('Nieznany kierunek. Wpisz "prawo" lub "lewo".');
      return;
  }

  if (nastepnyPokoj < 1 || nastepnyPokoj > 4) {
    console.log("Nie możesz iść w tym kierunku. Na drodze jest ściana.");
    return;
  }

  pokoj = nastepnyPokoj;
  rozejrzyj();
  zakonczTure();
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.

  // TODO C1: zablokuj akcje po koncu gry.
  if (koniec) {
    console.log("Gra jest już zakończona.");
    return;
  }
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  switch (co) {
    case "karta":
      if (pokoj !== 1 || karta) {
        console.log("Tutaj nie ma karty do zabrania.");
        return;
      }

      karta = true;
      console.log("Zabierasz karte.");
      break;

    case "bezpiecznik":
      if (pokoj !== 2 || bezpiecznik || zasilanie) {
        console.log("Nie możesz zabrać bezpiecznika.");
        return;
      }

      bezpiecznik = true;
      console.log("Zabierasz bezpiecznik.");
      break;

    case "napraw":
      if (pokoj !== 3 || !bezpiecznik || zasilanie) {
        console.log("Nie możesz naprawić zasilania.");
        return;
      }

      bezpiecznik = false;
      zasilanie = true;
      console.log("Naprawiasz zasilanie.");
      break;

    case "wyjdz":
      if (pokoj !== 4 || !karta || !zasilanie) {
        console.log("Nie możesz otworzyć drzwi.");
        return;
      }

      wygrana = true;
      koniec = true;
      console.log("Otwierasz drzwi i wygrywasz!");
      break;

    default:
      console.log("Nieznana akcja.");
      return;
  }

  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
  zakonczTure();
}


start();
{}
