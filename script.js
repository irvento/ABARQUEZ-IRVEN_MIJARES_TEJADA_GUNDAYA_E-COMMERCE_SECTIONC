



function showRegisterForm() {
  document.getElementById("register-form").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const offsetTop = target.offsetTop;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

const categoryWrapper = document.querySelector('.category-wrapper');
const categories = document.querySelectorAll('.category');
const categoryWidth = categories[0].offsetWidth;
let currentIndex = 0;

function goToNextCategory() {
  currentIndex = (currentIndex + 1) % categories.length;
  updateTransform();
}

function goToPreviousCategory() {
  currentIndex = (currentIndex - 1 + categories.length) % categories.length;
  updateTransform();
}

function updateTransform() {
  categoryWrapper.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
}

// Auto slide every 3 seconds
setInterval(goToNextCategory, 3000);

    function validateForm() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      if (username === "" || password === "") {
          alert("Please enter both username and password.");
          return false;
      }
      openPage(); // Call openPage() if form is valid
      return true;
  }
  
  function openPage() {
    window.location.href = "homepage.html";
      alert("Opening next page...");
  }


  document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => renderProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  });
  
  function renderProducts(data) {
    const productContainer = document.getElementById("productContainer");
  
    data.products.forEach(brand => {
      const brandName = brand.brand.toUpperCase();
      const brandDiv = document.createElement("div");
      brandDiv.classList.add("brand");
  
      const brandHeading = document.createElement("h2");
      brandHeading.textContent = brandName;
      brandDiv.appendChild(brandHeading);
  
      const itemsContainer = document.createElement("div");
      itemsContainer.classList.add("items-container");
  
      brand.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
  
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
  
        const itemName = document.createElement("p");
        itemName.textContent = item.name;
  
        const itemCategory = document.createElement("p");
        itemCategory.textContent = item.category;
  
        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
  
        itemDiv.appendChild(image);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemCategory);
        itemDiv.appendChild(itemPrice);
        itemsContainer.appendChild(itemDiv);
      });
  
      brandDiv.appendChild(itemsContainer);
      productContainer.appendChild(brandDiv);
    });
  }
  
