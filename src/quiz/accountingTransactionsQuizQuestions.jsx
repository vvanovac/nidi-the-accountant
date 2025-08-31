const accountingTransactionsQuizQuestions = [
  {
    id: 1,
    title:
      'Skupština dioničara donijela je odluku o pokriću akumuliranog gubitka i to iz dobiti izvještajnog perioda. Ostatak dobiti se prenosi u zakonske rezerve.',
    relatedText: ['Dobit izvještajnog perioda iznosi 120.000 KM.'],
    instructions:
      'Promjenu proknjižiti za sva tri slučaja, odnosno kada je gubitak manji, jednak ili veći od dobiti iz izvještajnog perioda.',
    test: 'Dobrinja 2020',
    transaction: 3,
  },
  {
    id: 2,
    title:
      'Unaprijed smo platili zakup za 50 m² poslovnog prostora za prvi kvartal tekuće godine u visini od 8 KM/m² + PDV mjesečno.',
    test: 'Dobrinja 2020',
    transaction: 8,
  },
  {
    id: 3,
    title:
      'Troškovi projektovanja proizvodne hale prema fakturi arhitektonskog biroa glase na 5.850 KM sa uračunatim PDV-om. Izvršeno je tekuće odražavanje opreme i primljena je faktura na iznos 200 KM + PDV. Dobavljač je utrošio naše rezervne dijelove sa skladišta.',
    test: 'Dobrinja 2020',
    transaction: 9,
  },
  {
    id: 4,
    title:
      'Kupljene su obveznice izdate od preduzeća "BOND" nominalne vrijednosti 200.000 KM. Obveznice su izdate na rok od tri godine uz mjesečnu kamatu od 500 KM. Kamata za mjesec januar je dospjela i naplaćena.',
    test: 'Dobrinja 2020',
    transaction: 16,
  },
  {
    id: 5,
    title:
      'Nabavljeno je i uskladišteno 10 komada bušilica pojedinačne nabavne vrijednosti 150 KM + PDV. Na osnovu izdatnice u upotrebu je izdato 6 komada ručnih bušilica (50% indirektna metoda).',
    test: 'Bobby 2022',
    transaction: 2,
  },
  {
    id: 6,
    title:
      'Skupština je donijela odluku o raspodjeli dobiti iz izvještajnog perioda i to: pokriva se gubitak ranijeg perioda, u rezerve se izdvaja 15.000 KM, dok ostatak dobiti ostaje neraspoređen.',
    relatedText: ['Dobit izvještajnog perioda iznosi 463.000 KM'],
    test: 'Bobby 2022',
    transaction: 8,
  },
  {
    id: 7,
    title: 'Popisom imovine utvrđen je višak gotovine 500 KM.',
    test: 'Bobby 2022',
    transaction: 9,
  },
  {
    id: 8,
    title: 'Mjenica je realizovana.',
    relatedText: ['Primljene mjenice iznose 6.000 KM.'],
    test: 'Bobby 2022',
    transaction: 9,
  },
  {
    id: 9,
    title:
      'Prodata je mašina nabavne vrijednosti 30.000 KM, otpisane vrijednosti 12.000 KM kupcu "Lex" za 18.000 KM + PDV.',
    test: 'Bobby 2022',
    transaction: 13,
  },
  {
    id: 10,
    title:
      'Radnik je podnio obračun troškova službenog puta koji je trajao 6 dana. Dnevnice iznose 25 KM po danu, a troškovi smještaja 250 KM. Razlika je likvidirana.',
    test: 'Bobby 2022',
    transaction: 14,
  },
  {
    id: 11,
    title:
      'Od dobavljača "R&S" kupljeno je 100 kalendara sa logom preduzeća po jediničnoj cijeni od 3,50 KM i 300 olovaka sa logom preduzeća po jediničnoj cijeni od 0,50 KM. Dobavljač nije u sistemu PDV-a. Kalendari i olovke su isti dan podijeljeni klijentima i radnicima.',
    test: 'Bobby 2022',
    transaction: 15,
  },
  {
    id: 12,
    title:
      'Skupština dioničara donijela je odluku o pokriću gubitka izvještajnog perioda i to u cjelokupnom iznosu iz zakonskih rezervi. Izvršena je dokapitalizacija i uspješno je emitovano 5.000 dionica i naplaćeno 60.000 KM na transakcijski račun.',
    relatedText: [
      'Zakonske rezerve iznose 150.000 KM',
      'Gubitak izvještajnog perioda iznosi 40.000',
      'Dionički kapital iznosi 500.000 KM',
    ],
    test: 'Ispitni zadatak 1',
    transaction: 3,
  },
  {
    id: 13,
    title:
      'Stigla je faktura za utrošeni plin za decembar 2022. godine u iznosu od 4.000 KM + PDV i faktura za utrošenu vodu iz prethodne godine na iznos 5.000 KM + PDV.',
    relatedText: ['Datum iz zadatka je 31.12.2022.', 'Obračunati, a neplaćeni troškovi plina iznose 5.000 KM'],
    test: 'Ispitni zadatak 1',
    transaction: 7,
  },
  {
    id: 14,
    title:
      'Osiguravajuće društvo nam je umanjilo premiju osiguranja za 5% i poslalo knjižnu obavijest za preostali period plaćenog osiguranja.',
    relatedText: ['Unaprijed plaćeni troškovi osiguranja za 24 mjeseca iznose 36.000 KM'],
    test: 'Ispitni zadatak 1',
    transaction: 9,
  },
  {
    id: 15,
    title:
      'Protiv kupca "HydePark" pokrenut je spor zbog odbijanja da plati dug. Procjena advokata je da će preduzeće djelimično izgubiti spor pa je izvršen otpis 10% potraživanja kao nenaplativog.',
    relatedText: ['Kupcu "HydePark" smo prodali proizvode u vrijednosti od 57.798 KM.'],
    test: 'Ispitni zadatak 1',
    transaction: 13,
  },
  {
    id: 16,
    title: 'Vansudskom nagodbom dogovoreno je da kupac "HydePark" uplati cjelokupni iznos duga, što je kupac i učinio.',
    relatedText: ['Kupcu "HydePark" smo prodali proizvode u vrijednosti od 57.798 KM.'],
    test: 'Ispitni zadatak 1',
    transaction: 15,
  },
  {
    id: 17,
    title: 'Prodat je građevinski objekat iz vanbilansne evidencije u iznosu od 10.000 KM.',
    test: 'Ispitni zadatak 1',
    transaction: 15,
  },
  {
    id: 18,
    title:
      'Od preduzeća "29. novembar" na poklon smo dobili pet računara i software - knjigovodstveni program. Procijenjena fer vrijednost software-a je 2.000 KM, a fer vrijednost za pet računara 5.000 KM. Sredstva su stavljena u upotrebu.',
    test: 'Ispitni zadatak 1',
    transaction: 16,
  },
  {
    id: 19,
    title: 'Iz blagajne je isplaćen novac za račun za večeru s poslovnim partnerom u iznosu od 117 KM s PDVom.',
    test: 'Ispitni zadatak 2',
    transaction: 5,
  },
  {
    id: 20,
    title: 'Za tri radnika preduzeće je preko blagajne kupilo mjesečne karte u iznosu od 60 KM + PDV po jednoj karti.',
    test: 'Ispitni zadatak 2',
    transaction: 5,
  },
  {
    id: 21,
    title:
      'Zbog neodgovarajuće funkcije, donesena je odluka da se računari nabavne vrijednosti 5.000 KM i ispravke vrijednosti 90% otpišu. Računari su preneseni u vanbilansnu evidenciju do konačnog otuđenja.',
    test: 'Ispitni zadatak 2',
    transaction: 9,
  },
  {
    id: 22,
    title:
      'U požaru je izgorjela oprema nabavne vrijednosti 15.000 KM i neotpisane vrijednosti 5.000 KM. Požarom je zahvaćen i gotov novac u blagajni. Oprema i gotov novac su osigurani u osiguravajućem društvu "SunRise" i osiguravajuće društvo prihvata naknadu štete u visini od 7.000 KM.',
    test: 'Ispitni zadatak 2',
    transaction: 12,
  },
  {
    id: 23,
    title: 'Računari koji su prethodno otpisani 100%, prodati su za 1.000 KM + PDV.',
    test: 'Ispitni zadatak 2',
    transaction: 13,
  },
  {
    id: 24,
    title: 'Izdato je u upotrebu 50% zaliha sitnog inventara (metoda otpisa 50% direktno).',
    instructions:
      'Za ovu promjenu, uzeti proizvoljan iznos za ukupno stanje sitnog inventara. U stvarnom zadatku, potražiti konto Sitan inventar radi utvrđivanja stvarnog stanja.',
    test: 'Ispitni zadatak 2',
    transaction: 13,
  },
  {
    id: 25,
    title:
      'Primljena je uplata od preduzeća "Vader" za iznajmljivanje 100 m² poslovnog prostora za cijelu 2023. godinu. Cijena mjesečnog zakupa iznosi 20 KM/m² + PDV.',
    instructions: 'Proknjižiti i prihode od zakupa za 1. mjesec',
    test: 'Ispitni zadatak 2',
    transaction: 17,
  },
  {
    id: 26,
    title:
      'Izvršeno je rezervisanje za troškove popravke proizvoda u garantnom roku na procijenjeni iznos od 10.000 KM. Faktura za advokatske usluge glasi na 3.000 KM + PDV.',
    test: 'Ispitni zadatak 2',
    transaction: 18,
  },
  {
    id: 27,
    title: 'Sud je donio odluku da je dužnik "URAL" dužan platiti 11.000 KM. Dužnik je postupio po odluci suda.',
    relatedText: [
      'Kupac "URAL" nam duguje iznos od 12.000 KM.',
      'Ispravka vrijednosti potraživanja od kupaca iznosi 6.000 KM',
    ],
    instructions:
      'Pokušaj uraditi promjenu kada je situacija drugačija, odnosno kada će naše preduzeće nakon odluke suda biti u gubitku/dobitku (suprotno od datog slučaja) ili "na nuli".',
    test: 'Ispitni zadatak 3',
    transaction: 2,
  },
  {
    id: 28,
    title: 'Izvršena je uplata upisanog neuplaćenog kapitala u cijelosti.',
    instructions: 'Za ovu promjenu, uzeti proizvoljan iznos za ukupno stanje upisanog neuplaćenog kapitala.',
    test: 'Ispitni zadatak 3',
    transaction: 6,
  },
  {
    id: 29,
    title:
      'Novosagrađeni građevinski objekat izgorio je uslijed požara. Osiguravajuće društvo priznaje štetu od 115.000 KM.',
    instructions:
      'Za ovu promjenu, uzeti proizvoljan iznos za ukupno stanje građevinskih objekata (koji bi trebao biti veći od 115.000 KM).',
    test: 'Ispitni zadatak 3',
    transaction: 14,
  },
  {
    id: 30,
    title: 'Popisom imovine utvrđen je višak 10 autoguma fer vrijednosti 1.500 KM.',
    test: 'Ispitni zadatak 3',
    transaction: 17,
  },
];

export default accountingTransactionsQuizQuestions;
