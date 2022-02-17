class Calculator {
  #currentResult = undefined; //поточний (проміжний) результат для f обчислення
  #currentOperator = undefined; //поточний оператор для f обчислення
  #currentArgument = true; //стан дозволу на наступну операцію при наявності проміжного результату
  #inputString = '0'; //строка що передаеться для відображення результату
  #selectedOperator = ''; //'add','subtract','multiply','divide'
  #inputMemory = ''; //'equate','number' або один з #selectedOperator
  #inputSource; //елемент всього калькулятора по классу

  constructor(calcSourceTag) {
    this.#inputSource = document.querySelector(calcSourceTag);
  }

  #captureInput() {
    this.#inputSource.addEventListener('click', (e) => {
      //якщо натиснута цифра
      if (e.target.className === 'numpad') {
        //скидаються значення полів класу
        if (this.#inputMemory === 'equate') {
          this.#reset();
          this.#display(0);
          //додати цифру якщо вже введена цифра
        } else if (
          this.#inputMemory === 'number' &&
          this.#inputString !== '0'
        ) {
          this.#inputString += e.target.textContent;
          this.#display(this.#inputString);
          //інакше відображаеться натиснута цифра
        } else {
          this.#inputString = e.target.textContent;
          this.#display(this.#inputString);
        }
        //в #inputMemory заноситься тип натиснутої кнопки
        this.#inputMemory = 'number';
        //якщо натиснута кнопка оператора або дорівнює
      } else if (
        e.target.className === 'key-op' ||
        e.target.className === 'key-eq'
      ) {
        //якщо #inputMemory не дорівнює типу дії кнопки оператора
        if (this.#inputMemory !== e.target.dataset.action) {
          //значення дії кнопки присвоюється #selectedOperator
          this.#selectedOperator = e.target.dataset.action;
          //відображається обчислений результат
          this.#display(
            this.#operate(
              parseFloat(this.#inputString),
              this.#selectedOperator,
            ),
          );

          //очищується строка відображення
          this.#inputString = '';

          //зберігається клікнутий оператор в пам`ять
          this.#inputMemory = e.target.dataset.action;
        }
        //якщо натиснута кнопка очищення
      } else if (e.target.dataset.action === 'clear') {
        this.#reset();
        this.#display(0);
      }
    });
  }

  #operate(input, operator) {
    //визначає #currentOperator
    if (this.#currentOperator === undefined) {
      this.#currentOperator = operator;
    }
    //визначає #currentResult
    if (this.#currentResult === undefined) {
      this.#currentResult = input;
    }

    //дозволяє проводити розражунки після натискання =,  2+5=(7)*2=14
    else if (this.#currentArgument && Number.isNaN(input)) {
      this.#currentArgument = false;
    }
    //дозволяє перемикати оператор між розрахунками, 2+*5 поверне 2*5
    else if (Number.isNaN(input) && this.#currentResult !== undefined) {
      this.#currentOperator = operator;
      return;
    } else {
      //розрахунок
      //перевірка, якщо ділення на 0
      if (this.#currentOperator === 'divide' && input === 0) {
        this.#currentResult = 'Error';
      } else {
        this.#currentResult = this[this.#currentOperator](
          this.#currentResult,
          input,
        );
      }

      //перевірка чи оператор не дорівнює equate
      if (!(operator === 'equate')) {
        //оновлення пам’яті оператора до нещодавно вибраного оператора для наступного обчислення
        this.#currentOperator = operator;
        this.#currentArgument = false;
      } else {
        //скидання пам`яті оператора
        this.#currentOperator = undefined;
        this.#currentArgument = true;
      }
    }
    return this.#currentResult;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  #reset() {
    this.#currentResult = undefined;
    this.#currentOperator = undefined;
    this.#currentArgument = undefined;
    this.#inputString = '0';
    this.#selectedOperator = '';
    this.#inputMemory = '';
  }

  #display(value) {
    //якщо довж. рез. більше 9 то округл. до 7 символів після коми
    this.#inputSource.querySelector('.ah-display').textContent =
      value.toString().length > 9 ? value.toFixed(7) : value;
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.#captureInput();
    });
  }
}

new Calculator('.ah-calculator').init();
