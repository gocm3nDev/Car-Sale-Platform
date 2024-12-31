//radyo butonları temizleme
function clearRadioButtons() {
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false);

  const textboxes = document.querySelectorAll('input[type="text"]');
  textboxes.forEach(textbox => textbox.value = '');
}

//Giriş yapıldıysa giriş yap yerine kullanıcı adını göster
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("UN");
  const username = localStorage.getItem("username");

  if (username) {
    loginButton.textContent = `Merhaba, ${username}`;
  }
});

const checkbox = document.getElementById('check');
const filterContainer = document.querySelector('.filterContainer');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    filterContainer.style.display = 'block';
  } else {
    filterContainer.style.display = 'none';
  }
});

//chat butonu
const toggleButton = document.getElementById('togglePanel');
const closeButton = document.getElementById('closePanel');
const panel = document.getElementById('myPanel');

toggleButton.addEventListener('click', () => {
  panel.classList.add('open'); // paneli aç
});

closeButton.addEventListener('click', () => {
  panel.classList.remove('open');
});

// araç verileri
const tools = [
  {
    name: "AUDI A6 SEDAN 2.0 TFSI QUATTRO",
    image: "../cars/AUDI_A6_40TDI/3.jpg",
    logo: "../carBrands/Audi-Logo.svg",
    km: "64.218",
    year: "2018",
    price: "2.850.000₺",
    sit: "2.el",
    case: "sedan",
    brand: "audi",
    fuel: "gasoline",
    phone: "+33 6 12 34 56 78",
    color: "Gri",
    gear: "Otomatik",
  },
  {
    name: "PORSCHE 911 CARRERA 4S PDK",
    image: "../cars/PORSCHE_911_CARRERA/3.jpg",
    logo: "../carBrands/porsche.svg",
    km: "13.105",
    year: "2021",
    price: "19.690.000₺",
    sit: "2.el",
    case: "super",
    brand: "porsche",
    fuel: "gasoline",
    phone: "+33 6 12 34 56 87",
    color: "Koyu Gri",
    gear: "Otomatik",
  },
  {
    name: "PORSCHE 911 TURBO",
    image: "../cars/PORSCHE_911_TURBO/3.jpg",
    logo: "../carBrands/porsche.svg",
    km: "8.944",
    year: "2023",
    price: "31.900.000₺",
    sit: "2.el",
    case: "super",
    brand: "porsche",
    fuel: "gasoline",
    phone: "+90 553 861 38 11",
    color: "Gri",
    gear: "Otomatik",
  },
  {
    name: "MERCEDES-BENZ CLE 300 AMG",
    image: "../cars/CLE_300_AMG/3.jpg",
    logo: "../carBrands/mercedes_benz.svg",
    km: "0",
    year: "2024",
    price: "6.000.000₺",
    sit: "0km",
    case: "sedan",
    brand: "mercedes",
    fuel: "diesel",
    phone: "+33 6 12 11 56 60",
    color: "Siyah",
    gear: "Otomatik",
  },
  {
    name: "CADILLAC ESCALADE 6.2 V8",
    image: "../cars/ESCALADE_V8/3.jpg",
    logo: "../carBrands/cadillac.png",
    km: "0",
    year: "2023",
    price: "21.800.000₺",
    sit: "0km",
    case: "suv",
    brand: "cadillac",
    fuel: "gasoline",
    phone: "+90 552 134 87 97",
    color: "Siyah",
    gear: "Otomatik",
  },
  {
    name: "AUDI RS6 4.0 TFSI V8 QUATTRO",
    image: "../cars/AUDI_RS6/3.jpg",
    logo: "../carBrands/Audi-Logo.svg",
    km: "34.321",
    year: "2021",
    price: "13.100.000₺",
    sit: "2.el",
    case: "sedan",
    brand: "audi",
    fuel: "gasoline",
    phone: "+33 6 44 01 55 29",
    color: "Mat Gri",
    gear: "Yarı-Otomatik",
  },
];

//Araçları görüntüle
const gallery = document.getElementById("gallery");

