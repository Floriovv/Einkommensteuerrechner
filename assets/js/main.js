function calc(){
  if (document.getElementById("taxyear").value == "2020") {
    if (document.getElementById("select-tarif").value == "grund") {
      if (document.getElementById("zvE").value < 9408) {
        document.getElementById("result").innerHTML = "Glückwunsch du hast so wenig verdient, dass du keine ESt zahlen musst!";
      } else if (document.getElementById("zvE").value > 9408, document.getElementById("zvE").value < 14532) {
        let x = document.getElementById("zvE").value;
        let y = (x - 9408) / 10000;
        let est = (972.87 * y + 1400) * y;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else if (document.getElementById("zvE").value > 9408, document.getElementById("zvE").value > 14532, document.getElementById("zvE").value < 57051) {
        let x = document.getElementById("zvE").value;
        let z = (x - 14532) / 10000;
        let est = (212.02 * z + 2397) * z + 972.79;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else if (document.getElementById("zvE").value > 9408, document.getElementById("zvE").value > 14532, document.getElementById("zvE").value > 57051, document.getElementById("zvE").value < 270500) {
        let x = document.getElementById("zvE").value;
        let est = 0.42 * x - 8963.74;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else {
        let x = document.getElementById("zvE").value;
        let est = 0.45 * x - 17078.74;
        document.getElementById("result").innerHTML += ~~est + " €";
      }
    } else {
      let split = document.getElementById("zvE").value;
      split = split / 2;
      if (split < 9408) {
        document.getElementById("result").innerHTML = "Glückwunsch du hast so wenig verdient, dass du keine ESt zahlen musst!"
      } else if (split > 9408, split < 14532) {
        let y = (split - 9408) / 10000
        let est = (972.87 * y + 1400) * y
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      } else if (split > 9408, split > 14532, split < 57051) {
        let z = (split - 14532) / 10000;
        let est = (212.02 * z + 2397) * z + 972.79;
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      } else if (split > 9408, split > 14532, split > 57051, split < 270500) {
        let est = 0.42 * split - 8963.74;
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      } else {
        let est = 0.45 * split - 17078.74
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      }
    } 
  } else if (document.getElementById("taxyear").value == "2019") {
    if (document.getElementById("select-tarif").value == "grund") {
      if (document.getElementById("zvE").value < 9168) {
        document.getElementById("result").innerHTML = "Glückwunsch du hast so wenig verdient, dass du keine ESt zahlen musst!";
      } else if (document.getElementById("zvE").value > 9168, document.getElementById("zvE").value < 14254) {
        let x = document.getElementById("zvE").value;
        let y = (x - 9168) / 10000;
        let est = (980.14 * y + 1400) * y;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else if (document.getElementById("zvE").value > 9168, document.getElementById("zvE").value > 14254, document.getElementById("zvE").value < 55960) {
        let x = document.getElementById("zvE").value;
        let z = (x - 14254) / 10000;
        let est = (216.16 * z + 2397) * z + 965.58;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else if (document.getElementById("zvE").value > 9168, document.getElementById("zvE").value > 14254, document.getElementById("zvE").value > 55960, document.getElementById("zvE").value < 265326) {
        let x = document.getElementById("zvE").value;
        let est = 0.42 * x - 8780.90;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else {
        let x = document.getElementById("zvE").value;
        let est = 0.45 * x - 16740.68;
        document.getElementById("result").innerHTML += ~~est + " €";
      }
    } else {
      let split = document.getElementById("zvE").value;
      split = split / 2;
      if (split < 9168) {
        document.getElementById("result").innerHTML = "Glückwunsch du hast so wenig verdient, dass du keine ESt zahlen musst!";
      } else if (split > 9168, split < 14254) {
        let y = (split - 9168) / 10000;
        let est = (980.14 * y + 1400) * y;
        est = est * 2;
        document.getElementById("result").innerHTML += ~~est + " €"
      } else if (split > 9168, split > 14254, split < 55960) {
        let z = (split - 14254) / 10000;
        let est = (216.16 * z + 2397) * z + 965.58;
        est = est * 2;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else if (split > 9168, split > 14254, split > 55960, split < 265326) {
        let est = 0.42 * split - 8780.90;
        est = est * 2;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else {
        let est = 0.45 * split - 16740.68
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      }
    } 
  } else if (document.getElementById("taxyear").value == "2018") {
    if (document.getElementById("select-tarif").value == "grund") {
      if (document.getElementById("zvE").value < 9000) {
        document.getElementById("result").innerHTML = "Glückwunsch du hast so wenig verdient, dass du keine ESt zahlen musst!";
      } else if (document.getElementById("zvE").value > 9000, document.getElementById("zvE").value < 13996) {
        let x = document.getElementById("zvE").value;
        let y = (x - 9000) / 10000;
        let est = (997.80 * y + 1400) * y;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else if (document.getElementById("zvE").value > 9000, document.getElementById("zvE").value > 13996, document.getElementById("zvE").value < 54949) {
        let x = document.getElementById("zvE").value;
        let z = (x - 13996) / 10000;
        let est = (220.13 * z + 2397) * z + 948.49;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else if (document.getElementById("zvE").value > 9000, document.getElementById("zvE").value > 13996, document.getElementById("zvE").value > 54949, document.getElementById("zvE").value < 260532) {
        let x = document.getElementById("zvE").value;
        let est = 0.42 * x - 8621.75;
        document.getElementById("result").innerHTML += ~~est + " €";
      } else {
        let x = document.getElementById("zvE").value;
        let est = 0.45 * x - 16437.70;
        document.getElementById("result").innerHTML += ~~est + " €";
      }
    } else {
      let split = document.getElementById("zvE").value;
      split = split / 2;
      if (split < 9000) {
        document.getElementById("result").innerHTML = "Glückwunsch du hast so wenig verdient, dass du keine ESt zahlen musst!"
      } else if (split > 9000, split < 13996) {
        let y = (split - 9000) / 10000
        let est = (997.80 * y + 1400) * y
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      } else if (split > 9000, split > 13996, split < 54949) {
        let z = (split - 13996) / 10000;
        let est = (220.13 * z + 2397) * z + 948.49;
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      } else if (split > 9000, split > 13996, split > 54949, split < 260532) {
        let est = 0.42 * split - 8621.75;
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      } else {
        let est = 0.45 * split - 16437.70
        est = est * 2
        document.getElementById("result").innerHTML += ~~est + " €"
      }
    } 
  }
}

function sorry(){
  document.getElementById("sorry").innerHTML = "habs leider nicht mehr geschafft den den Code aufzuräumen bzw es kürzer zu schreiben. Viel Spaß beim durchgucken ^^"
}
