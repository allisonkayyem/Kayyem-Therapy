async function loadFooter() {
  try {
    const response = await fetch("/partials/footer.html", {
      cache: "no-cache",
    });
    const html = await response.text();
    document.getElementById("site-footer").innerHTML = html;

    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  } catch (err) {
    console.error("Error loading footer:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadFooter);
