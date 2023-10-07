// ============= stats
const statItems = document.querySelectorAll('.stat-num');
let animationStarted = false;

function startCounting(element) {
  const targetCount = parseInt(element.textContent);
  let currentCount = 0;
  
  const counter = setInterval(() => {
    if (currentCount <= targetCount) {
      element.textContent = currentCount;
      currentCount++;
    } else {
      clearInterval(counter);
    }
  }, 10);
}

window.addEventListener('scroll', () => {
  if (!animationStarted) {
    statItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        startCounting(item);
        animationStarted = true;
      }
    });
  }
});

// =============================



let test0 = document.querySelector('.serv-nav-hover')
let test = document.querySelector('.fa-chevron-down')
let test1 = document.querySelector('.services-menu')
let test2 = document.querySelector('#services-nav-link')

test0.addEventListener('mouseenter', function(){
  test1.classList.remove('d-none');
})
test2.addEventListener('mouseenter', function(){
  test.style.cssText = 'transform: rotate(180deg)';
})
test2.addEventListener('click', function(){
  test.style.cssText = 'transform: rotate(0deg)';
  test1.classList.add('d-none');
})

// ===============
// service house moving attaching imgs
let input_attache_imgs = document.querySelector('#attache_imgs');
let div_attache_imgs = document.querySelector('.attache_imgs');
div_attache_imgs.addEventListener('click', function(){
  input_attache_imgs.click();
})
