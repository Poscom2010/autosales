// Simple JavaScript example for a button click

document.getElementById('showMessageBtn').addEventListener('click', function () {
  const messagePara = document.getElementById('message');
  messagePara.textContent = 'Thanks for visiting Poscom Auto Ltd! We have great deals for you.';
  messagePara.style.color = '#003366';
  messagePara.style.fontWeight = 'bold';
});
