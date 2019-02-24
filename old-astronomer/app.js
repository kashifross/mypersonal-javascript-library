
  let output = document.querySelector('.container');
  let title = document.createElement('div')
  let h1 = document.createElement('h1');
  let text = document.createTextNode('The Old Astronomer');
  h1.appendChild(text);
  title.appendChild(h1)
  output.appendChild(title)

  let poem = document.createElement('div')
  let para = document.createElement('p');
  let line1 = document.createTextNode('Though my soul may set in darkness, it will rise in perfect light; I have loved the stars too truly to be fearful of the night.');
  para.appendChild(line1);
  poem.appendChild(para)
  output.appendChild(poem)

  document.querySelector('h1').style.color = '#984b43';
  document.querySelector('p').style.cssText = 'color: #233237; font-size: 1.3em;';
  document.querySelector('body').style.backgroundColor = '#eac67a';