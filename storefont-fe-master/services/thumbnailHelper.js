/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.max(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

function detectVerticalSquash(img) {
  const ih = img.naturalHeight;
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  /* eslint prefer-destructuring: 0 */
  const data = ctx.getImageData(1, 0, 1, ih).data;

  let sy = 0;
  let ey = ih;
  let py = ih;
  let alpha = null;
  while (py > sy) {
    alpha = data[((py - 1) * 4) + 3];
    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }
    py = (ey + sy) >> 1;
  }

  const ratio = py / ih;
  if (ratio === 0) {
    return 1;
  }

  return ratio;
}

function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  const vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
}

export default {
  calculateAspectRatioFit,
  drawImageIOSFix,
};
