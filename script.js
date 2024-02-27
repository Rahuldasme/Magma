function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco();

function page2Animation() {
  let clutter = "";
  document
    .querySelector("#page2 h1")
    .textContent.split(" ")
    .forEach(function (elem) {
      clutter += `<span> ${elem} </span>`;

      document.querySelector("#page2 h1").innerHTML = clutter;
    });

  gsap.to("#page2 h1 span", {
    scrollTrigger: {
      trigger: `#page2 h1 span`,
      start: `top bottom`,
      end: `top 40%`,
      scroller: `#main`,
      scrub: 0.5,
    },
    stagger: 0.2,
    color: `#fff`,
  });
}
page2Animation();

function canvaspg3() {
  // Make sure you include GSAP and ScrollTrigger in your project before using this code
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  Assets/frames/frames00007.png 
  Assets/frames/frames00010.png 
  Assets/frames/frames00013.png 
  Assets/frames/frames00016.png 
  Assets/frames/frames00019.png 
  Assets/frames/frames00022.png 
  Assets/frames/frames00025.png 
  Assets/frames/frames00028.png 
  Assets/frames/frames00031.png 
  Assets/frames/frames00034.png 
  Assets/frames/frames00037.png 
  Assets/frames/frames00040.png 
  Assets/frames/frames00043.png 
  Assets/frames/frames00046.png 
  Assets/frames/frames00049.png 
  Assets/frames/frames00052.png 
  Assets/frames/frames00055.png 
  Assets/frames/frames00058.png 
  Assets/frames/frames00061.png 
  Assets/frames/frames00064.png 
  Assets/frames/frames00067.png 
  Assets/frames/frames00070.png 
  Assets/frames/frames00073.png 
  Assets/frames/frames00076.png 
  Assets/frames/frames00079.png 
  Assets/frames/frames00082.png 
  Assets/frames/frames00085.png 
  Assets/frames/frames00088.png 
  Assets/frames/frames00091.png 
  Assets/frames/frames00094.png 
  Assets/frames/frames00097.png 
  Assets/frames/frames00100.png 
  Assets/frames/frames00103.png 
  Assets/frames/frames00106.png 
  Assets/frames/frames00109.png 
  Assets/frames/frames00112.png 
  Assets/frames/frames00115.png 
  Assets/frames/frames00118.png 
  Assets/frames/frames00121.png 
  Assets/frames/frames00124.png 
  Assets/frames/frames00127.png 
  Assets/frames/frames00130.png 
  Assets/frames/frames00133.png 
  Assets/frames/frames00136.png 
  Assets/frames/frames00139.png 
  Assets/frames/frames00142.png 
  Assets/frames/frames00145.png 
  Assets/frames/frames00148.png 
  Assets/frames/frames00151.png 
  Assets/frames/frames00154.png 
  Assets/frames/frames00157.png 
  Assets/frames/frames00160.png 
`;

    return data.split("\n")[index];
  }

  const frameCount = 52;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page3`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page3",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `250% top`,
  });
}
canvaspg3();

function page4Animation() {
  let clutter = "";

  document
    .querySelector("#page4 h1")
    .textContent.split("")
    .forEach(function (i) {
      clutter += `<span>${i}</span>`;

      document.querySelector("#page4 h1").innerHTML = clutter;
    });

  gsap.to("#page4>h1>span", {
    scrollTrigger: {
      trigger: `#page4 h1 span`,
      start: `top bottom`,
      end: `top 30%`,
      scroller: `#main`,
      scrub: 0.5,
      // markers:true
    },
    stagger: 0.2,
    color: `#fff`,
  });
}
page4Animation();

