// Mobile nav
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('show'));
    });

    // Countdown
    const targetDate = new Date("June 18, 2026 16:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      if (distance < 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // Active nav on scroll
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav a");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
