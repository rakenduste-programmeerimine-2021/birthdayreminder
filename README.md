<p align="center">
  <a href="#" rel="noopener">
    <img src="readme_file_pics/logo.png" alt="Project logo">
  </a>
</p>

<p align="center">
  BirthdayReminder on tore app, mis aitab hoida Sinu sõprade jt lähedaste sünnipäevi ühes kohas koos. 
  <br /> 
  Ei pea enam muretsema, et unustad sõpra õnnitleda. :relaxed:
    <p align="center">
      <strong>Autorid:</strong>
      <a href="https://github.com/anetevlu">@Anete Vaalu</a>
      ja
      <a href="https://github.com/AnneliP88">@Anneli Põldaru</a>
    </p>
</p>

<br />

![HomePage](readme_file_pics/homePage.jpg)

<br />

## Wireframe
https://app.uizard.io/p/98598791

<br />

## Funktsionaalsused:
* Kasutajaks registreerumise võimalus
* Sisse- ja väljalogimise võimalus
* Kui sisse ei logita siis pääsetakse ligi vaid:
  * avalehele (seal on ka rakenduse lühike tutvustus)
  * kasutajaks registreerimise lehele
  * sisselogimise lehele
  * 404 Page Not Found lehele
* Kasutaja saab:
  * vaadata vaid enda poolt sisestatud andmeid
  * lisada uusi sünnipäevalisi
  * muuta juba sisestatud sünnipäevaliste andmeid
  * kustutada sünnipäevalisi
  * e-maili peale meeldetuletuse, kui sõbra sünnipäev on kätte jõudnud
  * saata tänasele sünnipäevalisele e-maili
* Kasutaja saab valida, kas vaatab parasjagu:
  * tänaseid sünnipäevalisi
  * nädala jooksul tulevaid
  * või kõiki sünnipäevalisi
* Sünnipäevalisi saab ees- ja perekonnanime alusel:
  * järjestada*
  * filtreerida*
* Rakendusel on kohalduv disain (responsive)
> *Sõltub millist tabelit (todays / upcoming / all) parasjagu vaadatakse

<br />

## BirthdayReminder'i tutvustus
<details>
  <summary>
    <strong>
      <em>Klikka noolt, et näha animeeritud GIF-i</em>
    </strong>
  </summary>
    
  ![Tutvustus](Readme_file_pics/BirthdayReminderReview.gif)  
  
</details>

<br />

## Installeerimisjuhis
* Alustuseks kontrolli üle kas arvutis on järgnevad tehnoloogiad:
  * [Docker](https://www.docker.com/)
  * [NodeJs](https://nodejs.org/en/)
  * [MongoDB Compass](https://www.mongodb.com/products/compass)
1. Klooni repositoorium:
```sh
git clone https://github.com/rakenduste-programmeerimine-2021/birthdayreminder.git
```
2. Navigeeri `backend` kausta ning asenda `.env` failis olevate muutujate väärtused enda omadega!
```sh
cd birthdayreminder/backend
```
> JWT_SECRET - salasõna JSON Web Tokeni genereerimiseks  
> EMAIL_ADDRESS - Gmaili aadress, mille pealt tahad automaatseid e-maile saatma hakata  
> EMAIL_PASSWORD - Ära lisa siia Gmaili parooli, vaid genereeri eraldi ajutine [App password](https://support.google.com/accounts/answer/185833?hl=en)  
3. Navigeeri `local-dev` kausta  
```sh
cd birthdayreminder/local-dev

```
4. Installi vajalikud dependency'd (olles `local-dev` kaustas)
```sh
docker-compose run --rm --no-deps backend install
docker-compose run --rm --no-deps frontend install
```
5. Ja käivita teenused (olles `local-dev` kaustas)
```sh
docker-compose up -d
```
6. Rakendus on nüüd kättesaadav:
* Frontend - http://localhost:3000/  
* Backend - http://localhost:8082/  
7. Teenuste sulgemiseks:  
```sh
docker-compose stop
```

<br />

### Mongo DB Compass'iga ühendamiseks:
1. Ava MongoDB Compass
2. Kliki `Fill in connection fields individually` ning täida väljad:
3. Hostname: `localhost`
4. Port: `27017`
5. Authentication'iks määra: `Username / Password`
6. Username: `kasutaja`
7. Password: `birthday`
8. Kliki `Connect` nuppu

<br />

## Kasutatud tehnoloogiad
* JavaScript ja [React](https://reactjs.org/docs/create-a-new-react-app.html)
* JavaScript ja [NodeJs](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [MongoDB Compass](https://www.mongodb.com/products/compass)
* [Docker](https://www.docker.com/)
* [Ant Design](https://ant.design/)

<br />

## Logo, favicon jms pildimaterjal pärineb:
* https://favicon.io/
* https://pngtree.com/

<br />

## GIF-i loomiseks:
* https://www.screentogif.com/

<br />
