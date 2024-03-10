



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

  let prevScrollPos = window.pageYOffset;
let isNavbarHidden = false;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    if (isNavbarHidden) {
      navbar.style.top = "0";
      isNavbarHidden = false;
    }
  } else {
    if (!isNavbarHidden) {
      navbar.style.top = "-80px"; // Adjust as needed
      navbar.style.position = "fixed";
      isNavbarHidden = true;
    }
  }
  prevScrollPos = currentScrollPos;
});




  document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => renderProducts(data))
      .catch(error => console.error("Error fetching data:", error));

    const cartButton = document.getElementById("cartButton");
    const cartOverlay = document.getElementById("cartOverlay");
    const closeCart = document.getElementById("closeCart");
    let isCartOpen = false;

    cartButton.addEventListener("click", toggleCartOverlay);
    closeCart.addEventListener("click", toggleCartOverlay);

    function toggleCartOverlay() {
      isCartOpen = !isCartOpen;
      if (isCartOpen) {
        cartOverlay.classList.add("open");
      } else {
        cartOverlay.classList.remove("open");
      }
    }
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

      const psign = "₱ ";

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
        itemPrice.textContent = psign + item.price;


        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", function() {
          addToCart(item);
        });

        itemDiv.appendChild(image);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemCategory);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(addToCartButton);
        itemsContainer.appendChild(itemDiv);
      });

      brandDiv.appendChild(itemsContainer);
      productContainer.appendChild(brandDiv);
    });
  }

  function addToCart(item) {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartItem = document.createElement("div");

    cartItem.textContent = item.name + " - ₱ " + item.price;
    cartItemsContainer.appendChild(cartItem);

    let total = 0; // Initialize total outside the loop

    // Iterate through each item in the cart to calculate total
    const cartItems = cartItemsContainer.querySelectorAll("div");
    cartItems.forEach(cartItem => {
        const itemPrice = parseInt(cartItem.textContent.split("₱")[1].trim());
        total += itemPrice;
    });

    document.getElementById("textfield").innerHTML = "Total: " + total;

    updateCartItemCount();
}


  function updateCartItemCount() {
    const cartItemsCount = document.querySelector(".cart-items");
    cartItemsCount.textContent = parseInt(cartItemsCount.textContent) + 1;
  }
  
  
  function showOverlay() {
    document.getElementById("cartOverlay").style.display = "block";
  }
  
  // Function to close the overlay
  function closeOverlay() {
    document.getElementById("cartOverlay").style.display = "none";
  }
  
  // Attaching click event listener to the cart button
  document.getElementById("cartButton").addEventListener("click", showOverlay);