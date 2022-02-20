class Game {
  #userNumberInput; //введене користувачем число
  #userAttemptInput; //введена користувачем кількість спроб
  #maxNumber; //введене користувачем максимальне число діапазону
  #minNumber; //введене користувачем мінімальне число діапазону
  #randGeneratedNum; //випадково згенероване число в діапазоні
  #clickCount = 0; //лічильник кліків(спроб) користувача
  #continueGame = true; //токен завершення гри
  #inputSource = document.querySelector('.block');

  randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  #captureInput() {
    this.#inputSource.addEventListener('click', (e) => {
      if (e.target.id === 'try') {
        e.preventDefault();
        if (this.#continueGame) {
          if (
            !this.#minNumber ||
            !this.#maxNumber ||
            !this.#userAttemptInput ||
            !this.#userNumberInput
          ) {
            this.#display('Задані не всі параметри гри', 'danger');
          } else if (
            this.#userNumberInput > this.#maxNumber ||
            this.#userNumberInput < this.#minNumber
          ) {
            this.#display('Ваше число поза діапазоном', 'danger');
          } else if (this.#clickCount < this.#userAttemptInput) {
            this.#clickCount++;
            if (this.#randGeneratedNum !== this.#userNumberInput) {
              console.log(this.#randGeneratedNum, this.#clickCount);
              this.#display(this.#compare(this.#userNumberInput), 'danger');
              this.#inputSource.querySelector(
                '#try',
              ).textContent = `Використано спроб ${this.#clickCount.toString()}`;
            } else {
              this.#inputSource.querySelector(
                '#try',
              ).textContent = `Використано спроб ${this.#clickCount.toString()}`;
              this.#display(
                'Ви виграли!&#127881;&#127881;&#127881;',
                'success',
              );
              this.#continueGame = false;
            }
          } else {
            this.#display('Ліміт спроб вичерпано! Ви програли!', 'danger');
          }
        }
      }

      if (e.target.id === 'reset') {
        e.preventDefault();
        this.#reset();
        this.#display('Поїхали!', 'success');
      }
    });
    this.#inputSource.addEventListener('change', (e) => {
      if (e.target.id === 'userNumberInput') {
        this.#userNumberInput = Number(e.target.value);
      }
      if (e.target.id === 'minNumber') {
        this.#minNumber = Number(e.target.value);
      } else if (e.target.id === 'maxNumber') {
        this.#maxNumber = Number(e.target.value);
        if (this.#minNumber && this.#maxNumber) {
          this.#randGeneratedNum = this.randomInteger(
            this.#minNumber,
            this.#maxNumber,
          );
        }
      } else if (e.target.id === 'userAttemptInput') {
        this.#userAttemptInput = Number(e.target.value);
      }
    });
  }

  #compare(value) {
    if (value > this.#randGeneratedNum) {
      return 'Ваше число більше';
    } else if (value < this.#randGeneratedNum) {
      return 'Ваше число менше';
    }
  }

  #reset() {
    this.#userNumberInput = undefined;
    this.#userAttemptInput = undefined;
    this.#maxNumber = undefined;
    this.#minNumber = undefined;
    this.#randGeneratedNum = undefined;
    this.#clickCount = 0;
    this.#continueGame = true;
    this.#clearForm();
  }

  #clearForm() {
    this.#inputSource.querySelector('#userNumberInput').value = null;
    this.#inputSource.querySelector('#minNumber').value = null;
    this.#inputSource.querySelector('#maxNumber').value = null;
    this.#inputSource.querySelector('#userAttemptInput').value = null;
    this.#inputSource.querySelector('#try').textContent = 'Спроба';
  }

  #display(value, type) {
    this.#inputSource.querySelector(
      '.display',
    ).innerHTML = `<span class=${type}>${value}</span>`;
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.#captureInput();
    });
  }
}

new Game().init();
