# Projekt-Dokumentation

John Broder, Gabriel Bischof, Ensar Yildirim, Blentin

Gruppenname: 3410

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|| 0.0.1   ||


## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist eine Web-Anw   endung, in der wir ein Fussball Quiz programmieren werden.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
|1| Funktional | Muss | Als User möchte ich Fussballfragen mit multiple choice beantworten, damit ich eine Auswahl an Antwortmöglichkeiten habe.|
|2| Funktional| Muss | Als User möchte ich, dass die richtige Antwort grün markiert wird, damit ich sofort sehen kann, welche Antwort korrekt ist und mein Verständnis der Fragen und Antworten verbessern kann. Dies erleichtert das Lernen und die Selbstüberprüfung.|
|3| Funktional| Muss| Als User möchte ich, dass beim Klicken der falschen Antwort die Antwort rot markiert wird, damit ich leicht erkennen kann, welche Antwort ich ausgewählt habe und welche korrekt ist. Dies hilft mir, meine Antworten zu überprüfen und zu lernen.|
|4| Funktional| Qualität| Als User möchte ich, dass beim hovern über eine Antwort die Antwort einen schwarzen Hintergrund bekommt, damit ich  die ausgewählte Antwort besser erkennen und hervorheben kann.|
|5|funktional| muss | Als User möchte ich, dass ich nach Auswahl der Multiple-Choice-Fragen "Next" anklicken kann, um so zur nächsten Frage zu gelangen, damit ich das Quiz effizient durchgehen kann.|
| 6| Funktional | Muss |Als User möchte ich meine Punktzahl am Ende aller Fragen sehen, damit ich weiss wie gut mein Wissen über Fussball ist.|
|7| Funktional|muss|Als User möchte ich die Möglichkeit haben, das Quiz noch einmal zu spielen, indem ich auf "Play Again" klicke, damit ich mein Wissen weiter verbessern und mich erneut herausfordern kann.|
| 8 | Funktional | kann | Als User möchte ich ein Bild bei einigen Fragen sehen, damit ich visuelle Informationen zur Verfügung habe, um die Frage besser zu verstehen oder genauer beantworten zu können.| 
| 9   |  Funktional     | Muss |Als User möchte ich einige Fußballfragen mit einer Eingabe beantworten können, damit ich meine Kenntnisse und mein Wissen über Fußball auf die Probe stellen kann.|


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Frage             | Antwort auswählen      |Richtig oder Falsch |
| 2.1  |Frage     | Richtige Antwort             |Grün            |
| 3.1  |Frage     | Falsche Antwort             |Rot          |
| 4.1  |Frage   | Über Antwort gehen|schwarzer Hintergrund    |
| 5.1  |Frage fertig  | Auf Next klicken|Nächste Frage |
| 6.1  |Fragen fertig  |- |Punktzahl |
| 7.1  |  | | |
| 8.1  |  | | |


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A      | 20.09 | John Broder                       | Domkumentation starten                  | 30min   |
| 2.A      | 20.09 | Ensar,Yildirim  Gabriel Bischof   |  | 30 min  |


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
