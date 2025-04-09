// aamin nako most of the javascript code here is prompted at claude.ai, but only for the page transition saka scrolling animation 

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const overlay = document.querySelector('.page-transition-overlay');
    
    // Function to switch sections with transition
    function switchSection(sectionId) {
        // Show overlay
        overlay.classList.add('active');
        
        // After overlay is fully visible
        setTimeout(() => {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Update nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // After a delay, show the new section
            setTimeout(() => {
                // Show the target section
                const targetSection = document.getElementById(sectionId);
                targetSection.classList.add('active');
                
                // Update active nav link
                document.querySelector(`.nav-link[data-section="${sectionId}"]`).classList.add('active');
                
                // Hide overlay
                overlay.classList.remove('active');
            }, 1000);
            
        }, 500);
    }
    
    // Add event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          // If the element is in the viewport
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animate-in');
          } else {
            // Remove the animation class when out of view
            entry.target.classList.remove('animate-in');
          }
        });
      }, {
        threshold: 0.15, // Trigger when at least 15% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Slightly adjust the detection area
      });
    
      // Select all elements with the 'animate-on-scroll' class
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      
      // Observe each element
      animateElements.forEach(element => {
        observer.observe(element);
    });

    // Adding hover effect for achievement items
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    achievementItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.achievement-icon').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            this.querySelector('.achievement-icon i').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.achievement-icon').style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            this.querySelector('.achievement-icon i').style.opacity = '0.8';
        });
    });
    
    // Adding staggered animation delay to achievement items
    const achievementLists = document.querySelectorAll('.achievement-list');
    
    achievementLists.forEach(list => {
        const items = list.querySelectorAll('.achievement-item');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 100}ms`;
        });
    });
    
    // Animate references on hover
    const referenceCards = document.querySelectorAll('.reference-card');
    
    referenceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
