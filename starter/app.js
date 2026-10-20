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
  console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta")');
  // TODO A5: dopisz pozostale kierunki i akcje oraz zasade kosztu.
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
  // TODO A4: switch(pokoj); opis zgodny ze stanem przedmiotow.
  console.log("Opis pokoju do uzupelnienia");
}

// SEKCJA B — RUCH
function idz(kierunek) {
  if (koniec) {
    console.log("Gra skonczona. Wpisz start() aby zagrac ponownie.");
    return;
  }
  else
    
      switch(kierunek)
      {
        case "prawo":
          if(pokoj < 4) 
          {
            pokoj++;
          }
          else 
          {
            console.log("Nie można iść w prawo. Jesteś w ostatnim pokoju.");
          }
          break;
        case "lewo":
            if(pokoj > 1) 
            {
              pokoj--;
            }
            else 
            {
              console.log("Nie można iść w lewo. Jesteś w pierwszym pokoju.");
            }
            break;
        default:
            console.log("Nieznany kierunek. Wpisz 'prawo' lub 'lewo'.");
        
  // TODO B4: zapisz poprawny pokoj, rozejrzyj(), zakonczTure().
  console.log("Ruch do uzupelnienia");
}
}
// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
{}
