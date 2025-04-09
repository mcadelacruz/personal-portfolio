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
});
