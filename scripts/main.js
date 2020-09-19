async function carousel(){
  let qualities = ['curious', 'determined', 'a Problem Solver', 'creative', 'a dreamer'];
  let par = document.querySelector('.qualities');
  let i = 0;
  setInterval(function(){
    if (i === qualities.length -1)
      i = 0;
    else
      par.textContent = qualities[i++];

  }, 3000);
}

carousel();
