let messages = 2;
let originalTitle = 'App';
let isOriginal = true;

document.querySelector('.addBtn').addEventListener('click', () => {
  messages++;
});

document.querySelector('.removeBtn').addEventListener('click', () => {
  if (messages > 0) {
    messages--;
  }
});

setInterval(() => {
  if (messages > 0) {
    document.title = isOriginal
      ? `(${messages}) New messages`
      : originalTitle;
    isOriginal = !isOriginal;
  } else {
    document.title = 'App';
    isOriginal = true;
  }
}, 1000);