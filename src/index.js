/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

class Calculator {
  calculatorScreen = document.querySelector("#calculator .screen");
  equalsBtn = document.querySelector("#calculator .eval");
  historyCheck = document.querySelector(".history");
  clearBtn = document.querySelector("#calculator .clear");
  childs = document.querySelector("#calculator .child");

  constructor(historyList = []) {
    this.historyList = historyList;
    this.init();
  }
  init() {
    this.bindHistory();
    this.bindClearHistory();
    this.bindClearText();
    this.bindEquals();
    this.keyListener();
  }
  print(val) {
    this.calculatorScreen.innerHTML += val;
  }
  keyListener() {
    document.querySelectorAll("#calculator span").forEach((key) => {
      if (key.innerText !== "=" && key.innerText !== "C") {
        key.addEventListener("click", (e) => this.print(e.target.innerText));
      }
    });
  }
  bindHistory() {
    this.equalsBtn.addEventListener("click", () => this.history());
  }
  bindEquals() {
    this.equalsBtn.addEventListener("click", () => this.equals());
  }
  bindClearHistory() {
    this.clearBtn.addEventListener("dblclick", () => this.clearHistory());
  }
  bindClearText() {
    this.clearBtn.addEventListener("click", () => this.clearText());
  }

  history() {
    this.historyList.push(this.calculatorScreen.innerHTML);
    this.historyCheck.innerHTML += `<p>${this.calculatorScreen.innerHTML}</p>`;
  }
  equals() {
    this.calculatorScreen.innerHTML = eval(
      this.calculatorScreen.innerHTML.replaceAll("x", "*")
    );
  }
  clearHistory() {
    this.historyList = [];
    this.historyCheck.innerHTML = "";
  }
  clearText() {
    this.calculatorScreen.innerHTML = "";
  }
}

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/

let newCalculator = new Calculator();

//this code listen to every key on the calculator and add the value on the screen

// Implement here the event when the = key is pressed
