// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseImgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 500; i++)
{
    const Frame = document.createElement('div');
    Frame.classList.add('pokemon');
      
    const FrameImg = document.createElement('img');
    FrameImg.src = `${baseImgURL}${i}.png`;
    
    const FrameLabel = document.createElement('span');
    FrameLabel.innerText = `#${i}`;

    container.appendChild(Frame);  
    Frame.appendChild(FrameImg);
    Frame.appendChild(FrameLabel);
}
