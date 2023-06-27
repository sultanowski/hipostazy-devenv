import './css/main.css';

import barba from '@barba/core';
import gsap from 'gsap';
import hoverEffect from 'hover-effect';

window.Webflow ||= [];
window.Webflow.push(() => {
  barba.init({
    preventRunning: true,
    transitions: [
      {
        from: { namespace: ['blog'] },
        to: { namespace: ['cards'] },
        async leave(data) {
          await gsap.to(data.current.container, {
            opacity: 0,
            duration: 1,
          });
        },
        beforeEnter() {
          generateCanvas();
        },
        async enter(data) {
          gsap.from(data.next.container, {
            opacity: 0,
            duration: 1,
          });
          await gsap.to(data.next.container, {
            opacity: 1,
            duration: 0,
          });
        },
      },
      {
        from: { namespace: ['cards'] },
        to: { namespace: ['blog'] },
        async leave(data) {
          await gsap.to(data.current.container, {
            opacity: 0,
            duration: 1,
          });
        },
        async enter(data) {
          gsap.from(data.next.container, {
            opacity: 0,
            duration: 1,
          });
          await gsap.to(data.next.container, {
            opacity: 1,
            duration: 0,
          });
        },
      },
    ],
  });

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  function generateCanvas() {
    const firstImage = document.querySelectorAll(
      '.blogpost-image_thumbnail'
    ) as NodeListOf<HTMLImageElement>;
    const secondImage = document.querySelectorAll(
      '.blogpost-image_image'
    ) as NodeListOf<HTMLImageElement>;
    const blogposts = document.querySelectorAll(
      '[zu-hipostazy="blogpost-morph"]'
    ) as NodeListOf<HTMLElement>;
    for (let i = 0; i < blogposts.length; i++) {
      new hoverEffect({
        parent: blogposts[i],
        intensity: 0.25,
        angle: getRandomArbitrary(1, 4),
        image1: `${firstImage[i].src}`,
        image2: `${secondImage[i].src}`,
        displacementImage:
          'https://uploads-ssl.webflow.com/644bc713fd500afe82fdab78/6499521f8931839715de7ed0_displacement-mask.png',
      });
    }
  }
  generateCanvas();
});
