var funFacts = [
    "Katter har 32 muskler i hvert øre.",
    "Honningsirup aldri går ut på dato.",
    "Polarbjørner er venstrehendte.",
    "Hummerens blod er blått på grunn av kobberforbindelsene i det.",
    "En struts øye er større enn hjernen.",
    "Mennesket har færre gener enn en potet.",
    "Kortest mulig fulle navn i Norge er Å Å.",
    "Honning er det eneste matproduktet som aldri blir dårlig.",
    "En blåhvals hjerte er stort nok til å svømme gjennom dets blodårer.",
    "Bananer er faktisk bær, mens jordbær ikke er det."
  ];
  
  // Sjekker om det er lagret funfacter i localStorage
  if (localStorage.getItem("funFacts")) {
    funFacts = JSON.parse(localStorage.getItem("funFacts"));
  } else {
    saveFunFacts(); // Lagrer standard funfacts i localStorage hvis det ikke finnes noen lagrede funfacts
  }
  
  function generateRandomFact() {
    var randomIndex = Math.floor(Math.random() * funFacts.length);
    var fact = funFacts[randomIndex];
    document.getElementById("fun-fact-text").textContent = fact;
  }
  
  function addFact() {
    var factInput = document.getElementById("new-fact-input");
    var newFact = factInput.value.trim();
  
    if (newFact !== "") {
      funFacts.push(newFact);
      factInput.value = "";
      saveFunFacts();
      alert("Ny Fun Fact er lagt til!");
    }
  }
  
  function saveFunFacts() {
    localStorage.setItem("funFacts", JSON.stringify(funFacts));
  }
  
  function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }
  
  var funFactBtn = document.getElementById("fun-fact-btn");
  funFactBtn.addEventListener("click", generateRandomFact);
  
  var addFactBtn = document.getElementById("add-fact-btn");
  addFactBtn.addEventListener("click", addFact);
  