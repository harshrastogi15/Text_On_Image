const Jimp = require("jimp");
const config = require('../../config/path')
const fileName = config.certificate;
const resultFileFolder = config.result;
let loadedImage;


const createCertificate = (id, name) => {
    return new Promise((resolve, reject) => {
        Jimp.read(fileName)
            .then(async function (image) {
                loadedImage = image;
                const font12 = await Jimp.loadFont(Jimp.FONT_SANS_12_BLACK);
                const font16 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
                const font32 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
                const font64 = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
                const font128 = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
                return { font12, font16, font32, font64, font128 };
            })
            .then(function ({ font12, font16, font32, font64, font128 }) {
                loadedImage.print(font64, 0, 600, {
                    text: name,
                    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                }, loadedImage.bitmap.width, loadedImage.bitmap.height
                );
                loadedImage.print(font32, 100, 500, "ID: " + id)
                loadedImage.write(resultFileFolder + id + "-" + name + ".png")
                resolve();
            })
            .catch(function (err) {
                // console.error(err);
                reject(err)
            });
    })

}

module.exports = {
    createCertificate
}
