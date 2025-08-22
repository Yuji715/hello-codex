document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('greet-btn');
  if (button) {
    button.addEventListener('click', () => {
      alert('こんにちは、Codex!');
    });
  }
});
