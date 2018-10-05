export default class ROMGraphics {
  constructor (bitsPerPixel) {
    this.bitsPerPixel = bitsPerPixel
  }
  draw (bmp, palette, imageData) {
    const data = bmp
    for (let i = 0; i < imageData.length; i ++) {
      data[i] = imageData[i]
    }
    return data;
  }
}
