import ROMGraphics from './rom_graphics'
export default class BackgroundGraphics {
  constructor (index, bitsPerPixel) {
    this.romGraphics = new ROMGraphics(bitsPerPixel)
    this.read(index)
  }
  read (index) {
    this.imageData = this.readFromPng(index)
  }
  draw (bitmap, palette) {
    return this.romGraphics.draw(bitmap, palette, this.imageData)
  }
  readFromPng(index) {
    if (index === 0) {
      return new Uint16Array(256 * 256 * 4)
    }
    let canvasTemp = document.createElement("canvas")
    let ctxTemp = canvasTemp.getContext("2d")
    canvasTemp.width = 256
    canvasTemp.height = 256
    if (index % 2 === 0) {
      let img = document.getElementById("my-png-0")
      ctxTemp.drawImage(img, 0, 0, 256, 256)
    } else {
      let img = document.getElementById("my-png-1")
      for (let i = 0; i < 4; i ++){
        for (let j = 0; j < 4; j ++){
          ctxTemp.drawImage(img, 64 * j, 64 * i, 64, 64)
        }
      }
    }
    let imageData = ctxTemp.getImageData(0, 0, 256, 256)
    return imageData.data
  }
}
