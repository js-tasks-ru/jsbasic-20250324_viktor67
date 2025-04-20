function toggleText() {
  const text = document.querySelector('#text');
  const button = document.querySelector('.toggle-text-button');

  button.addEventListener('click', ()=>{
    if (text.hidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}
