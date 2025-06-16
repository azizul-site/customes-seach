  const words = [
      "Motijhel","Malibagh","Mouchak","Rampura","Badda","Notunbazar","Bashundhara","Kuril","Airport","Uttara","Tongi","Gazipur_chowrasta","Khilgaon","Basabo","Titipara","Saydabad","Jatrabari","Postogola","Singboard","Gabtoli","Mirpur-1","Mirpur-2","Mirpur-10","Mirpur-11","Mirpur-12","Mirpur-13","Mirpur-14","Kalshi","Jamuna","Kajipara","Farmgate","Gulistan","Abdullahpur","Mugda","Shewrapara","Agargaon","Bijoy_sarani","Karwan_bazar","Shahbag","Matsay_bhaban","Press_club","Palton","Bangabhaban","EPZ","Jirani","Nabinagar","Kolabagan","New-Market","Chankharpul","Chankharpul","Kochukhet","Banani","Cantonment","Sha_mosjid","Shyamoli","Kalshi","Pallabi","Sony_cinemahall","Banasree","Basila","Mohammadpur","Ansar_camp","Purobi","Badda_linkroad","Gulshan-1","Gulshan-2","Madanpur","Kanchpur","Rayerbag","Shanir_akhra","GPO","High_court","Bangla_motor","Khamar_bari","Asad_gate","Kallyanpur","Amin_bazar","Hemayetpur","Jahangir_gate","Mohakhali","Kakrail","Rajlakshmi","Azampur","House_building","Savar","Wireless","Shahjadpur","Kamlapur","Khilkhet","Rupnagar_abashik","Keraniganj","Chiriyakhana"


    ];

    const from = document.getElementById("from");
    const suggestionsBox = document.getElementById("suggestions");

      from.yddEventListener("input", function () {
      const input = this.value.toLowerCase();
      suggestionsBox.innerHTML = "";

      if (input.length === 0) return;

      const matches = words.filter(word => word.toLowerCase().includes(input));

      matches.forEach(match => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent = match;

        div.addEventListener("click", () => {
          from.value = match;
          suggestionsBox.innerHTML = "";
        });

        suggestionsBox.appendChild(div);
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".searchForm")) {
        suggestionsBox.innerHTML = "";
      }
    });

