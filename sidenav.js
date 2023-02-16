window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav1');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        currentSectionIndex = i;
        break;
      }
    }
    nav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    nav.querySelectorAll('a')[currentSectionIndex].classList.add('active');
  });
  