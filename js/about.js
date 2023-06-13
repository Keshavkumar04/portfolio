// document.addEventListener('DOMContentLoaded', function() {
//     const paragraph = document.getElementById('paragraph');
//     if (paragraph) {
//       const words = paragraph.innerText.split(' ');
  
//       paragraph.innerText = '';
  
//       words.forEach((word, index) => {
//         const span = document.createElement('span');
//         span.innerText = word + ' ';
//         span.classList.add('fade-in');
//         span.style.animationDelay = `${index * 0.5}s`;
//         paragraph.appendChild(span);
//       });
//     }
//   });


function startFadeInAnimation() {
    const paragraph = document.getElementById('paragraph');
    if (paragraph) {
      const words = paragraph.innerText.split(' ');
      paragraph.innerHTML = '';

      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.innerText = word + ' ';
        span.classList.add('fade-in');
        span.style.animationDelay = `${index * 0.25}s`;
        paragraph.appendChild(span);
      });

      const spans = paragraph.getElementsByClassName('fade-in');

      // Detect animation end for the last span and restart the animation
      spans[spans.length - 1].addEventListener('animationend', () => {
        restartAnimation();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', startFadeInAnimation);

  // Call startFadeInAnimation() to restart the animation
  function restartAnimation() {
    const paragraph = document.getElementById('paragraph');
    paragraph.innerHTML = paragraph.innerHTML; // Reset the HTML content to restart the animation
    startFadeInAnimation(); // Restart the fade-in animation
  }

 