function updateGreeting() {
  const nameInput = document.getElementById('name-input').value.trim();

  const nameOutput = document.getElementById('name-output');
  if (nameInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput;
  }
}

document.getElementById('name-input').addEventListener('input', updateGreeting);
