# Week 6

## Neural Networks II

- Plaats code voor de opdracht van week 6 in deze folder.

De code voor deze opdracht is te vinden de folder week 6 in de map inleveropdracht.

- Beschrijf in dit document met een korte tekst wat je gedaan hebt.

In deze opdracht was het de bedoeling om een image classifier te maken die de predictions kon uitspreken. Hierbij stonden  de modellen die gebruikt werden om voorspellingen te maken al vast. 


<b> De modellen:</b>

Er was keuze tussen 3 modellen. Ik heb voor de 3 modellen opgezocht wat ze doen, hierbij kwam ik op het volgende uit: 
- Mobilenet: Dit model is bedoeld om te gebruiken op machines die zelf niet al teveel rekenkracht hebben (zoals telefoons). Met dit model kan je ingeladen afbeeldingen van een label voorzien. De labels geeft hij zelf en zijn gebaseerd en afkomstig uit de trainingsdata. 
- Darknet: Na mijn eigen research ben ik erachter gekomen dat dit model in real live objecten kan herkennen en labelen. Om dit model te gebruiken zou je dus bijvoorbeeld objecten voor je webcam moeten houden. 
Dit model gebruikt dezelfde classification als Mobilenet. Ook delen ze trainingsdata. Het enige verschil tussen deze twee models is dat de ene werkt met ingeladen afbeeldingen en de ander werkt met real live classification.  
- Doodlenet: Dit model kan simpele tekeningen herkennen en labelen. De trainingsdata bevat data die afkomstig is uit spelletjes. In deze spellen is het de bedoeling dat de spelers een tekening moeten maken van een trefwoord dat ze zelf hebben gekozen. Een potentieel nadeel hiervan is dat de tekeningen niet kloppen of niet duidelijk zijn. 

Het model dat ik heb gekozen is Mobilenet. De rede dat ik voor dit model heb gekozen is relatief simpel: mijn webcam kan niet worden opgestart in mijn browser. Hierdoor is het onhandig als ik gebruik maak van het Darknet model. Verder had ik een paar moeilijkheden bij het gebruiken van Doodlenet, waardoor ik heb gekozen voor Mobilenet. 

<b>Mijn idee</b>

Mijn ingeleverde opdracht bevat de code voor een simpele game. De gebruiker kan plaatjes inladen en de machine vervolgens laten raden wat er is ingeladen. De machine spreekt vervolgens de prediction uit. Hierna kan de gebruiker aangeven of het antwoord goed of fout is. Als het goed is geraden krijgt de machine er een punt bij, anders gaat er een punt af. Bij een goed én fout antwoord heeft de machine iets te zeggen als commentaar. 

Los van het feit dat ik het model erg leuk vind, is het naar mijn mening niet erg goed. Hij classified de afbeeldingen bijna nooit correct en hij zit er vaak ook compleet naast. Als er afbeeldingen worden ingeladen die personen bevatten, wordt er geclassified op kleding. Vaak zijn deze dan wel correct. Maar als er dieren worden ingeladen zijn deze vaker fout dan goed. Ik denk dat dit komt door de trainingsdata die er is gebruikt. Volgens de informatie op de site, zijn er 15mln afbeeldingen gebruikt om het model te trainen. Deze afbeeldingen zijn dus de referenties van het model. Als deze afbeeldingen verkeerd gelabeld, onscherp of anders zijn dan de jouwe, zal het minder accuraat zijn. Ook kan het zijn dat jouw ingeladen afbeelding niet echt te herkennen is voor het model, dus kiest het elementen uit de afbeelding die het wel herkent. Zo werd er een kinderfoto van mijzelf gezien als een magnetron-oven. 

<b>Game UI</b>

Ik heb geprobeerd om mijn idee als spel over te laten komen doordat er iets grappigs wordt gezegd op 2 momenten:  
- Als je aangeeft dat er goed/fout is geraden
- Als er een prediction wordt gedaan. 
Ook wordt er een score bijgehouden. 

Jammer genoeg heb ik geen tijd gehad om er CSS omheen te bouwen. Hierdoor ziet het er erg saai uit. 