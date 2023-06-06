var numberInput = document.getElementById('numberInput');
var result = document.getElementById('result');

result.innerHTML = 'Wykonanie: Jakub Mądry<br>AKA. ni3b0rak';

document.getElementById('checkButton').addEventListener('click', function() {
  var number = parseInt(numberInput.value);

  if (isNaN(number)) {
    result.innerHTML = 'Wpisz poprawną liczbę!';
  } else {
    result.innerHTML = number % 2 === 0 ? 'Nie uwierzysz! Sprawdziłem twoją liczbę i jest parzysta!!' : 'UPS! Wykalkulowałem że liczba którą podałeś jest nieparzysta!';
  }
});