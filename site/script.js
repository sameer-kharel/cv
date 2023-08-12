// for the header section
window.addEventListener('scroll', function() {
  var header = document.querySelector('.transparent-header');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('sticky-header');
  var scrollPosition = window.pageYOffset;
  const currentScrollPos = window.pageYOffset;
  const header = document.querySelector('header');

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    header.style.top = '0';
  } else {
    // Scrolling down
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
});

// Add smooth scrolling to anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchorLink.getAttribute('href'));
      
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add a fade-in effect to the sections on scrolling
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});

// for the skills section 


// Animate skills on scroll
document.addEventListener("DOMContentLoaded", function() {
  const skillsSection = document.querySelector(".skills-section");
  const skills = document.querySelectorAll(".skill");

  function animateSkills() {
    const skillsSectionPosition = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsSectionPosition < windowHeight - 100) {
      skills.forEach(function(skill, index) {
        setTimeout(function() {
          skill.classList.add("animate");
        }, index * 200);
      });
    }
  }

  document.addEventListener("scroll", animateSkills);
  animateSkills();
});


