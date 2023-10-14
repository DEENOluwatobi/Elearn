"use client";
// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import Image from 'next/image';
// import img1 from '@Images/one.jpg';
// import img2 from '@Images/two.jpg';
// import img3 from '@Images/three.jpg';

// interface ExtendedHTMLElement extends HTMLElement {
//   clicked: boolean;
// }

// const Gallery = () => {
//   useEffect(() => {
//     const items = document.querySelectorAll('.item');

//     const expand = (item: ExtendedHTMLElement, i: number) => {
//       items.forEach((it, ind) => {
//         if (i === ind) return;
//         (it as ExtendedHTMLElement).clicked = false;
//         gsap.to(it, {
//           width: '15vw',
//           duration: 2,
//           ease: 'elastic(1, .6)',
//         });
//       });

//       gsap.to(items, {
//         width: item.clicked ? '15vw' : '8vw',
//         duration: 2,
//         ease: 'elastic(1, .6)',
//       });

//       item.clicked = !item.clicked;
//       gsap.to(item, {
//         width: item.clicked ? '42vw' : '15vw',
//         duration: 2.5,
//         ease: 'elastic(1, .3)',
//       });
//     };

//     items.forEach((item, i) => {
//       (item as ExtendedHTMLElement).clicked = false;
//       item.addEventListener('click', () => expand(item as ExtendedHTMLElement, i));
//     });
//   }, []);

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div className="text-center whitespace-nowrap overflow-hidden">
//         <div className="m-1 bg-center bg-cover rounded-3xl inline-block cursor-pointer item" style={{ width: '15vw' }}>
//             <Image src={img1} alt="image" style={{ width: '100%', height: '300px' }}/>
//         </div>

//         <div className="m-1 bg-center bg-cover rounded-3xl inline-block cursor-pointer item" style={{ width: '15vw' }}>
//              <Image src={img2} alt="image" style={{ width: '100%', height: '300px' }}/>
//         </div>

//         <div className="m-1 bg-center bg-cover rounded-3xl inline-block cursor-pointer item" style={{ width: '15vw' }}>
//           <Image src={img3} alt="image" style={{ width: '100%', height: '300px' }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import img1 from '@Images/one.jpg';
import img2 from '@Images/two.jpg';
import img3 from '@Images/three.jpg';

interface ExtendedHTMLElement extends HTMLElement {
  clicked: boolean;
}

const Gallery = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.item');

    const expand = (item: ExtendedHTMLElement, i: number) => {
      items.forEach((it, ind) => {
        const currentElement = it as ExtendedHTMLElement;
        if (i !== ind && currentElement.clicked) {
          currentElement.clicked = false;
          gsap.to(it, {
            width: '8vw',
            duration: 2,
            ease: 'elastic(1, .5)',
          });
        }
      });

      item.clicked = !item.clicked;
      gsap.to(item, {
        width: item.clicked ? '35vw' : '8vw',
        duration: 2.5,
        ease: 'elastic(1, .5)',
      });
    };

    items.forEach((item, i) => {
      const currentElement = item as ExtendedHTMLElement;
      currentElement.clicked = i === 0;
      gsap.to(item, {
        width: currentElement.clicked ? '35vw' : '8vw',
        duration: 2.5,
        ease: 'elastic(1, .5)',
      });
      item.addEventListener('click', () => expand(currentElement, i));
    });
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center whitespace-nowrap overflow-hidden w-full h-full flex items-center justify-center">
        <div className="m-1 bg-center bg-cover rounded-3xl inline-block cursor-pointer overflow-hidden item border-2 border-gray-500 h-[70%]" style={{ width: '8vw' }}>
          <Image src={img1} alt="image" className="object-cover w-full h-full" />
        </div>

        <div className="m-1 bg-center bg-cover rounded-3xl inline-block cursor-pointer overflow-hidden item border-2 border-gray-500 h-[70%]" style={{ width: '8vw' }}>
          <Image src={img2} alt="image" className="object-cover w-full h-full" />
        </div>

        <div className="m-1 bg-center bg-cover rounded-3xl inline-block cursor-pointer overflow-hidden item border-2 border-gray-500 h-[70%]" style={{ width: '8vw' }}>
          <Image src={img3} alt="image" className="object-cover w-full h-full" />
        </div>

        <div className="m-1 bg-center bg-cover rounded-3xl inline-block cursor-pointer overflow-hidden item border-2 border-gray-500 h-[70%]" style={{ width: '8vw' }}>
          <Image src={img3} alt="image" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
