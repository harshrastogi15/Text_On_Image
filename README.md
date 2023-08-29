
# Certificate Generator Project

This project is a simple certificate generator that takes a template certificate in PNG format, along with a CSV file containing names and IDs, and generates personalized certificates with the respective names and IDs.

## Requirements

- Node.js (v14 or higher)

## Installation

1. Clone this repository: `git clone https://github.com/yourusername/certificate-generator.git`
2. Navigate to the project directory: `cd Text_On_Image`
3. Install the required dependencies: `npm install`

## Configuration

All the necessary paths and file locations are configured in the `config/path.js` file. Make sure to set them correctly:

```javascript
const certificate = './certificate/certificate.png';
const result = './output/';
const csvFile = './certificate/text.csv';

module.exports = {
    certificate,
    result,
    csvFile
};
```

Place your certificate template in the `certificate` folder and ensure your CSV file with names and IDs is located at the specified path.

## Usage

1. Make sure the necessary configuration is done in `config/path.js`.
2. Run the application: `node index.js`
3. The generated certificates will be saved in the `output` folder.

Absolutely, here's the updated part for your README that explains where users can adjust the text placement in the `src/module/WriteOnCertificate.js` file:



## CSV File Format

The CSV file you provide for generating certificates should have two columns: `id` and `name`. The `id` column represents the unique identifier for each certificate, while the `name` column contains the corresponding names for the certificates.

Here's a sample excerpt from the CSV file:

```
id                           name
event/name/0001         HARSH RASTOGI
event/name/0002         Chandan Chandel
```

Make sure that your CSV file adheres to this format, where the first column is the `id` and the second column is the `name`.


## Customizing Text Placement

If you need to adjust the placement of text on the generated certificates, you can do so in the `src/module/WriteOnCertificate.js` file. This is where the text is added to the certificate image.

Open the `WriteOnCertificate.js` file and navigate to lines 21 to 27. You will find the following code:

```javascript
loadedImage.print(font64, 0, 600, {
    text: name,
    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
}, loadedImage.bitmap.width, loadedImage.bitmap.height
);
loadedImage.print(font32, 100, 500, "ID: " + id);
```

- To adjust the placement of the `name`, modify the values `0` and `600` in the first line of the code block. These values control the X and Y coordinates where the `name` will be placed on the certificate.
- To adjust the placement of the `ID`, modify the values `100` and `500` in the second line of the code block. These values control the X and Y coordinates for the `ID`.

Make sure to test the changes to ensure the text is positioned exactly where you want it on the generated certificates.


## Dependencies

- [Node.js](https://nodejs.org/)
- [Jimp](https://www.npmjs.com/package/jimp)
- [csv-parser](https://www.npmjs.com/package/csv-parser)

