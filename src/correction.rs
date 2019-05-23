extern crate image;
extern crate rand;
extern crate num;
use image::{DynamicImage, GenericImageView};
use palette::{Hsl, Lch, Pixel, Saturate, Srgb, Hue};

use image::GenericImage;


// Increase the image's saturation by converting each pixel's colour to the HSL colour space
// and increasing the colour's saturation. 
// The level must be from 0 to 1 in floating-point, `f32` format.
// Increasing saturation by 80% would be represented by a level of 0.8
pub fn saturate_hsl(img: DynamicImage, level: f32) -> DynamicImage {
    let mut img = img.to_rgb();
    {

        let (width, height) = img.dimensions();
        for x in 0..width {
            for y in 0..height {
                let px_data = img.get_pixel(x, y).data;

                let hsl_colour: Hsl = Srgb::from_raw(&px_data)
                    .into_format()
                    .into_linear()
                    .into();

                let saturated = hsl_colour.saturate(level);
                img.put_pixel(x, y, image::Rgb {
                    data: Srgb::from_linear(saturated.into()).into_format().into_raw()
                });
            }
        }
    }
    let dynimage = image::ImageRgb8(img);
    return dynimage;
}

// Increase the image's saturation by converting each pixel's colour to the LCh colour space
// and increasing the colour's saturation. 
// The level must be from 0 to 1 in floating-point, `f32` format.
// Increasing saturation by 80% would be represented by a level of 0.8
pub fn saturate_lch(img: DynamicImage, level: f32) -> DynamicImage {
    let mut img = img.to_rgb();
     {
        let (width, height) = img.dimensions();
        for x in 0..width {
            for y in 0..height {
                let px_data = img.get_pixel(x, y).data;

                let lch_colour: Lch = Srgb::from_raw(&px_data)
                    .into_format()
                    .into_linear()
                    .into();

                let saturated = lch_colour.saturate(level);
                img.put_pixel(x, y, image::Rgb {
                    data: Srgb::from_linear(saturated.into()).into_format().into_raw()
                });
            }
        }
    }
    let dynimage = image::ImageRgb8(img);
    return dynimage;

}

// Shift hue by a specified number of degrees in the HSL colour space.
pub fn hue_rotate_hsl(mut img: DynamicImage, degrees: f32) -> DynamicImage {
    let mut img  = img.to_rgb();

       let (width, height) = img.dimensions();
        for x in 0..width {
            for y in 0..height {
                let px_data = img.get_pixel(x, y).data;

                let color = Srgb::from_raw(&px_data).into_format();

                let saturated = Hsl::from(color).shift_hue(degrees);
                img.put_pixel(x, y, image::Rgb {
                    data: Srgb::from_linear(saturated.into()).into_format().into_raw()
                });
            }
        }

    let dynimage = image::ImageRgb8(img);
    return dynimage;
}

// Shift hue by a specified number of degrees in the LCh colour space.
pub fn hue_rotate_lch(mut img: DynamicImage, degrees: f32) -> DynamicImage {
    let mut img  = img.to_rgb();

    //Shift hue by 180 degrees as HSL in bottom left part, and as LCh in top
    //right part.
    let (width, height) = img.dimensions();

        for x in 0..width {
            for y in 0..height {
                let px_data = img.get_pixel(x, y).data;

                let color = Srgb::from_raw(&px_data).into_format();

                let saturated = Lch::from(color).shift_hue(degrees);
                img.put_pixel(x, y, image::Rgb {
                    data: Srgb::from_linear(saturated.into()).into_format().into_raw()
                });
            }
        }

    let dynimage = image::ImageRgb8(img);
    return dynimage;
}