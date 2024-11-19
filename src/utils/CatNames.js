class CatNames {
    static names = [
      "Misia", "Filemon", "Mruczek", "Puszek", "Kicia",
      "Łatek", "Bąbel", "Felek", "Bazyl", "Florek",
      "Pędzel", "Groszek", "Kuleczka", "Kłaczek", "Śpioch",
      "Frytka", "Bułka", "Ciapek", "Ząbek", "Szkrab",
      "Plamka", "Maluch", "Kminek", "Korniszon", "Pieróg",
      "Chrupek", "Pączek", "Ryjek", "Ogonek", "Bigos",
      "Pusio", "Pchełka", "Lulek", "Szprotka", "Błysk",
      "Klapek", "Szyszka", "Brzdąc", "Leniuch", "Zgrzyt",
      "Pajda", "Łatek", "Bączek", "Rudy", "Fafik",
      "Bazyliszek", "Kufel", "Laluś", "Placka", "Drapak",
      "Kajtek", "Foch", "Kicia-Kotka", "Cwaniak", "Łapka",
      "Kotlet", "Burasek", "Cukierek", "Dzbanek", "Sierściuch",
      "Miziak", "Czesiek", "Złomek", "Pyza", "Miętus",
      "Fąfel", "Gucio", "Maniek", "Piksel", "Mleczko",
      "Siemka", "Drzemka", "Fryt", "Kotek-Botek", "Piórek",
      "Ciapuś", "Kapeć", "Brzusio", "Migdałek", "Krasnal",
      "Frodo", "Buras", "Plasterek", "Ryszardek", "Marchewka",
      "Tuptuś", "Śmieszek", "Dzidek", "Kropka", "Futrzak",
      "Piksel", "Serek", "Kajtuś", "Jadzia", "Tosiek"
    ];
  
    static getRandomName() {
      const randomIndex = Math.floor(Math.random() * this.names.length);
      return this.names[randomIndex];
    }
  }
  
  export default CatNames;
  