class CatNames {
    static names = [
      "Misia", "Filemon", "Mruczek", "Puszek", "Kicia", "Łatek", "Bąbel", "Felek", 
      "Bazyl", "Florek", "Pędzel", "Groszek", "Kuleczka", "Kłaczek", "Śpioch", 
      "Frytka", "Bułka", "Ciapek", "Ząbek", "Szkrab", "Plamka", "Maluch", 
      "Kminek", "Korniszon", "Pieróg", "Chrupek", "Pączek", "Ryjek", "Ogonek", 
      "Bigos", "Pusio", "Pchełka", "Lulek", "Szprotka", "Błysk", "Klapek", 
      "Szyszka", "Brzdąc", "Leniuch", "Zgrzyt", "Pajda", "Bączek", "Rudy", 
      "Fafik", "Bazyliszek", "Kufel", "Laluś", "Placka", "Drapak", "Kajtek", 
      "Foch", "Cwaniak", "Łapka", "Kotlet", "Burasek", "Cukierek", "Dzbanek", 
      "Sierściuch", "Miziak", "Czesiek", "Złomek", "Pyza", "Miętus", "Fąfel", 
      "Gucio", "Maniek", "Piksel", "Mleczko", "Siemka", "Drzemka", "Fryt", 
      "Kotek-Botek", "Piórek", "Ciapuś", "Kapeć", "Brzusio", "Migdałek", 
      "Krasnal", "Frodo", "Buras", "Plasterek", "Ryszardek", "Marchewka", 
      "Tuptuś", "Śmieszek", "Dzidek", "Kropka", "Futrzak", "Piksel", "Serek", 
      "Kajtuś", "Jadzia", "Tosiek", "Łobuziak", "Świrus", "Chrupek", "Piegusek", 
      "Drago", "Śnieżka", "Piegus", "Rambo", "Felix", "Gacek", "Przytulak", 
      "Grubcio", "Ogonek", "Czaruś", "Rybka", "Młotek", "Łyżeczka", "Dyzio", 
      "Kasztan", "Pirat", "Rufus", "Gucio", "Kokos", "Melon", "Wafel", "Świstak", 
      "Tadzik", "Stefek", "Bubuś", "Gryfek", "Trufel", "Śmietanka", "Klejnot", 
      "Duduś", "Migotka", "Hrabia", "Sznurek", "Włóczykij", "Małgosia", 
      "Fikander", "Balbina", "Drapcio", "Karmelek", "Księżniczka", "Ciocia", 
      "Chochlik", "Miodek", "Brzoskwinka", "Lucuś", "Promyczek", "Szuwarek", 
      "Kleks", "Sosenka", "Łatek", "Burbon", "Gumiś", "Szarlotka", "Dynio", 
      "Zefirek", "Bajerek", "Śnieżek", "Kwiatuszek", "Figlarz", "Cynamon", 
      "Piksel", "Truskawek", "Orzeszek", "Karotka", "Fistaszek", "Klementynka", 
      "Mufinka", "Papryczka", "Łezka", "Pierniczek", "Węgielek", "Szaraczek", 
      "Migdałek", "Dymek", "Różyczka", "Skrzat", "Roksi", "Zulka", "Julek", 
      "Marzyciel", "Jarmuż", "Gwiazdka", "Kropusia", "Wiśnia", "Malinka", 
      "Kajka", "Czarnuś", "Łasiczka", "Cukiereczek", "Grzanka", "Biedronek", 
      "Słonecznik", "Biedronka", "Łapcio", "Zając", "Koziołek", "Krówka", 
      "Jabłuszko", "Słodziak", "Ciapulek", "Kleksik", "Smutek", "Paproch", 
      "Kłaczek", "Niteczka", "Skrzatka", "Kornik", "Bazylka", "Kozak", 
      "Karolek", "Śnieżynek", "Mgiełka", "Borówka", "Tosia", "Frania", 
      "Czaruś", "Okruszek", "Szarlotek", "Frykas", "Nutka", "Figiel", 
      "Szarlatan", "Piorun", "Lisek", "Balonik", "Radosny", "Puchatek"
    ];
  
    static getRandomName() {
        const randomIndex = Math.floor(Math.random() * this.names.length);
        console.log(
          `Random Index: ${randomIndex}, Random Name: ${this.names[randomIndex]}`
        );
        return this.names[randomIndex];
      }
    }
    
    export default CatNames;