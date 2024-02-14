



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
    var productCatalog = document.getElementById("productCatalog");
  
    data.products.forEach(function(brand) {
      var brandHeading = document.createElement("h2");
      brandHeading.textContent = brand.brand;
      productCatalog.appendChild(brandHeading);
  
      var productList = document.createElement("ul");
  
      brand.items.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
        <div id="#" class="product">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Category: ${item.category}</p>
          <p>Price: ${item.price}</p>
        </div>
        `;
        productList.appendChild(listItem);
      });
  
      productCatalog.appendChild(productList);
    });
  }
  