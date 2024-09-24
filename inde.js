

// Get all the donation buttons
const calculateButtons = document.querySelectorAll('.amount-button');

// Loop through all donate buttons and add event listeners
calculateButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Get the balance BDT (Amount-BDT)
    const balanceElement = document.querySelector('.Amount-BDT');
    const balanceBDT = parseFloat(balanceElement.innerText) || 0;

    // Get the input donation value corresponding to this card
    const inputElement = document.querySelectorAll('.amount-input')[index];
    const inputAmount = parseFloat(inputElement.value) || 0;

    // Get the current total donation amount for the card
    const totalAmountElement = document.querySelectorAll('.total-amount')[index];
    const currentTotalAmount = parseFloat(totalAmountElement.innerText) || 0;

    // Ensure the input amount is valid and doesn't exceed the available balance
    if (inputAmount > 0 && inputAmount <= balanceBDT) {
      // Calculate new balance and total donation amount
      const newBalance = balanceBDT - inputAmount;
      const newTotal = currentTotalAmount + inputAmount;


      // Update the Amount-BDT balance and card's total donation amount
      balanceElement.innerText = newBalance.toFixed(2);
      totalAmountElement.innerText = newTotal.toFixed(2);

      // Clear the input field after donation
      inputElement.value = '';
      alert('amount add balance exceed full')
      
    } else {
      alert("Please enter a valid amount that does not exceed your balance.");
    }
  });

});