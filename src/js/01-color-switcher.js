const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let timerInterval = null;

refs.btnStart.addEventListener('click', onBtnStartClick);

refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStart.disabled = true;

  setDisableAttrOnBtnStop();
}

function onBtnStopClick() {
  clearInterval(timerInterval);

  refs.btnStart.disabled = false;

  setDisableAttrOnBtnStop();
}

function setDisableAttrOnBtnStop() {
  refs.btnStop.disabled = true;

  if (refs.btnStart.disabled) {
    refs.btnStop.disabled = false;
  }
}

setDisableAttrOnBtnStop();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
