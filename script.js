var images;


images = ['https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/15/13/istock-671323338.jpg', 'https://www.travelandleisure.com/thmb/P90MdtD1Dk5nLQfqit07eoRr7zo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penguins-boulder-beach-CAPETOWNTG0721-1f100c9c0bb94a42bc816b33a5dc4d5b.jpg', 'https://wp.dailybruin.com/images/2023/10/CT-Collage.jpg', 'https://static01.nyt.com/images/2024/03/21/multimedia/21Hours-CapeTown-zvpj/21Hours-CapeTown-zvpj-facebookJumbo.jpg', 'https://www.capetown.travel/wp-content/uploads/2022/06/Family-Friendly.jpg'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  if (!!images.length) {
    let element_image2 = document.getElementById('image');
    element_image2.setAttribute("src", images[0]);
    images.push(images.shift());
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  if (!!images.length) {
    let element_image3 = document.getElementById('image');
    element_image3.setAttribute("src", images.slice(-1)[0]);
    images.unshift(images.pop());
  }

});