tools.forEach(tool => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
      <img src="${tool.image}" alt="${tool.name}">
      <div class="logoContainer">
        <img src="${tool.logo}" alt="${tool.name}" class="carLogo">
      </div>
      <h3>${tool.name}</h3>
      
      <hr>
      <div class="containerProp">
        <p class="km">Kilometre <br> ${tool.km}</p>
        <p class="yearsOld">Model <br> ${tool.year}</p>
      </div>

      <div class="buttonContainer">
        <div class="buyButton">
            <p class="prices">${tool.price}</p>
        </div>
      </div>
    `;

  gallery.appendChild(card);
});

function openCarDetailCard(tool, imageSrc) {
  // araç detay kartını oluştur    
  let detailCard = document.createElement('div');
  detailCard.className = 'detailCard';
  detailCard.innerHTML = `
  <div class="cardContent">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                  <div class="border text-center p-0">
                      <img id="mainImage" src="${imageSrc[0]}" class="img-fluid main">
                  </div>
              </div>
                <div class="d-flex justify-content-between">
                    <div class="border text-center p-0 bottomDiv"><img src="${imageSrc[1]}" class="img-fluid thumbnail bottomImg"></div>
                    <div class="border text-center p-0 bottomDiv"><img src="${imageSrc[2]}" class="img-fluid thumbnail"></div>
                    <div class="border text-center p-0 bottomDiv"><img src="${imageSrc[3]}" class="img-fluid thumbnail"></div>
                    <div class="border text-center p-0 bottomDiv"><img src="${imageSrc[4]}" class="img-fluid thumbnail"></div>
                </div>
            </div>

            <div class="col-md-6 d-flex align-items-center justify-content-center">
                <div class="border text-center p-5 carProperties">
                  <h3>${tool.name}</h3>
                  <hr>
                  <img src="${tool.logo}" class="detailLogo">
                  <hr>
                  <br><br>
                  <div class="row">
                    <div class="col"><p><strong>Marka:</strong> ${tool.brand}</p></div>
                    <div class="col"><p><strong>Model Yılı:</strong> ${tool.year}</p></div>
                    <br><br><br>
                    <div class="w-100"></div>
                    <div class="col"><p><strong>Kilometre:</strong> ${tool.km}</p></div>
                    <div class="col"><p><strong>Telefon:</strong> ${tool.phone}</p></div>
                    <br><br><br>
                    <div class="w-100"></div>
                    <div class="col"><p><strong>Durum:</strong> ${tool.sit}</p></div>
                    <div class="col"><p><strong>Yakıt Türü:</strong> ${tool.fuel}</p></div>
                    <br><br><br>
                    <div class="w-100"></div>
                    <div class="col"><p><strong>Renk:</strong> ${tool.color}</p></div>
                    <div class="col"><p><strong>Vites:</strong> ${tool.gear}</p></div>
                    <p class="contactToSeller">
                      <i class="bi bi-telephone-fill"></i>&nbsp; Satıcı ile iletişime geçin
                  </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
     

    <button class="closeDetailCard"><i class="bi bi-x-diamond"></i></button>
  </div>
  `;

  // kartı body'e ekle
  document.body.appendChild(detailCard);


  //küçük fotoğraflara tıklandığında büyük resmin yerine getir
  const thumbnails = detailCard.querySelectorAll('.thumbnail');
  const mainImage = detailCard.querySelector('#mainImage');
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      mainImage.src = thumbnail.src;
    });
  });

  // kapatma butonuna tıklama olayını ekle
  detailCard.querySelector('.closeDetailCard').addEventListener('click', () => {
    detailCard.remove();
  });
}

// tıklama olayını dinlemek için buyButton sınıfına sahip elementlere event delegation
document.getElementById('gallery').addEventListener('click', (event) => {
  if (event.target.closest('.buyButton')) {
    const card = event.target.closest('.card'); // İlgili kartı bul
    const coverImageSrc = card.querySelector('img').src; // Kapak resmini al

    // klasör yolunu ve dosya adını ayır
    const url = new URL(coverImageSrc);
    const folderPath = url.origin + url.pathname.substring(0, url.pathname.lastIndexOf('/')); // klasör yolu
    const currentFileName = url.pathname.substring(url.pathname.lastIndexOf('/') + 1); // dosya adı

    // klasördeki tüm resimleri içeren bir dizi oluştur
    const imageSrc = [];
    for (let i = 1; i <= 8; i++) {
      const imagePath = `${folderPath}/${i}.jpg`;
      if (imagePath.includes(currentFileName)) {
        imageSrc.unshift(imagePath);
      } else {
        imageSrc.push(imagePath);
      }
    }

    const carName = card.querySelector('h3').textContent; // Kartın ismini al
    const tool = tools.find(t => t.name === carName); // tools dizisinde eşleşen aracı bul

    if (tool) {
      // Kart detayını aç ve tüm resimleri ve aracı gönder
      openCarDetailCard(tool, imageSrc);
    }

    // Kart detayını aç ve tüm resimleri gönder
    openCarDetailCard(imageSrc);
  }
});


// araçları görüntüleme fonksiyonu
function displayCars(filteredTools = tools) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // önceki kartları temizle

  if (filteredTools.length === 0) { // eşleşen araç yoksa mesaj göster
    const noResult = document.createElement("p");
    noResult.textContent = "Sonuç bulunamadı.";
    noResult.style.color = "red";
    noResult.style.fontSize = "18px";
    noResult.style.textAlign = "center";
    gallery.appendChild(noResult);
    return;
  }

  filteredTools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${tool.image}" alt="${tool.name}">
      <div class="logoContainer">
        <img src="${tool.logo}" alt="${tool.name}" class="carLogo">
      </div>
      <h3>${tool.name}</h3>
      <hr>
      <div class="containerProp">
        <p class="km">Kilometre <br> ${tool.km}</p>
        <p class="yearsOld">Model <br> ${tool.year}</p>
      </div>
      <div class="buttonContainer">
        <div class="buyButton">
          <p class="prices">${tool.price}</p>
        </div>
      </div>
    `;

    gallery.appendChild(card);
  });
}

// araçları filtrele
function filterCards() {
  const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();

  // Seçili radio butonun değerini al
  const selectedRadio1 = document.querySelector('input[name="durum"]:checked');
  const radioValue = selectedRadio1 ? selectedRadio1.value : null;
  const caseValue = document.querySelector('input[name="case"]:checked')?.value || "";
  const brandValue = document.querySelector('input[name="brand"]:checked')?.value || "";
  const fuelValue = document.querySelector('input[name="fuel"]:checked')?.value || "";

  // araçları metin ve radio değerleine göre filtrele
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchValue);
    const matchesRadio = radioValue ? tool.sit === radioValue : true;
    const matchesCase = caseValue ? tool.case === caseValue : true;
    const matchesBrand = brandValue ? tool.brand === brandValue : true;
    const matchesFuel = fuelValue ? tool.fuel === fuelValue : true;
    return matchesSearch && matchesRadio && matchesFuel && matchesBrand && matchesCase;
  });

  // Sonuçları güncelle
  displayCars(filteredTools);
}

// sayfa yüklendiğinde araçları görüntüle
window.onload = () => {
  displayCars();
};

// filtrele butonuna tıklandığında gerçekleştir
document.querySelector(".filter").addEventListener("click", filterCards);