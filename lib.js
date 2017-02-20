console.log("JS is Loading")

const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

panels.ForEach(panel => panel.addEventListener('click', toggleOpen));
