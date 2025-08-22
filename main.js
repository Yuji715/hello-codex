document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('greet-btn');
  const input = document.getElementById('name-input');
  if (button && input) {
    button.addEventListener('click', () => {
      const name = input.value.trim();
      if (name === '') {
        alert('名前を入力してください');
      } else {
        alert(`こんにちは、${name}さん！`);
      }
    });
  }
});
