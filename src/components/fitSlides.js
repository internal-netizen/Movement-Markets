/**
 * Scale each report slide to its frame.
 *
 * The bands come from a 1200px artboard: every slide is a fixed 1200px canvas
 * inside an aspect-ratio frame with overflow: hidden. On a desktop the frame is
 * about that wide so it reads correctly, but at 375px the frame is 295px and
 * the canvas is still 1198px — so roughly three quarters of every slide was
 * simply clipped away.
 *
 * The pinned carousel does its own fitting, so its frame is left alone.
 *
 * The canvases used to be a fixed 675 slide units tall, and this file grew
 * each card into the slack that left — which is what produced the large empty
 * boxes. The canvases are now content-sized, so there is no slack to fill and
 * the growing is gone. What remains is the one thing the canvas cannot do for
 * itself: it is scaled with a transform, which does not affect layout, so its
 * frame must be given the scaled height explicitly or it collapses to nothing.
 */
const ART_W = 1200;

export function fitSlides(root) {
  if (!root) return () => {};
  const frames = Array.from(root.querySelectorAll('[data-fit="1200"]'))
    .filter((frame) => !frame.closest('[data-mm-pin]'));

  const apply = () => {
    // On a phone the canvases lay out as ordinary flowing content (see the
    // .mb-* rules in movement-home.css) instead of being scaled down to a
    // thumbnail, so there is nothing to fit.
    const phone = window.innerWidth <= 720;
    frames.forEach((frame) => {
      const canvas = frame.firstElementChild;
      if (!canvas) return;
      if (phone) {
        frame.style.removeProperty('--mm-slide-fit');
        frame.style.removeProperty('height');
        return;
      }
      const natural = canvas.offsetWidth || ART_W; // layout width, ignores transform
      const fit = frame.clientWidth / natural;
      frame.style.setProperty('--mm-slide-fit', String(fit));
      // offsetHeight is the unscaled layout height; the frame needs it scaled
      frame.style.height = `${Math.round(canvas.offsetHeight * fit)}px`;
    });
  };

  apply();
  const observer = new ResizeObserver(apply);
  frames.forEach((frame) => {
    observer.observe(frame);
    // The frame's height is set BY apply(), so watching the frame alone never
    // re-fires when the canvas grows (fonts arriving, images sizing). Watch
    // the canvas too — it is the thing that actually changes.
    if (frame.firstElementChild) observer.observe(frame.firstElementChild);
  });
  window.addEventListener('resize', apply);

  return () => {
    observer.disconnect();
    window.removeEventListener('resize', apply);
    frames.forEach((frame) => {
      frame.style.removeProperty('--mm-slide-fit');
      frame.style.removeProperty('height');
    });
  };
}
