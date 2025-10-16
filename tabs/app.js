
    const content = document.querySelector('.content');
    const navButtons = document.querySelectorAll('.nav button');

    for (let btn of navButtons) {
      btn.addEventListener('mouseover', (e) => {
        // Hide all sections
        document.querySelectorAll('.content > div').forEach(div => {
          div.style.display = 'none';
        });

        // Show the clicked section
        const section = e.target.innerText.toLowerCase();
        document.querySelector(`.${section}`).style.display = 'block';
      });

      btn.addEventListener('mouseleave', () => {
    // Hide all again when mouse leaves the button
    document.querySelectorAll('.content > div').forEach(div => div.style.display = 'none');
  });
    }






    // Naive implementation
/*
const homeBtn = document.querySelector('.nav button:nth-child(1)');
const aboutBtn = document.querySelector('.nav button:nth-child(2)');
const addressBtn = document.querySelector('.nav button:nth-child(3)');
const cartBtn = document.querySelector('.nav button:nth-child(4)');

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const address = document.querySelector('.address');
const cart = document.querySelector('.cart');

function hideAll() {
  home.style.display = 'none';
  about.style.display = 'none';
  address.style.display = 'none';
  cart.style.display = 'none';
}

homeBtn.addEventListener('mouseover', () => {
  hideAll();
  home.style.display = 'block';
});
homeBtn.addEventListener('mouseleave', hideAll);

aboutBtn.addEventListener('mouseover', () => {
  hideAll();
  about.style.display = 'block';
});
aboutBtn.addEventListener('mouseleave', hideAll);

addressBtn.addEventListener('mouseover', () => {
  hideAll();
  address.style.display = 'block';
});
addressBtn.addEventListener('mouseleave', hideAll);

cartBtn.addEventListener('mouseover', () => {
  hideAll();
  cart.style.display = 'block';
});
cartBtn.addEventListener('mouseleave', hideAll);
*/