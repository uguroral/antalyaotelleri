const oteller = [
  {
    id: 1,
    title: "Rixos Premium Tekirova",
    category: "Kemer",
    gecelikFiyat: 4.999,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/50787/m/Rixos-Premium-Tekirova-Genel-340743.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab!`,
  },
  {
    id: 2,
    title: "NG Phaselis Bay",
    category: "Kemer",
    gecelikFiyat: 6.999,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/213979/m/NG-Phaselis-Bay-Genel-313671.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },
  {
    id: 3,
    title: "Maxx Royal Kemer Resort",
    category: "Kemer",
    gecelikFiyat: 9.999,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/51539/m/Maxx-Royal-Kemer-Resort-Genel-300651.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },

  {
    id: 4,
    title: "Belek Beach Resort Hotel",
    category: "Belek",
    gecelikFiyat: 2.999,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/51539/m/Maxx-Royal-Kemer-Resort-Genel-300651.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },
  {
    id: 5,
    title: "Voyage Belek Golf & Spa",
    category: "Belek",
    gecelikFiyat: 5.755,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/50292/m/Voyage-Belek-Golf---Spa-Genel-282932.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },
  {
    id: 6,
    title: "Titanic Deluxe Golf Belek",
    category: "Belek",
    gecelikFiyat: 5.755,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/51957/m/Titanic-Deluxe-Golf-Belek-Genel-300924.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },
  {
    id: 7,
    title: "Voyage Sorgun",
    category: "Side",
    gecelikFiyat: 5.755,
    img:
      "https://images.etstur.com/files/images/hotelImages/test/TR/51493/m/GEN--5-.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },
  {
    id: 8,
    title: "Ali Bey Resort",
    category: "Side",
    gecelikFiyat: 5.755,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/51886/m/Ali-Bey-Resort-Genel-342720.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },
  {
    id: 9,
    title: "Arcanus Side Resort",
    category: "Side",
    gecelikFiyat: 5.755,
    img:
      "https://images.etstur.com/files/images/hotelImages/TR/92797/m/Arcanus-Side-Resort-Genel-302114.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit expedita laborum non tempora iure, sint commodi harum ullam ab! `,
  },

]



// Elementleri Seçme

const menuContainer = document.getElementById("sectioncenter")
const btnContainer = document.querySelector(".btn-container")



//  button oluşturma

let create_Button = function (btnName) {  
  let btn = `<button type="button" id="${btnName}" class="btn btn-outline-dark btn-item">${btnName}</button>`
  return btn
}


// butonları ekrana çıkarma
let addButtonsToUI = function () {
  btnContainer.innerHTML = create_Button("All") + create_Button("Kemer") + create_Button("Belek") + create_Button("Side")

}

addButtonsToUI()

// butonlara event ekleme

buttonsAll = document.querySelector("#All").addEventListener("click", listAllhotels);
btnKemer = document.querySelector("#Kemer").addEventListener("click", kemerHotels);
btnBelek = document.querySelector("#Belek").addEventListener("click", belekHotels);
btnSide = document.querySelector("#Side").addEventListener("click", sideHotels);


// tüm otelleri listeleme

listAllhotels()
function listAllhotels(){
  let allHotels = ""
  oteller.map((x) =>{
  allHotels += createItem(x)
  })
  menuContainer.innerHTML = allHotels
}

// Kemer otelleri
function kemerHotels(){
  let allHotels = ""
  oteller.map((x) => {
    if (x.category == "Kemer") {
      allHotels += createItem(x)
    }
  }
  )
  menuContainer.innerHTML = allHotels
}

// belek otelleri
function belekHotels(){
  let allHotels = ""
  oteller.map((x) => {
    if (x.category == "Belek") {
      allHotels += createItem(x)
    }
  }
  )
  menuContainer.innerHTML = allHotels
}


// side otelleri
function sideHotels(){
  let allHotels = ""
  oteller.map((x) => {
    if (x.category == "Side") {
      allHotels += createItem(x)
    }
  }
  )
  menuContainer.innerHTML = allHotels
}

// otel item oluşturma
function createItem(oteller) {
  let item = `
  <div class="menu-items  ">
            <img src="${oteller.img}" alt="${oteller.title}"  class="photo">
            <div class="menu-info">
              <div class="menu-title">
                <h4>${oteller.title} </h4>
                <h4 class="price">${oteller.gecelikFiyat} ₺ </h4>
              </div>
              <div class="menu-text">
                ${oteller.desc}
                
              </div>
            </div>
          </div>
  `;
  return item;
}