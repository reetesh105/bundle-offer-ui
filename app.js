function selectOption(num) {
  const options = document.querySelectorAll('.option');
  options.forEach((opt, index) => {
    if (index === num - 1) {
      opt.classList.add('selected');
      opt.querySelector('input[type="radio"]').checked = true;
    } else {
      opt.classList.remove('selected');
    }
  });

  // Optional: update total dynamically
  const total = document.querySelector('.total');
  if (num === 1) total.textContent = "Total : $10.00 USD";
  else if (num === 2) total.textContent = "Total : $18.00 USD";
  else if (num === 3) total.textContent = "Total : $24.00 USD";
}
