
  // Wait until the page is fully loaded
  document.addEventListener("DOMContentLoaded", () => {

    const cartButton = document.querySelector(".cart");
    const addToCartButtons = document.querySelectorAll(".product button");

    let cartCount = 0; // initial cart count

    // Function to update the cart display
    function updateCart() {
      cartButton.textContent = `🛒 Cart (${cartCount})`;
    }

    // When "Add to Cart" is clicked
    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        cartCount++;
        updateCart();

        // Show a simple confirmation message
        alert("✅ Item added to cart!");
      });
    });

    // Optional: clicking the cart shows total items
    cartButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`🛒 You have ${cartCount} item(s) in your cart.`);
    });

  });

