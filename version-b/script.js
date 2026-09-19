const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav?.classList.toggle('open',!open)});

document.querySelectorAll('[data-mega-toggle]').forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    if(window.innerWidth<=900){e.preventDefault();const item=btn.closest('.nav-item');document.querySelectorAll('.nav-item.mega-open').forEach(i=>{if(i!==item)i.classList.remove('mega-open')});item?.classList.toggle('mega-open')}
  });
});

document.querySelectorAll('.primary-nav a:not([data-mega-toggle])').forEach(link=>link.addEventListener('click',()=>{nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));

const videoDialog=document.querySelector('#video-dialog');
document.querySelectorAll('[data-open-video]').forEach(btn=>btn.addEventListener('click',()=>videoDialog?.showModal()));
videoDialog?.querySelector('.dialog-close')?.addEventListener('click',()=>videoDialog.close());

const appt=document.querySelector('#appointment-dialog');
document.querySelectorAll('[data-open-appointment]').forEach(btn=>btn.addEventListener('click',(e)=>{e.preventDefault();appt?.showModal()}));
appt?.querySelector('.dialog-close')?.addEventListener('click',()=>appt.close());
appt?.querySelector('form')?.addEventListener('submit',(e)=>{e.preventDefault();appt.querySelector('.appointment-form')?.classList.add('hide');appt.querySelector('.success-state')?.classList.add('show')});

document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));

// Phase 3: restrained reveal motion for presentation polish
const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}
  })
},{threshold:.12}) : null;
document.querySelectorAll('section:not(.hero), .authority-card, .location-card').forEach(el=>{
  if(!el.classList.contains('value-strip')) el.classList.add('reveal');
  if(revealObserver) revealObserver.observe(el); else el.classList.add('is-visible');
});
