# Projekt-Dokumentation

John Broder, Gabriel Bischof, Ensar Yildirim, Blentin Tosuni

Gruppenname: 3410

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| Datum | Version | Zusammenfassung |
| 08.11.2023| v0.1.0 | An diesem Tag haben wir mit der Dokumentation angefangen und uns eine Idee zu unserer Website gebildet. | 
|15.11.2023 | v0.2.0 | Wir haben mit einem Protoypen angefangen und das Design festgelegt.|
 |22.11.2023 | v0.3.0 | Wir haben mit dem Javascript Code der Seite begonnen.| 
|29.11.2023 | v0.4.0 | Wir haben Multiple Choice auf der Seite eingerichtet und mit der Eingabe Funktionen begonnen.|
 |6.12.2023 | v1.0.0 | An diesem Tag haben wir die Funktionalen Anforderungen fertiggestellt.|
 |13.12.2023 | v1.1.0 | An diesem Tag haben wir die Dokumentation und das Programm fertiggestellt und verbessert.|


## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist eine Web-Anwendung, in der wir ein Fussball Quiz programmieren werden.

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
| 10 | Funktional| kann|Als User möchte ich, dass ein Sound abgespielt wird, wenn ich die richtige Antwort anklicke oder eingebe, damit die Interaktion unterhaltsamer und aufregender wird und ich sofortiges Feedback zur Richtigkeit meiner Antwort erhalte.|





### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Frage             | Antwort auswählen      |Richtig oder Falsch |
| 2.1  |Frage     | Richtige Antwort             |Grün            |
| 3.1  |Frage     | Falsche Antwort             |Rot          |
| 4.1  |Frage   | Über Antwort gehen|schwarzer Hintergrund    |
| 5.1  |Frage fertig  | Auf Next klicken|Nächste Frage |
| 6.1  |Fragen fertig  |- |Punktzahl |
| 7.1  |Alle Fragen wurden beantwortet  |play again klicken |erste Frage erscheint|
| 8.1  |Frage wird angezeigt|- |Bild wird angezeigt |
| 9.1  |Frage wird angezeigt|Antwort eingeben |Richtig oder Falsch |
| 10.1  |Frage wird angezeigt|richtige Antwort |Sound wird abgespielt |

## 2 Planen


| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ------| --------- | -------------| -------------|
| 1.A  | 08.11.23 | Alle                              | Informieren                          | 150min  |
| 1.B  | 08.11.23 | Alle                              | Dokumentation starten                | 30min   |
| 1.C  | 15.11.23 | John Broder, Blentin Tosuni       | Dokumentation                        | 90min   |
| 2.A  | 15.11.23 | Ensar Yildirim, Gabriel Bischof   |Multiple choice                       | 180 min |
| 2.B  | 15.11.23 | John Broder, Blentin Tosuni       |Multiple choice                       | 90min   |
| 2.C  | 22.11.23 | Ensar Yildirim, Gabriel Bischof   |Multiple choice                       | 90 min  |
| 2.D  | 22.11.23 |  John Broder, Blentin Tosuni      |Antwort soll grün angestrichen werden.| 90 min  |
| 3.A  | 22.11.23 |  John Broder, Blentin Tosuni      |Antwort soll rot angestrichen werden. | 90 min  |
| 4.A  | 29.11.23 |  John Broder, Blentin Tosuni      |Hover                                 | 90 min  |
| 5.A  | 29.11.23 |  Ensar Yildirim, Gabriel Bischof  |Next anklicken                        | 90 min  |
| 6.A  | 29.11.23 |  Ensar Yildirim, Gabriel Bischof  |Punktzahl anzeigen lassen             | 90min   |
| 7.A  | 29.11.23 |  Blentin Tosuni, John Broder      |Spiel neu starten                     | 90 min  |
| 8.A  | 06.12.23 |  Ensar Yildirim, John Broder      |Bild                                  | 180 min |
| 9.A  | 06.12.23 |  Blentin Tosuni, Gabriel Bischof  |Eingabe einer Antwort                 | 180 min |
| 9.B  | 13.12.23 |  Alle                             | EIngabe einer Antwort                | 90 min  |
| 10.A | 13.12.23 |  Alle                             | Sound Ausgabe bei richtiger Antwort  | 120 min |
| 1.D  | 13.12.23 |  Alle                             | Dokumetation beenden                 | 30 min  |


## 3 Entscheiden



## 4 Realisieren


| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |22.11.2023|Alle|150 min|140 min|
| 1.B  |22.11.2023|alle|30 min|50 min|
|1.C  |22.11.2023|John Broder, Ensar Yildirim|90 min|80 min|
|2.A|22.11.2023|John Broder, Gabriel Bischof|180min|200 min|
|2.B|29.11.2023|Blentin Tosuni, Ensar Yildirim|90min|80 min|
|2.C|29.11.2023|Blentin Tosuni, Gabriel Bischof|90 min|100 min|
|2.D|29.11.2023|Alle|90 min|75 min|
| 3.A  |29.11.2023|Alle|90 min|110 min|
| 4.A  |29.11.2023|alle|90 min|100 min|
|5.A  |06.12.2023|John Broder, Ensar Yildirim|90 min|110 min|
|6.A|06.12.2023|John Broder, Gabriel Bischof|90 min|75 min|
|7.A|06.12.2023|Blentin Tosuni, Ensar Yildirim|90min|80 min|
|8.A|06.12.2023|Blentin Tosuni, Gabriel Bischof|180 min|160 min|
|9.A|13.12.2023|Alle|180 min|180 min|
|9.B|13.12.2023|Blentin Tosuni, Ensar Yildirim|90min|75 min|
|10.A|13.12.2023|Blentin Tosuni, Gabriel Bischof|120min|100 min|
|1.D|13.12.2023|Alle|30 min|45 min|  
## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
|1.1|1.11.2023|O.K|John Broder|
|2.1|1.11.2023|O.K|John Broder|
|3.1|1.11.2023|O.K|John Broder|
|4.1|1.11.2023|O.K|John Broder|
|5.1|1.11.2023|O.K|John Broder|
|6.1|1.11.2023|O.K|John Broder|
|7.1|1.11.2023|O.K|John Broder|
|8.1|1.11.2023|O.K|John Broder|
|9.1|1.11.2023|O.K|John Broder|
|10.1|1.11.2023|nicht O.K|John Broder|



