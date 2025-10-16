let products = [
    {
    id: 1,
    Name: "Phka Puff Blind Bag",
    price: "Price: 1.5$",
    desc: "Beautiful Phka Puff Blind Bag with unique design. Perfect for daily use and special occasions. Made from high-quality materials.",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1760024503691-1759907968998-Dress%2520%25281080%2520x%25201080%2520px%2529.png&w=384&q=100"
  },
  {
    id: 2,
    Name: "Tirk Dos",
    price: "Price: 10.00$",
    desc: "Phka Blush By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1748579799489-Phka%2520Toek%2520dos.jpg&w=384&q=100"
  },
    {
    id: 3,
    Name: "AngKeadey",
    price: "Price: 10.00$",
    desc: "Phka Blush By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1748579807567-Phka%2520Angkea%2520Dey.jpg&w=384&q=100"
  },
    {
    id: 4,
    Name: "Nokoreach",
    price: "Price: 10.00$",
    desc: "Phka Blush By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1748579790906-Phka%2520Nokoreach.jpg&w=384&q=100"
  },
    {
    id: 5,
    Name: "Pkor Lorn",
    price: "Price: 10.00$",
    desc: "Phka Blush By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1748579781429-Phkorlorn.jpg&w=384&q=100"
  },
    {
    id: 6,
    Name: "Kolab",
    price: "Price: 10.00$",
    desc: "Phka Blush By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1748579763785-Kolab.jpg&w=384&q=100"
  },
  {
    id: 7,
    Name: "Chhuk",
    price: "Price: 10.00$",
    desc: "Phka Blush By Pich Pisey",
    image:"https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1748579773026-Phka%2520Chouk.jpg&w=384&q=100"
  },
  {
    id: 8,
    Name: "Romduol",
    price: "Price: 10.00$",
    desc: "Phka Blush By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1748579817735-Romdoul.jpg&w=384&q=100"
  },
   {
    id: 9,
    Name: "Armpit Cream",
    price: "Price: 7.50$",
    desc: "Skin Care By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1746377499639-1742614772374-1000022455.png&w=384&q=100"
  },
   {
    id: 10,
    Name: "Bikini Cream",
    price: "Price: 10.00$",
    desc: "Skin Care By Pich Pisey",
    image: "https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1746377511634-1742614861763-1000022456.jpg&w=384&q=100"
  },
];

function OpenQuickViews(productsid) {
  const product = products[productsid];
  const modal = document.querySelector("#QuickViewModal");

  document.querySelector("#QuickViewName").textContent = product.Name;
  document.querySelector("#QuickViwePrice").textContent = product.price;
  document.querySelector("#QuickViewImage").src = product.image;
  document.querySelector("#QuickViewDesc").textContent = product.desc;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow ="hidden";
};
function CloseQuickview() {
   const modal = document.querySelector("#QuickViewModal");
   modal.classList.add("hidden");
   modal.classList.remove("flex");
   document.body.style.overflow ="auto";
}
document.querySelector("#QuickViewModal").addEventListener('click' ,function(e) {
  if (e.target === this) {
    CloseQuickview();
  }
});

document.addEventListener("keydown", function(e) {
  if(e.key === 'Escape') {
    CloseQuickview();
  }
})
