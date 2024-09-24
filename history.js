const historyTab = document.getElementById('button-history');
const donationTab = document.getElementById('donation-tab');
const hiddenCart = document.getElementById('hidden-cart'); // Section containing donation cards

historyTab.addEventListener('click', function() {
    // Hide the donation section when History tab is clicked
    hiddenCart.classList.add('hidden');
    historyTab.classList.add("bg-lime-600");
    donationTab.classList.remove("bg-lime-600");
    
    // historyTab.innerHTML = `
    // <h1>hi</h1>
    // <h2>ami tomake valo basi</h2>`;
});

donationTab.addEventListener('click', function() {
    // Show the donation section when Donation tab is clicked
    hiddenCart.classList.remove('hidden');
    donationTab.classList.add("bg-lime-600");
    historyTab.classList.remove("bg-lime-600");
});