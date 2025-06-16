const suggestions = [
    "Motijhel","Malibagh","Mouchak","Rampura","Badda","Notunbazar","Bashundhara","Kuril","Airport","Uttara","Tongi","Gazipur_chowrasta","Khilgaon","Basabo","Titipara","Saydabad","Jatrabari","Postogola","Singboard","Gabtoli","Mirpur-1","Mirpur-2","Mirpur-10","Mirpur-11","Mirpur-12","Mirpur-13","Mirpur-14","Kalshi","Jamuna","Kajipara","Farmgate","Gulistan","Abdullahpur","Mugda","Shewrapara","Agargaon","Bijoy_sarani","Karwan_bazar","Shahbag","Matsay_bhaban","Press_club","Palton","Bangabhaban","EPZ","Jirani","Nabinagar","Kolabagan","New-Market","Chankharpul","Chankharpul","Kochukhet","Banani","Cantonment","Sha_mosjid","Shyamoli","Kalshi","Pallabi","Sony_cinemahall","Banasree","Basila","Mohammadpur","Ansar_camp","Purobi","Badda_linkroad","Gulshan-1","Gulshan-2","Madanpur","Kanchpur","Rayerbag","Shanir_akhra","GPO","High_court","Bangla_motor","Khamar_bari",
    "Asad_gate","Kallyanpur","Amin_bazar","Hemayetpur","Jahangir_gate","Mohakhali","Kakrail","Rajlakshmi","Azampur","House_building","Savar","Wireless","Shahjadpur","Kamlapur","Khilkhet","Rupnagar_abashik","Keraniganj","Chiriyakhana"


  ];

  const to = document.getElementById('to');
  const suggestionsList = document.getElementById('suggestions');

  to.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if (query) {
      const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
      filteredSuggestions.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => {
          to.value = item;
          suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
      });
    }
  });