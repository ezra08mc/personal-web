const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function updateThemeIcon(isLight) {
  if (isLight) {
    themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  } else {
    themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  }
}

const savedTheme = localStorage.getItem('ezra-theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  updateThemeIcon(true);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    updateThemeIcon(isLightMode);
    localStorage.setItem('ezra-theme', isLightMode ? 'light' : 'dark');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -20px 0px",
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => revealObserver.observe(el));

  window.refreshObserver = function() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      revealObserver.observe(el);
    });
  };
});

function openArticle(id) {
  const container = document.getElementById('article-content-container');
  if (!container) return;

  const articlesData = {
    'go-vs-js': {
      title: "💫 Golang vs JavaScript",
      date: "Mar 29, 2026",
      image: "./assets/blog1.png",
      content: `
        <p>When I first started coding, I was honestly overwhelmed. Choosing a language felt like looking at a massive menu where everything looked tasty, but I had no idea what anything actually was. I eventually dove into JavaScript because everyone said it was the most popular and the easiest way to see something actually happen in the browser.</p>
        <p>In the beginning, JavaScript felt like a superpower. With just a few lines of code, I could make a website come to life. But as time went on, my code started looking like a mess. JavaScript is very "free," which is cool, but for a beginner like me, it meant I was constantly confused about why things were breaking when they worked just a second ago.</p>
        <p>Then I met Golang halfway through the semester. At first, it felt incredibly stiff. Everything had to be perfectly defined, and it wouldn't let me get away with anything. Funnily enough, that "stiffness" was exactly what made me feel safe. Go is like a strict but fair teacher; it yells at you while you're typing, not after you run the code, so I stopped staying up all night just to find a simple typo.</p>
        <p>My experience with Go taught me how data is actually handled behind the scenes. In JavaScript, I only thought about "how it looks," but in Go, I started thinking about "how it performs." Go is simple but powerful, perfect for someone like me who started getting interested in systems that handle a lot of processes without making my laptop fan sound like a jet engine.</p>
        <p>In conclusion, if you want to quickly build something to show off to your friends, JavaScript is the winner. But if you want to be the "architect" behind the scenes with clean, solid code, give Go a shot. Honestly, I find myself using both together now because they make a pretty awesome team.</p>
      `
    },
    'gemini-pro': {
      title: "✨ My 365-Day Journey with Gemini Pro",
      date: "Mar 29, 2026",
      image: "./assets/blog2.png",
      content: `
        <p>A year ago, I started using Gemini Pro to help me with my college assignments. At first, I was worried I’d get lazy or just become a "copy-paste" machine. But after a year, I’ve realized that Gemini isn't a replacement for my brain; it’s more like a very patient mentor who is always awake at 2 AM to answer my silly questions.</p>
        <p>The most helpful thing for me was when I got stuck on complex logic. Instead of asking for the final code, I started asking Gemini to explain the concepts using everyday analogies. It felt like having a private tutor who never got bored explaining the same thing over and over until I actually understood it.</p>
        <p>Sometimes I use Gemini for brainstorming. When I have a project idea, I discuss the structure with it. It often offers perspectives I never considered, like security issues or writing more efficient code. This helped me see the "big picture" of an application rather than just focusing on small blocks of code.</p>
        <p>Of course, there were times when Gemini gave some slightly weird answers. But that was actually the fun part; I was forced to double-check and research. Those moments when I found a mistake in its answer were actually when I learned the most, because I had to understand the topic deeply enough to know why it was wrong.</p>
        <p>Basically, this year with Gemini has made me a more productive programmer. The key is using AI to learn how to "fish," not just asking for the "fish" itself. Coding doesn't feel as heavy as it used to because I know there's a place to ask for help whenever I hit a wall.</p>
      `
    },
    'linux': {
      title: "🐧 Why Every Student Should Try Linux",
      date: "Mar 29, 2026",
      image: "./assets/blog3.png",
      content: `
        <p>I clearly remember the moment I finally built up the courage to delete Windows and move completely to Fedora. It felt like moving into a new house with no furniture; I was confused and afraid of making mistakes, but at the same time, I felt incredibly free. No more automatic update drama during a presentation or random slow-downs for no reason.</p>
        <p>On Linux, I learned that the "Terminal" isn't a scary thing like in hacker movies. It’s actually the most efficient tool I’ve ever owned. I used to be too lazy to type commands, but now I feel much faster getting things done through the keyboard than clicking around with a mouse.</p>
        <p>Switching to Linux really opened my eyes to how an operating system actually works. I learned how to manage file permissions, how my laptop memory is used, and how to install software without searching through sketchy websites. This knowledge turned out to be super useful once I started learning about servers and the cloud in class.</p>
        <p>One thing I love most is the community. When I find an error, the answer is usually already on a forum and people genuinely want to help. Linux taught me to be more independent as an informatics engineering student. I’m not just a "user" anymore; I feel like I actually "own" and control the device I’m using.</p>
        <p>For the other students, just try installing Linux at least once. You don't have to delete Windows right away; just try it in a Virtual Machine. The experience of tinkering with the system will give you a technical instinct that you won't get from a pre-made OS. Believe me, the sense of pride is different when you successfully fix your own system.</p>
      `
    }
  };

  const article = articlesData[id];
  
  container.innerHTML = `
    <div class="blog-detail-meta reveal">
      <div class="blog-detail-meta-row">
        <span class="blog-detail-meta-label">Author</span>
        <span class="blog-detail-meta-value">Ezra Mighty</span>
      </div>
      <div class="blog-detail-meta-row">
        <span class="blog-detail-meta-label">Published</span>
        <span class="blog-detail-meta-value" style="color: var(--accent);">${article.date}</span>
      </div>
    </div>
    <h1 class="reveal" style="font-size: 26px; font-weight: 700; margin-bottom: 20px; line-height: 1.3;">${article.title}</h1>
    <div class="reveal" style="font-size: 14px; color: var(--text-muted); line-height: 1.6; display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px;">
      ${article.content}
    </div>
    <div class="reveal" style="width: 100%; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--card-border);">
      <img src="${article.image}" alt="${article.title}" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: cover;">
    </div>
  `;
  
  document.getElementById('view-blog-list').style.display = 'none';
  document.getElementById('view-blog-detail').style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'auto' });
  
  if(window.refreshObserver) window.refreshObserver();
}

function closeArticle() {
  document.getElementById('view-blog-detail').style.display = 'none';
  document.getElementById('view-blog-list').style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  if (lightbox && lightboxImg) {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox(event, forceClose = false) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  if (forceClose || event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeLightbox(event, true);
  }
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  if (!loader) return;

  if (!sessionStorage.getItem("viewedLoader")) {
    setTimeout(() => {
      loader.classList.add("loader-hidden");
      sessionStorage.setItem("viewedLoader", "true");
    }, 500);
  } else {
    loader.style.display = "none";
  }
});