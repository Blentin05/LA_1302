# Projekt-Dokumentation

John Broder, Gabriel Bischof, Ensar Yildirim, Blentin

Gruppenname: 3410

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|20.09.2023| 0.0.1   | Heute haben wir uns ein Projekt ausgesucht und uns darüber informiert, ausserdem haben wir die Projektdokumentation bis zum Planen fertiggestellt.|
|18.10.2023| 0.0.2|  Heute haben wir die API implementiert, allerdings mussten wir eine neue API auswählen da, die alte nicht gut war.|
|25.10.2023|0.0.3|Heute haben wir mit dem GUI angefangen|

## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist eine Web-Anwendung, in der wir ein Fussball Quiz programmieren werden.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |  Funktional     | Muss | Als ein User möchte ich den Wert meiner Aktie wissen, damit ich weiss, ob ich einen möglichen Gewinn erzielt habe.|
| 2    |  Funktional     | Muss | Als ein User möchte ich den Verlauf des Wertes grafisch angezeigt bekommen, damit ich sie mit anderen Aktien vergleichen kann. |   
| 3    |  Funktional     | Muss | Als ein User möchte ich immer den neusten Stand der Aktie haben, damit ich immer auf dem neusten Stand der Dinge bin.|
| 4    |  Qualität       | Kann | Als Benutzer möchte ich ein Portfolio meiner Aktien erstellen und verwalten, damit ich alle meine Investitionen an einem Ort sehen kann.  |
| 5    |  Rand           | Kann | Als Benutzer möchte ich Benachrichtigungen erhalten, wenn eine meiner Aktien einen bestimmten Wert erreicht, damit ich schnell Kauf- oder Verkaufsentscheidungen treffen kann.|
| 6    |  Rand           | Kann | Als Benutzer möchte ich aktuelle Nachrichten über meine Aktien sehen, damit ich auf dem Laufenden bleibe und schnell Entscheidungen treffen kann.|


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Programm ist geöffnet |  ---------------               | Wert der Aktie wird angezeigt               |
| 2.1  | Aktie wurde angewählt    | Grafisch anzeigen              | Der Wert wird Grafisch angezeigt            |
| 3.1  |Programm wird neu gestartet |------------------              | Aktienkurse werden neu geladen              |
| 4.1  |Programm ist geöffnet      | Ordner erstellen wird geklickt | Ordner wird erstellt                        |
| 4.2  |Ordner ist geöffnet       | Aktien werden ausgewählt       | Ordner mit den gewählten Aktien ist erstellt|
| 5.1  |Programm ist geschlossen   | -----------------------------  | Nachricht wird gesendet                     |
| 6.1  |Programm ist geöffnet     | Nachrichten sehen, anklicken    | Aktuelle Nachrichten werden ausgegeben      |

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A      | 20.09 | John Broder                       | Domkumentation starten                  | 30min   |
| 2.A      | 20.09 | Ensar,Yildirim  Gabriel Bischof   | API finden                              | 30 min  |
| 2.B/ 4.A | 18.10 | Alle                              | API implementieren                      | 150 min |
| 1.B      | 18.10 | Gabriel Bischof                   | Dokumentation fortfahren                | 30min   |
| 3.A      | 25.10 | John Broder, Ensar Yildirim       | Grafik erstellen und Anzeigen lassen    | 120 min |
| 5.A      | 25.10 | Gabriel Bischof                   | Portfolio der Aktien erstellen          | 90 min  |
| 1.C      | 25.10 | Ensar, Yildirim                   | Dokumentation fortfahren                | 30min   |
| 6.A      | 01.11 | John Broder, Gabriel Bischof      | Informationen zur Aktie erstellen.      | 50 min |
| 7.A      | 01.11 | Ensar Yildirim                    | Nachrichten zur Aktie anzeigen lassen.  | 60 min  |
| 8.A      | 01.11 | Alle                              | Portfolioeintrag                        | 90 min  |
| 1.D      | 01.11 | Gabriel Bischof                   | Dokumentation beenden                   | 30min   |

|
Total: 590 min

## 3 Entscheiden

Wir hatten schon eine API haben dann aber in der Session erfahren, dass es bessere APIs gibt und so eine neue gesucht.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 2.A  |15.9.2023|Alle|30min|60min|
| 2.B  |18.10.2023|alle|150min|180min|
|3.A  |18.10.2023|John Broder, Ensar Yildirim|120 min|-|
|4.A|25.09.2023|John Broder, Ensar Yildirim|150min|180min|
|5.A|25.09.2023|John Broder, Ensar Yildirim|90min|-|
|6.A|25.09.2023|John Broder, Ensar Yildirim|120min|-|
|7.A|25.09.2023|John Broder, Ensar Yildirim|60min|-|


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
|2.1|1.11.2023|O.K|John Broder|
|3.1|1.11.2023|nicht O.K|John Broder|
|4.1|1.11.2023|O.K|John Broder|
|5.1|1.11.2023|nicht O.K|John Broder|
|6.1|1.11.2023|nicht O.K|John Broder|
|7.1|1.11.2023|nicht O.K|John Broder|

Wir konnten nicht alle unsere Ideen in der Zeit, die 
wir gehabt haben umsetzen, daher sind viel Testfälle nicht O.K.
