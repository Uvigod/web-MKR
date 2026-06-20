
document.querySelector('.menu-toggle')?.addEventListener('click',()=>{
document.querySelector('.menu').classList.toggle('active');
});
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
