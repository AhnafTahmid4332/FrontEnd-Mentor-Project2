const cartButton = document.querySelector('.js-button');

cartButton.addEventListener('click', (event) => {
  const button = event.currentTarget;
  if (button.innerHTML !== 'Added to Cart') {
      button.innerHTML = 'Added to Cart'
  } else {
    button.innerHTML ='Add to Cart'
  }
})