const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (el) => {
    cursor.style.left = el.clientX + 'px';
    cursor.style.top = el.clientY + 'px';
})
