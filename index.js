const categories = [
  {
    cat: "Vehicles",
    img: "./assets/vehicles.png",
    ads: 123,
  },
  {
    cat: "Property",
    img: "./assets/real-estate.png",
    ads: 123,
  },
  {
    cat: "Mobile Phone",
    img: "./assets/mobile.png",
    ads: 123,
  },
  {
    cat: "Electronic",
    img: "./assets/electronics.png",
    ads: 123,
  },
  {
    cat: "Home, Furniture & Appliance",
    img: "./assets/home.png",
    ads: 123,
  },
  {
    cat: "Health & Beauty",
    img: "./assets/beauty.png",
    ads: 123,
  },
  {
    cat: "Fashion",
    img: "./assets/fashion.png",
    ads: 123,
  },
  {
    cat: "Sport,Art & Outdoor",
    img: "./assets/hobbies.png",
    ads: 123,
  },
  {
    cat: "Seeking Work CVs",
    img: "./assets/jobseekers.png",
    ads: 123,
  },
  {
    cat: "Job",
    img: "./assets/jobs.png",
    ads: 123,
  },
  {
    cat: "Babies &Kids",
    img: "./assets/babies.png",
    ads: 123,
  },
  {
    cat: "Pets",
    img: "./assets/animals.png",
    ads: 123,
  },
  {
    cat: "Agricuture & Food",
    img: "./assets/agriculture.png",
    ads: 123,
  },
  {
    cat: "Commercial Equipment",
    img: "./assets/equipment.png",
    ads: 123,
  },
  {
    cat: "Vehicles",
    img: "./assets/vehicles.png",
    ads: 123,
  },
];

const trending = [
  {
    img: "./assets/images/IMG-20230609-WA0001.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
  {
    img: "./assets/images/IMG-20230609-WA0005.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
  {
    img: "./assets/images/IMG-20230609-WA0008.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
  {
    img: "./assets/images/IMG-20230609-WA0009.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
  {
    img: "./assets/images/IMG-20230710-WA0000.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
  {
    img: "./assets/images/IMG-20230710-WA0005.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
  {
    img: "./assets/images/IMG-20230710-WA0006.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
  {
    img: "./assets/images/IMG-20230710-WA0007.jpg",
    price: "1,230,000",
    name: "Hp Laptop",
  },
];

const category = document.querySelector(".category");

categories.map(cat => {
    const content = `
        <article class="card">
            <img src=${cat.img} alt="">
            <article>
                <p style="color: green;">${cat.cat}</p>
                <p>${cat.ads} ads</p>
            </article>
        </article>
    `;
    category.innerHTML += content;
})

const trendingContainer = document.querySelector(".trending-container")

trending.map(item => {
    const content = `
        <article class="trending-card">
            <img src=${item.img} alt="">
                <article class="card-disc">
                    <article class="semi-circle">3</article>
                    <article class="circle"><i class="bx bx-bookmark" style="font-size: 18px;"></i></article>
                    <h4>${item.name}</h4>
                    <p>Ush ${item.price}</p>
                </article>
        </article>
    `;
    trendingContainer.innerHTML += content;
})