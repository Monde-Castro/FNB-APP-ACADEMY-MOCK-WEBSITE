// Mobile Menu Toggle
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });


// Counter Animation
function animateCount(el, target) {
    let count = 0;
    const speed = target > 10000 ? 100 : 20;
    const updateCount = () => {
      const increment = Math.ceil(target / speed);
      count += increment;
      if (count >= target) {
        el.textContent = target;
      } else {
        el.textContent = count;
        requestAnimationFrame(updateCount);
      }
    };
    updateCount();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-target]");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      animateCount(counter, target);
    });
  });



// Countdown Script
const targetDate = new Date("2025-10-01T00:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  document.getElementById("w_days").textContent = days;
  document.getElementById("w_hours").textContent = hours;
  document.getElementById("w_minutes").textContent = minutes;
  document.getElementById("w_seconds").textContent = seconds;
}
setInterval(updateCountdown, 1000);
 
// Email Submission 
function handleWaitlist(event) {
  event.preventDefault();
  const email = document.getElementById("waitlist-email").value;

  // Simulate success response
  document.getElementById("waitlist-form").classList.add("hidden");
  document.getElementById("waitlist-success").classList.remove("hidden");
  document.getElementById("w_waitlist-success").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("waitlist-form").classList.remove("hidden");
    document.getElementById("waitlist-success").classList.add("hidden");
    document.getElementById("w_waitlist-success").classList.add("hidden");
    document.getElementById("waitlist-form").reset();
  }, 3000);
}

function showSuccess(event) {
    event.preventDefault();

    const form = document.getElementById("waitlist-form");
    const email = document.getElementById("waitlist-email").value;

    const form2 = document.getElementById("w_waitlist-form");
    const email2 = document.getElementById("w_waitlist-email").value;

    // Submit to Formspree manually
    fetch(form.action, {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(form)
    }).then(response => {
      if (response.ok) {
        form.classList.add("hidden");
        document.getElementById("waitlist-success").classList.remove("hidden");
        document.getElementById("w_waitlist-success").classList.remove("hidden");
        
        // 🎉 Launch confetti
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 }
        });

        setTimeout(() => {
          form.reset();
          form.classList.remove("hidden");
          document.getElementById("waitlist-success").classList.add("hidden");
          document.getElementById("w_waitlist-success").classList.add("hidden");
        }, 3500);
      } else {
        alert("Oops! Something went wrong.");
      }
    });

    return false;
  }


// FAQ Toggle Script
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});

//
document.addEventListener('DOMContentLoaded', () => {
    const techCards = document.querySelectorAll('.tech-card');
    const techObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    techCards.forEach(card => {
      techObserver.observe(card);
    });
  });
// Tab switching functionality
        function switchTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Remove active class from all tab buttons
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Show selected tab content
            const selectedTab = document.getElementById(tabName);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }

            // Add active class to clicked button
            const clickedButton = event.target.closest('.tab-button');
            if (clickedButton) {
                clickedButton.classList.add('active');
            }
        }

        // Level system interaction for curriculum
        document.addEventListener('DOMContentLoaded', function() {
            const levelBadges = document.querySelectorAll('.level-badge');
            const weekCards = document.querySelectorAll('.week-card');

            levelBadges.forEach((badge, index) => {
                badge.addEventListener('click', function() {
                    // Remove active class from all badges
                    levelBadges.forEach(b => b.classList.remove('active'));
                    
                    // Add active class to clicked badge
                    this.classList.add('active');

                    // Filter week cards based on level
                    const levels = ['Beginner', 'Intermediate', 'Advanced'];
                    const selectedLevel = levels[index];

                    weekCards.forEach(card => {
                        const cardLevel = card.querySelector('.week-level').textContent;
                        if (selectedLevel === 'all' || cardLevel === selectedLevel) {
                            card.style.display = 'block';
                            card.style.opacity = '1';
                        } else {
                            card.style.opacity = '0.3';
                        }
                    });
                });
            });

            // Career card interactions
            const careerCards = document.querySelectorAll('.career-card');
            careerCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Add a subtle pulse animation when clicked
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            });

            // Week card hover effects with details
            weekCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '1';
                });
            });

            // Smooth scroll for career CTAs
            const careerCTAs = document.querySelectorAll('.career-cta');
            careerCTAs.forEach(cta => {
                cta.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Add visual feedback
                    this.style.transform = 'scale(0.95)';
                    this.textContent = 'Coming Soon...';
                    
                    setTimeout(() => {
                        this.style.transform = '';
                        this.textContent = 'Start This Path';
                    }, 1000);
                });
            });

            // Progress step interactions
            const progressSteps = document.querySelectorAll('.progress-step');
            progressSteps.forEach((step, index) => {
                step.addEventListener('click', function() {
                    // Animate progression
                    progressSteps.forEach((s, i) => {
                        if (i <= index) {
                            s.classList.add('completed');
                        } else {
                            s.classList.remove('completed');
                        }
                    });
                });
            });
        });

        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                const tabs = ['curriculum', 'careers', 'timeline'];
                const currentActive = document.querySelector('.tab-button.active');
                const currentIndex = Array.from(document.querySelectorAll('.tab-button')).indexOf(currentActive);
                
                if (e.shiftKey && currentIndex > 0) {
                    // Previous tab
                    e.preventDefault();
                    switchTab(tabs[currentIndex - 1]);
                } else if (!e.shiftKey && currentIndex < tabs.length - 1) {
                    // Next tab
                    e.preventDefault();
                    switchTab(tabs[currentIndex + 1]);
                }
            }
        });

const scrollContainer = document.querySelector('.success-scroll-container');

setInterval(() => {
  scrollContainer.scrollBy({
    left: 320,
    behavior: 'smooth'
  });
}, 4000);
