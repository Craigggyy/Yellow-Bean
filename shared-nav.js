// shared-nav.js — injects navbar and footer into every page
// Usage: <script src="../shared-nav.js"></script> or <script src="shared-nav.js"></script>

(function() {
  // Detect depth
  const isRoot = !window.location.pathname.includes('/pages/');
  const base = isRoot ? '' : '../';

  const navHTML = `
  <div class="promo-banner">
    🌟 &nbsp; Visit us every <strong>October 28</strong> for our Anniversary Promos! &nbsp; 🌟
  </div>
  <nav class="navbar navbar-yb navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="${base}index.html">
  <img src="${base}image/logo.png" alt="Yellow Bean Logo" style="height:80px;">
  <span>Yellow Bean</span>
</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
          <li class="nav-item"><a class="nav-link" href="${base}index.html">Home</a></li>
          <li class="nav-item">
  <a class="nav-link" href="${base}pages/about.html">About</a>
</li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/menu.html">Menu</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/personnel.html">Our Team</a></li>
          
          <li class="nav-item"><a class="nav-link" href="${base}pages/contact.html">Contact Us</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">More</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="${base}pages/events.html">Events & News</a></li>
              <li><a class="dropdown-item" href="${base}pages/blog.html">Blog & Reviews</a></li>
              <li><a class="dropdown-item" href="${base}pages/customers.html">Our Customers</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <div class="footer-brand">☕ Yellow Bean</div>
          <div class="footer-tagline mb-3">Where every sip is a ray of sunshine!</div>
          <p>A cozy café in Taal, Batangas serving high-quality coffee and delicious food at affordable prices. Est. October 2023.</p>
          <div class="mt-3 d-flex flex-wrap gap-2">

          <a href="https://www.facebook.com/profile.php?id=61550706102865"
             target="_blank"
             rel="noopener noreferrer"
             class="btn-yb px-4 py-2"
             style="font-size:1rem;">
            <i class="bi bi-facebook me-2"></i>Facebook
          </a>

          <a href="https://www.instagram.com/_yellow.bean/?hl=en"
             target="_blank"
             rel="noopener noreferrer"
             class="btn-yb px-4 py-2"
             style="font-size:1rem;">
            <i class="bi bi-instagram me-2"></i>Instagram
          </a>

          <a href="https://www.foodpanda.ph/restaurant/bqa2/yellow-bean-taal"
             target="_blank"
             rel="noopener noreferrer"
             class="btn-yb px-4 py-2"
             style="font-size:1rem;">
            🛵 Order on Foodpanda
          </a>

        </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5>Navigate</h5>
          <ul class="list-unstyled">
            <li><a href="${base}index.html">Home</a></li>
            <li><a href="${base}pages/about.html">About Us</a></li>
            <li><a href="${base}pages/menu.html">Menu</a></li>
            <li><a href="${base}pages/services.html">Services</a></li>
            <li><a href="${base}pages/personnel.html">Our Team</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5>More</h5>
          <ul class="list-unstyled">
            <li><a href="${base}pages/events.html">Events & News</a></li>
            <li><a href="${base}pages/blog.html">Blog & Reviews</a></li>
            <li><a href="${base}pages/customers.html">Customers</a></li>
            <li><a href="${base}pages/contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5>Visit Us</h5>
          <p><i class="bi bi-geo-alt text-yellow me-2"></i>Tulo, Taal, Batangas, Philippines</p>
          <p><i class="bi bi-clock text-yellow me-2"></i>Open Daily · 7:00 AM – 9:00 PM</p>
          <p><i class="bi bi-envelope text-yellow me-2"></i>yellowbeancafe@gmail.com</p>
          <p><i class="bi bi-telephone text-yellow me-2"></i>+63 912 345 6789</p>
          <p class="mt-2"><i class="bi bi-bag text-yellow me-2"></i>Also on <strong style="color:var(--yellow)">Foodpanda</strong></p>
        </div>
      </div>
      <hr class="footer-divider"/>
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p class="footer-copy mb-1">&copy; 2024 Yellow Bean Café. All rights reserved.</p>
        <p class="footer-copy mb-1">Founded by <strong style="color:rgba(255,248,231,.6)">Cashmere Kyra Montenegro</strong></p>
      </div>
    </div>
  </footer>`;

  // Inject before first element
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Highlight active link
  const links = document.querySelectorAll('.navbar-yb .nav-link, .navbar-yb .dropdown-item');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
})();
