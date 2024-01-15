const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e) {
  let left = e.clientX;
  let top = e.clientY;
  cursor.style.left = left + 'px';
  cursor.style.top = top + 'px';
});


const links = document.querySelectorAll('a, p, h1, h2, h3, img, span, figure, label, textarea, input')

links.forEach(link => {
  link.addEventListener('mouseenter', e => {
    cursor.classList.add('enlarged')
  })
  link.addEventListener('mouseout', e => {
    cursor.classList.remove('enlarged')
  })
})