document.addEventListener("DOMContentLoaded", function () {
  const pages = [
    { href: "index.html", label: "Home" },
    { href: "page2.html", label: "Playground" }
    // thêm trang mới vào đây
  ];

  const current = location.pathname.split("/").pop() || "index2.html";

  const items = pages.map(p => `
    <li class="nav-item">
      <a class="nav-link ${p.href === current ? "active" : ""}" href="${p.href}">${p.label}</a>
    </li>`).join("");

  document.getElementById("navbar").innerHTML = `
    <nav class="navbar navbar-expand-md bg-secondary" data-bs-theme="dark">
      <div class="container-fluid">
        <a href="index.html" class="navbar-brand text-white">Mineweb</a>
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#nav"
                aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav me-auto">${items}</ul>
          <button type="button" class="btn btn-outline-light btn-sm" id="backBtn">← Quay lại</button>
        </div>
      </div>
    </nav>`;

  document.getElementById("backBtn").addEventListener("click", function () {
    if (document.referrer && history.length > 1) {
      history.back();
    } else {
      location.href = "index2.html";
    }
  });
});