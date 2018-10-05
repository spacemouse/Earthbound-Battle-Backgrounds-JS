Earthbound Battle Backgrounds JS - PNG version
============================================

This is based off of gjtorikian's Earthbound-Battle-Backgrounds-JS (https://github.com/gjtorikian/Earthbound-Battle-Backgrounds-JS) 
except modified to allow two PNG images to be used as input, instead of Earthbound's default tile data.
One PNG is used as the large background input, and a second PNG is used as the tiled background input.
Right now, it pulls all the animation data from the Earthbound tile files, and doesn't support palette cycling, but the code for it is still there.
I'm releasing this with the hope maybe someday someone will develop this idea further.
This includes an index I've modified, and includes some PNG images of my own design I used to test this.

## How it works

In this version, it looks for an img with ID "my-png-0" for the big image, and "my-png-1" for the tiled.
If these images don't exist in the HTML, the page doesn't work.

You should see https://github.com/gjtorikian/Earthbound-Battle-Backgrounds-JS for a detailed explanation of the earthbound battle background system.

## Live Version

You can see a live version of it at http://spacey.lv/earthbound/ 

## Possible improvements

Honestly this could hopefully be adapted to not need to use Earthbound's animation data, but be able to use custom animation data. 
Also, to allow color-indexed PNG images to work with palette cycling.

## Running locally

Make sure you have Node.js and NPM on your system. Then:

``` bash
npm install
npm run watch
npm start
open http://localhost:8888
```

Note that this code runs entirely in the browser! Node is only used to start an
Express server.

## License

This app is in no way endorsed or affiliated by Nintendo, Ape, HAL Laboratory,
Shigesato Itoi, etc. It's licensed under MIT.

## Credits

This is entirely based off of gjtorikian's Earthbound-Battle-Backgrounds-JS (https://github.com/gjtorikian/Earthbound-Battle-Backgrounds-JS) .