function canvaspg5() {
  // Make sure you include GSAP and ScrollTrigger in your project before using this code
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
Assets/bridges/bridges00004.png
Assets/bridges/bridges00007.png
Assets/bridges/bridges00010.png
Assets/bridges/bridges00013.png
Assets/bridges/bridges00016.png
Assets/bridges/bridges00019.png
Assets/bridges/bridges00022.png
Assets/bridges/bridges00025.png
Assets/bridges/bridges00028.png
Assets/bridges/bridges00031.png
Assets/bridges/bridges00034.png
Assets/bridges/bridges00037.png
Assets/bridges/bridges00040.png
Assets/bridges/bridges00043.png
Assets/bridges/bridges00046.png
Assets/bridges/bridges00049.png
Assets/bridges/bridges00052.png
Assets/bridges/bridges00055.png
Assets/bridges/bridges00058.png
Assets/bridges/bridges00061.png
Assets/bridges/bridges00064.png
Assets/bridges/bridges00067.png
Assets/bridges/bridges00070.png
Assets/bridges/bridges00073.png
Assets/bridges/bridges00076.png
Assets/bridges/bridges00079.png
Assets/bridges/bridges00082.png
Assets/bridges/bridges00085.png
Assets/bridges/bridges00088.png
Assets/bridges/bridges00091.png
Assets/bridges/bridges00094.png
Assets/bridges/bridges00097.png
Assets/bridges/bridges00100.png
Assets/bridges/bridges00103.png
Assets/bridges/bridges00106.png
Assets/bridges/bridges00109.png
Assets/bridges/bridges00112.png
Assets/bridges/bridges00115.png
Assets/bridges/bridges00118.png
Assets/bridges/bridges00121.png
Assets/bridges/bridges00124.png
Assets/bridges/bridges00127.png
Assets/bridges/bridges00130.png
Assets/bridges/bridges00133.png
Assets/bridges/bridges00136.png
Assets/bridges/bridges00139.png
Assets/bridges/bridges00142.png
Assets/bridges/bridges00145.png
Assets/bridges/bridges00148.png
Assets/bridges/bridges00151.png
Assets/bridges/bridges00154.png
Assets/bridges/bridges00157.png
Assets/bridges/bridges00160.png
Assets/bridges/bridges00163.png
`;

    return data.split("\n")[index];
  }

  const frameCount = 54;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page5`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page5",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `250% top`,
  });
}
canvaspg5();

function page6Animation() {
  let clutter = "";

  document
    .querySelector("#page6>h1")
    .textContent.split("")
    .forEach(function (i) {
      clutter += `<span>${i}</span>`;

      document.querySelector("#page6 h1").innerHTML = clutter;
    });

  gsap.to("#page6 h1 span", {
    scrollTrigger: {
      trigger: `#page6 h1 span`,
      start: `top bottom`,
      end: `top 30%`,
      scroller: `#main`,
      scrub: 0.5,
      // markers:true
    },
    stagger: 0.2,
    color: `#fff`,
  });
}
page6Animation();

