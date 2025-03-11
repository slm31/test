
/**
 * Create a magnifier glass for images zooming.
 *
 * @param imgID the id of the image to be zoomed
 * @param zoom the zoom strength
 * @returns void
 */
function zoom(imgID, zoom) {
  /*do not create magnifier glass if no image id is passed:*/
  if (!imgID) return;
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement('DIV');
  glass.setAttribute('class', 'img-magnifier-glass');
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.backgroundSize = img.width * zoom + 'px ' + img.height * zoom + 'px';
  glass.style.backdropFilter = 'blur(4px)';
  glass.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
  glass.style.border = '1px solid rgba(255, 255, 255, 0.18)';
  glass.style.borderRadius = '50%';
  glass.style.cursor = 'none';
  glass.style.transition = 'all 0.1s ease';
  
  // Add neon glow effect
  glass.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.7), 0 0 20px rgba(0, 240, 255, 0.3)';
  
  // Add reflection effect
  const reflection = document.createElement('DIV');
  reflection.style.position = 'absolute';
  reflection.style.top = '10%';
  reflection.style.left = '10%';
  reflection.style.width = '30%';
  reflection.style.height = '10%';
  reflection.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)';
  reflection.style.borderRadius = '50%';
  reflection.style.transform = 'rotate(45deg)';
  reflection.style.pointerEvents = 'none';
  glass.appendChild(reflection);
  
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener('mousemove', moveMagnifier);
  img.addEventListener('mousemove', moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener('touchmove', moveMagnifier);
  img.addEventListener('touchmove', moveMagnifier);
  
  // Add hover enter effect
  img.addEventListener('mouseenter', function() {
    glass.style.opacity = '1';
    glass.style.transform = 'scale(1.05)';
    glass.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.9), 0 0 30px rgba(0, 240, 255, 0.5)';
  });
  
  // Add hover leave effect
  img.addEventListener('mouseleave', function() {
    glass.style.opacity = '0';
    glass.style.transform = 'scale(0.95)';
  });
  
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /*set the position of the magnifier glass:*/
    glass.style.left = x - w + 'px';
    glass.style.top = y - h + 'px';
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
      x: x,
      y: y
    };
  }
}

export { zoom };
