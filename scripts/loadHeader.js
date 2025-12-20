async function loadHeader() {
  try {
    const response = await fetch("/partials/header.html");
    const html = await response.text();
    document.getElementById("site-header").innerHTML = html;
  } catch (err) {
    console.error("Error loading header:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadHeader);