function canvaspg7() {
  // Make sure you include GSAP and ScrollTrigger in your project before using this code
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `

    https://thisismagma.com/assets/home/lore/seq/1.webp?2
    https://thisismagma.com/assets/home/lore/seq/2.webp?2
    https://thisismagma.com/assets/home/lore/seq/3.webp?2
    https://thisismagma.com/assets/home/lore/seq/4.webp?2
    https://thisismagma.com/assets/home/lore/seq/5.webp?2
    https://thisismagma.com/assets/home/lore/seq/6.webp?2
    https://thisismagma.com/assets/home/lore/seq/7.webp?2
    https://thisismagma.com/assets/home/lore/seq/8.webp?2
    https://thisismagma.com/assets/home/lore/seq/9.webp?2
    https://thisismagma.com/assets/home/lore/seq/10.webp?2
    https://thisismagma.com/assets/home/lore/seq/11.webp?2
    https://thisismagma.com/assets/home/lore/seq/12.webp?2
    https://thisismagma.com/assets/home/lore/seq/13.webp?2
    https://thisismagma.com/assets/home/lore/seq/14.webp?2
    https://thisismagma.com/assets/home/lore/seq/15.webp?2
    https://thisismagma.com/assets/home/lore/seq/16.webp?2
    https://thisismagma.com/assets/home/lore/seq/17.webp?2
    https://thisismagma.com/assets/home/lore/seq/18.webp?2
    https://thisismagma.com/assets/home/lore/seq/19.webp?2
    https://thisismagma.com/assets/home/lore/seq/20.webp?2
    https://thisismagma.com/assets/home/lore/seq/21.webp?2
    https://thisismagma.com/assets/home/lore/seq/22.webp?2
    https://thisismagma.com/assets/home/lore/seq/23.webp?2
    https://thisismagma.com/assets/home/lore/seq/24.webp?2
    https://thisismagma.com/assets/home/lore/seq/25.webp?2
    https://thisismagma.com/assets/home/lore/seq/26.webp?2
    https://thisismagma.com/assets/home/lore/seq/27.webp?2
    https://thisismagma.com/assets/home/lore/seq/28.webp?2
    https://thisismagma.com/assets/home/lore/seq/29.webp?2
    https://thisismagma.com/assets/home/lore/seq/30.webp?2
    https://thisismagma.com/assets/home/lore/seq/31.webp?2
    https://thisismagma.com/assets/home/lore/seq/32.webp?2
    https://thisismagma.com/assets/home/lore/seq/33.webp?2
    https://thisismagma.com/assets/home/lore/seq/34.webp?2
    https://thisismagma.com/assets/home/lore/seq/35.webp?2
    https://thisismagma.com/assets/home/lore/seq/36.webp?2
    https://thisismagma.com/assets/home/lore/seq/37.webp?2
    https://thisismagma.com/assets/home/lore/seq/38.webp?2
    https://thisismagma.com/assets/home/lore/seq/39.webp?2
    https://thisismagma.com/assets/home/lore/seq/40.webp?2
    https://thisismagma.com/assets/home/lore/seq/41.webp?2
    https://thisismagma.com/assets/home/lore/seq/42.webp?2
    https://thisismagma.com/assets/home/lore/seq/43.webp?2
    https://thisismagma.com/assets/home/lore/seq/44.webp?2
    https://thisismagma.com/assets/home/lore/seq/45.webp?2
    https://thisismagma.com/assets/home/lore/seq/46.webp?2
    https://thisismagma.com/assets/home/lore/seq/47.webp?2
    https://thisismagma.com/assets/home/lore/seq/48.webp?2
    https://thisismagma.com/assets/home/lore/seq/49.webp?2
    https://thisismagma.com/assets/home/lore/seq/50.webp?2
    https://thisismagma.com/assets/home/lore/seq/51.webp?2
    https://thisismagma.com/assets/home/lore/seq/52.webp?2
    https://thisismagma.com/assets/home/lore/seq/53.webp?2
    https://thisismagma.com/assets/home/lore/seq/54.webp?2
    https://thisismagma.com/assets/home/lore/seq/55.webp?2
    https://thisismagma.com/assets/home/lore/seq/56.webp?2
    https://thisismagma.com/assets/home/lore/seq/57.webp?2
    https://thisismagma.com/assets/home/lore/seq/58.webp?2
    https://thisismagma.com/assets/home/lore/seq/59.webp?2
    https://thisismagma.com/assets/home/lore/seq/60.webp?2
    https://thisismagma.com/assets/home/lore/seq/61.webp?2
    https://thisismagma.com/assets/home/lore/seq/62.webp?2
    https://thisismagma.com/assets/home/lore/seq/63.webp?2
    https://thisismagma.com/assets/home/lore/seq/64.webp?2
    https://thisismagma.com/assets/home/lore/seq/65.webp?2
    https://thisismagma.com/assets/home/lore/seq/66.webp?2
    https://thisismagma.com/assets/home/lore/seq/67.webp?2
    https://thisismagma.com/assets/home/lore/seq/68.webp?2
    https://thisismagma.com/assets/home/lore/seq/69.webp?2
    https://thisismagma.com/assets/home/lore/seq/70.webp?2
    https://thisismagma.com/assets/home/lore/seq/71.webp?2
    https://thisismagma.com/assets/home/lore/seq/72.webp?2
    https://thisismagma.com/assets/home/lore/seq/73.webp?2
    https://thisismagma.com/assets/home/lore/seq/74.webp?2
    https://thisismagma.com/assets/home/lore/seq/75.webp?2
    https://thisismagma.com/assets/home/lore/seq/76.webp?2
    https://thisismagma.com/assets/home/lore/seq/77.webp?2
    https://thisismagma.com/assets/home/lore/seq/78.webp?2
    https://thisismagma.com/assets/home/lore/seq/79.webp?2
    https://thisismagma.com/assets/home/lore/seq/80.webp?2
    https://thisismagma.com/assets/home/lore/seq/81.webp?2
    https://thisismagma.com/assets/home/lore/seq/82.webp?2
    https://thisismagma.com/assets/home/lore/seq/83.webp?2
    https://thisismagma.com/assets/home/lore/seq/84.webp?2
    https://thisismagma.com/assets/home/lore/seq/85.webp?2
    https://thisismagma.com/assets/home/lore/seq/86.webp?2
    https://thisismagma.com/assets/home/lore/seq/87.webp?2
    https://thisismagma.com/assets/home/lore/seq/88.webp?2
    https://thisismagma.com/assets/home/lore/seq/89.webp?2
    https://thisismagma.com/assets/home/lore/seq/90.webp?2
    https://thisismagma.com/assets/home/lore/seq/91.webp?2
    https://thisismagma.com/assets/home/lore/seq/92.webp?2
    https://thisismagma.com/assets/home/lore/seq/93.webp?2
    https://thisismagma.com/assets/home/lore/seq/94.webp?2
    https://thisismagma.com/assets/home/lore/seq/95.webp?2
    https://thisismagma.com/assets/home/lore/seq/96.webp?2
    https://thisismagma.com/assets/home/lore/seq/97.webp?2
    https://thisismagma.com/assets/home/lore/seq/98.webp?2
    https://thisismagma.com/assets/home/lore/seq/99.webp?2
    https://thisismagma.com/assets/home/lore/seq/100.webp?2
    https://thisismagma.com/assets/home/lore/seq/101.webp?2
    https://thisismagma.com/assets/home/lore/seq/102.webp?2
    https://thisismagma.com/assets/home/lore/seq/103.webp?2
    https://thisismagma.com/assets/home/lore/seq/104.webp?2
    https://thisismagma.com/assets/home/lore/seq/105.webp?2
    https://thisismagma.com/assets/home/lore/seq/106.webp?2
    https://thisismagma.com/assets/home/lore/seq/107.webp?2
    https://thisismagma.com/assets/home/lore/seq/108.webp?2
    https://thisismagma.com/assets/home/lore/seq/109.webp?2
    https://thisismagma.com/assets/home/lore/seq/110.webp?2
    https://thisismagma.com/assets/home/lore/seq/111.webp?2
    https://thisismagma.com/assets/home/lore/seq/112.webp?2
    https://thisismagma.com/assets/home/lore/seq/113.webp?2
    https://thisismagma.com/assets/home/lore/seq/114.webp?2
    https://thisismagma.com/assets/home/lore/seq/115.webp?2
    https://thisismagma.com/assets/home/lore/seq/116.webp?2
    https://thisismagma.com/assets/home/lore/seq/117.webp?2
    https://thisismagma.com/assets/home/lore/seq/118.webp?2
    https://thisismagma.com/assets/home/lore/seq/119.webp?2
    https://thisismagma.com/assets/home/lore/seq/120.webp?2
    https://thisismagma.com/assets/home/lore/seq/121.webp?2
    https://thisismagma.com/assets/home/lore/seq/122.webp?2
    https://thisismagma.com/assets/home/lore/seq/123.webp?2
    https://thisismagma.com/assets/home/lore/seq/124.webp?2
    https://thisismagma.com/assets/home/lore/seq/125.webp?2
    https://thisismagma.com/assets/home/lore/seq/126.webp?2
    https://thisismagma.com/assets/home/lore/seq/127.webp?2
    https://thisismagma.com/assets/home/lore/seq/128.webp?2
    https://thisismagma.com/assets/home/lore/seq/129.webp?2
    https://thisismagma.com/assets/home/lore/seq/130.webp?2
    https://thisismagma.com/assets/home/lore/seq/131.webp?2
    https://thisismagma.com/assets/home/lore/seq/132.webp?2
    https://thisismagma.com/assets/home/lore/seq/133.webp?2
    https://thisismagma.com/assets/home/lore/seq/134.webp?2
    https://thisismagma.com/assets/home/lore/seq/135.webp?2
    https://thisismagma.com/assets/home/lore/seq/136.webp?2
   `;
    return data.split("\n")[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page7`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page7",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `250% top`,
  });
}
canvaspg7();

gsap.to(".page7Circle", {
  scrollTrigger: {
    trigger: `.page7Circle`,
    start: `top center`,
    end: `bottom top`,
    // markers:true,
    scroller: `#main`,
    scrub: 0.5,
  },
  scale: 1.5,
});
gsap.to(".innerCircle", {
  scrollTrigger: {
    trigger: `.innerCircle`,
    start: `top center`,
    end: `bottom top`,
    // markers:true,
    scroller: `#main`,
    scrub: 0.5,
  },
  backgroundColor: "#0a3bce91",
});
