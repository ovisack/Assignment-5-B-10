document.getElementById('button-history').addEventListener('click', function() {
  const historySection = document.getElementById('history-section');
  
  // If hidden, show the section
  if (historySection.classList.contains('hidden')) {
      historySection.classList.remove('hidden');
  }

  // Load some example donation history into the section
  document.getElementById('history-list').innerText =`const calculateButtons = document.querySelectorAll('.amount-button');

   document.getElementById('history-list').innerHTML = `
   ` <div class="p-4">
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
        <p>Date: Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
      </div>
      <div class="bg-white p-4 mt-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">6500 Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
        <p>Date: Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
      </div>
      <div class="bg-white p-4 mt-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p>Date: Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
      </div>
    </div>
  `;
  

});


     
