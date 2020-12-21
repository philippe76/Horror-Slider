let imageSource = [
    'https://i.pinimg.com/564x/9b/e5/57/9be5576e2d26c3f5de6cbd317e4aad07.jpg',
    'https://i.pinimg.com/564x/23/79/97/2379975c20c718983a68c9b9e30cca90.jpg',
    'https://i.pinimg.com/564x/6a/5c/db/6a5cdb069ecc5994c1bd38e6f8147506.jpg',
    'https://i.pinimg.com/564x/8a/53/e8/8a53e889e0f485dbf906f556931849ac.jpg',
    'https://i.pinimg.com/564x/e3/f8/ad/e3f8ad71479a360d67d75befe93d4313.jpg',
    'https://i.pinimg.com/564x/98/0f/1d/980f1d91b59b2f8b101053264a28f967.jpg',
    'https://i.pinimg.com/564x/4d/c2/33/4dc233d390edd580884798cc02c3e35f.jpg',
    'https://i.pinimg.com/564x/43/5a/8c/435a8c34e5faf29510c95bf7bb46f2c6.jpg',
    'https://i.pinimg.com/564x/88/9b/e5/889be52e3c2a800cc170e3194656296c.jpg',
    'https://i.pinimg.com/564x/a4/c5/3a/a4c53aa6bae6ac8da11c96459b046793.jpg',
    'https://i.pinimg.com/564x/94/b1/f7/94b1f72cff7be6a9f7d14edd86ce1dc3.jpg'  
  ];
  
  const addImg = () => {
      imageSource.forEach(item => {
          let slideImg = document.createElement('img');
          slideImg.setAttribute('src', `${item}`);
          document.querySelector('.slider').appendChild(slideImg);
      })
  };
  
  addImg();
  
  const slideArrLeft = () => {
      let first = imageSource[0];
      imageSource.splice(0,1);
      imageSource.push(first);
  }
  
  const slideArrRight = () => {
      let last = imageSource[imageSource.length-1];
      imageSource.splice(imageSource.length-1,1);
      imageSource.unshift(last);
  }
  
  document.querySelector('#slideRight').addEventListener('click', ()=> {
          document.querySelector('.slider').innerHTML = '';
          slideArrRight();
          addImg(); 
  })
  
  document.querySelector('#slideLeft').addEventListener('click', ()=> {
          document.querySelector('.slider').innerHTML = '';
          slideArrLeft();
          addImg(); 
  })
  


let date = new Date().getFullYear();

let credits = `Filip © ${date}`;

document.querySelector('#credits').innerHTML = credits;