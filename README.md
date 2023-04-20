# Produktlistning Mio-övning

Denna övning gick ut på att skapa en React app som presenterar produktdata enligt kravlistan nedan.
Produktdatan hämtades från den lokala json-servern

## Tekniker jag har använt:
- Javascript  
- HTML  
- Styled Components
- Fetch API

## Kravlista:

    1. Det ska finnas en vy för att se alla produkter.
    2. Det ska finnas ett sök som går på produktnamn.
    3. Det ska gå att klicka in på en produkt för att få mer information.
    4. Om en kampanj är satt på en produkt så ska detta kampanjnamn visas 
     samt en beräkning av nytt pris baserat på kampanjens procentrabatt.
    5. En check kommer behöva finnas för följande:
      * Ett produktpris får inte understiga 0.
      * Visa inte produkt om bild inte finns.
      * Avrunda priser som har decimaler.

## Starta applikationen lokalt

Klona projektet

```bash
  git clone https://github.com/EmmaBjerknes/MioExercise-React.git
```

Navigera till projektmappen

```bash
  cd Mio.ReactExercise
```

Installera dependencies

```bash
  npm install
```

Starta servern

```bash
  npm run start
```


## API Referens

#### Hämta alla produkter

```http
  GET http://localhost:3001/products
```

#### Hämta en produkt

```http
  GET http://localhost:3001/products/${id}
```
