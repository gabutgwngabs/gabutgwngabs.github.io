// products.js
const products = [
          { name: "Product 1", image: "images/gauva.png" },
          { name: "Product 2", image: "images/gauva.png" },
          { name: "Product 3", image: "images/gauva.png" },
          { name: "Product 4", image: "images/gauva.png" },
          { name: "Product 5", image: "images/gauva.png" },
          { name: "Product 6", image: "images/gauva.png" },
          { name: "Product 7", image: "images/gauva.png" },
          // Tambahkan lebih banyak produk sesuai kebutuhan
      ];
      
      // Fungsi untuk menampilkan produk
      function displayProducts() {
          const productContainer = document.getElementById('product-container');
          products.forEach(product => {
              const colDiv = document.createElement('div');
              colDiv.className = 'col-md-3';
              colDiv.innerHTML = `
                  <div class="product_card">
                      <img src="${product.image}" alt="${product.name}" class="img-fluid" />
                      <h5 class="product_name">${product.name}</h5>
                  </div>
              `;
              productContainer.appendChild(colDiv);
          });
      }