# Bitmap Transformer

## Description

For this assignment you will be **working in mobs** to build a bitmap transformer class.

Normal "standard" dev setup for node library project (linting, build scripts, travis, package.json, gitignore, etc.)

The wikipedia article found here [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format)
describes the byte specification of a "windows bitmap file.":

* We'll be working the simplest version, meaning no compression
* The sample files fit "perfectly" in terms of byte size per row

The core functionality is to pass a buffer to the bitmap transformer, and then apply
one or more color transforms to the image.

This will require the use of node `Buffer` in order to manipulate binary data, **have the docs open!**

This lab is highly structured and there are tests to guide you:

1. Start with the tests in `bitmap-header.test.js`. This will require you to find the location of the needed data using the wikipedia article.
    1. The first test requires that you have the right constants defined. You will need to figure these
    out from the wikipedia article
    2. The second test requires that you create a `BitmapHeader` class that finds the information in the bitmap header and structures it as properties of the `bitmapHeader` instance.
2. Create _at least_ three transformation functions, following the tests in `transformers.test.js`.
    * Invert
    * Grayscale - see [this article](https://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/)for different ways to calculate
    * Another transform
        * Different grayscale
        * (red or green or blue) scale the colors (hint: same as grayscale but only multiply one of the colors)

3. The test in `pixel-reader.test.js` requires you to develop an evented process for
looping through the pixels of the bitmap:

    1. Configure the `PixelReader` for `bitsPerPixel`. For some of the Challenge goals, you
    may need to add other configuration.
    1. Each loop needs to advance the offset by the number of bytes indicated by `bitsPerPixel`
    1. For each loop:
        1. Read the individual color values into a color object
        1. Raise a "color" event with the `color` object
        1. Raise an "end" event when done looping all of the pixels

4. The test in `bitmap-transformer.test.js` requires you to integrate header and transformations using a `BitmapHeader` class and the `PixelReader` class. The test is a pinning, or snapshot test, and a pre-converted standard is provided for the inverted transformer. Basic integration process:

    1. Start at the offset indicated by `pixelOffset`
    1. Setup the Pixel Reader
    1. On each "color" event:
        1. Pass color to the transformation function, which returns a transformed color object
        1. Write the transformed color values back into the buffer using the `offset` value provided
        in the original evented color.
    1. On the "end" event, call the callback supplied to the `transform` method

### Rubric:

* Bitmap Header with Passing Tests **3pts**
* Transform Tests Pass plus 3rd Transformer **3pt**
* PixelReader with Passing Tests **6pts**
* Bitmap Transformer Tests Pass **6pts**
* Clean Project and Code **2pts**

## Bonus

* Adapt the transformer to work for the palletted bitmap image (colors are contained in color table - transform those)

## Super Bonus

* Handle other bitmaps (find on internet) by accounting for non-perfect rows
