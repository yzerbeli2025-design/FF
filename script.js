// ===== BLOG DATA =====
const articles = [
  {
    title: "Why I Chose IT — Even Though I Want to Be a Surgeon",
    date: "May 10, 2026",
    content: "Many people are surprised when I tell them I study IT but dream of becoming a surgeon. For me, technology and medicine are closer than you think. Understanding coding logic helps me think analytically, and I believe future surgeons will work alongside AI tools every day. This journey is my first step."
  },
  {
    title: "Growing Up in Qaratapa Village: Lessons That Shaped Me",
    date: "April 28, 2026",
    content: "I was born in a small village called Qaratapa in the Sabirabad district. Life there taught me patience, simplicity, and the value of family. My happiest memories are summer trips my father arranged across Azerbaijan's beautiful regions. Those moments made me who I am."
  },
  {
    title: "Chess, Logic Puzzles, and How They Make Me a Better Thinker",
    date: "April 15, 2026",
    content: "In my free time I love playing chess (shashka) and working through logic tests. These games are not just entertainment — they train your mind to think ahead, spot patterns, and stay calm under pressure. Skills I will absolutely need as a surgeon one day."
  },
  {
    title: "My Role Models: Mubariz, Ramil, and Chingiz",
    date: "March 30, 2026",
    content: "When people ask me who inspires me, I always mention three names: Mubariz Ibrahimov, Ramil Safarov, and Chingiz Mustafayev. Each of them left a mark on Azerbaijani history through courage and dedication. I want to leave my own mark — through medicine and love for my homeland."
  },
  {
    title: "First Week at Baku Engineering University — IT Faculty",
    date: "March 10, 2026",
    content: "My first week at BEU was exciting and a little overwhelming. New faces, new subjects, and a whole new city routine. But I reminded myself: my father believes in me, my teachers prepared me, and I have a goal. One step at a time — that is how big dreams are built."
  }
];

// ===== RENDER ARTICLE LISTS =====
function renderArticles() {
  const homeList = document.getElementById("home-article-list");
  const blogList = document.getElementById("blog-article-list");

  // Home: show first 3 only
  articles.slice(0, 3).forEach((a, i) => {
    homeList.innerHTML += articleHTML(a, i);
  });

  // Blog: show all
  articles.forEach((a, i) => {
    blogList.innerHTML += articleHTML(a, i);
  });
}

function articleHTML(a, i) {
  return `
    <li class="article-item" onclick="openArticle(${i})">
      <div class="article-title">${a.title}</div>
      <div class="article-date">${a.date}</div>
    </li>`;
}

// ===== OPEN ARTICLE (simple inline expand) =====
function openArticle(index) {
  const article = articles[index];
  alert(`📖 ${article.title}\n\n${article.content}\n\n— ${article.date}`);
  // In a real blog you would navigate to a full article page
}

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  // Show selected page
  document.getElementById("page-" + pageName).classList.add("active");

  // Update active nav link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("onclick") && link.getAttribute("onclick").includes(pageName)) {
      link.classList.add("active");
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== DARK / LIGHT THEME TOGGLE =====
function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector(".theme-toggle");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    btn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    btn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
}

// ===== LOAD SAVED THEME =====
function loadTheme() {
  const saved = localStorage.getItem("theme");
  const btn = document.querySelector(".theme-toggle");
  if (saved === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  }
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", function () {
  loadTheme();
  renderArticles();
});
