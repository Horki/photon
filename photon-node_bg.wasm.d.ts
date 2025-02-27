/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const alter_channel: (a: number, b: number, c: number) => void;
export const alter_red_channel: (a: number, b: number) => void;
export const alter_green_channel: (a: number, b: number) => void;
export const alter_blue_channel: (a: number, b: number) => void;
export const alter_two_channels: (a: number, b: number, c: number, d: number, e: number) => void;
export const alter_channels: (a: number, b: number, c: number, d: number) => void;
export const remove_channel: (a: number, b: number, c: number) => void;
export const remove_red_channel: (a: number, b: number) => void;
export const remove_green_channel: (a: number, b: number) => void;
export const remove_blue_channel: (a: number, b: number) => void;
export const swap_channels: (a: number, b: number, c: number) => void;
export const invert: (a: number) => void;
export const selective_hue_rotate: (a: number, b: number, c: number) => void;
export const selective_color_convert: (a: number, b: number, c: number, d: number) => void;
export const selective_lighten: (a: number, b: number, c: number) => void;
export const selective_desaturate: (a: number, b: number, c: number) => void;
export const selective_saturate: (a: number, b: number, c: number) => void;
export const selective_greyscale: (a: number, b: number) => void;
export const neue: (a: number) => void;
export const lix: (a: number) => void;
export const ryo: (a: number) => void;
export const filter: (a: number, b: number, c: number) => void;
export const lofi: (a: number) => void;
export const pastel_pink: (a: number) => void;
export const golden: (a: number) => void;
export const cali: (a: number) => void;
export const dramatic: (a: number) => void;
export const monochrome_tint: (a: number, b: number) => void;
export const duotone_violette: (a: number) => void;
export const duotone_horizon: (a: number) => void;
export const duotone_tint: (a: number, b: number) => void;
export const duotone_lilac: (a: number) => void;
export const duotone_ochre: (a: number) => void;
export const firenze: (a: number) => void;
export const obsidian: (a: number) => void;
export const crop: (a: number, b: number, c: number, d: number, e: number) => number;
export const crop_img_browser: (a: any, b: number, c: number, d: number, e: number) => any;
export const fliph: (a: number) => void;
export const flipv: (a: number) => void;
export const resize_img_browser: (a: number, b: number, c: number, d: number) => any;
export const resize: (a: number, b: number, c: number, d: number) => number;
export const seam_carve: (a: number, b: number, c: number) => number;
export const shearx: (a: number, b: number) => number;
export const sheary: (a: number, b: number) => number;
export const padding_uniform: (a: number, b: number, c: number) => number;
export const padding_left: (a: number, b: number, c: number) => number;
export const padding_right: (a: number, b: number, c: number) => number;
export const padding_top: (a: number, b: number, c: number) => number;
export const padding_bottom: (a: number, b: number, c: number) => number;
export const rotate: (a: number, b: number) => number;
export const resample: (a: number, b: number, c: number) => number;
export const noise_reduction: (a: number) => void;
export const sharpen: (a: number) => void;
export const edge_detection: (a: number) => void;
export const identity: (a: number) => void;
export const box_blur: (a: number) => void;
export const gaussian_blur: (a: number, b: number) => void;
export const detect_horizontal_lines: (a: number) => void;
export const detect_vertical_lines: (a: number) => void;
export const detect_45_deg_lines: (a: number) => void;
export const detect_135_deg_lines: (a: number) => void;
export const laplace: (a: number) => void;
export const edge_one: (a: number) => void;
export const emboss: (a: number) => void;
export const sobel_horizontal: (a: number) => void;
export const prewitt_horizontal: (a: number) => void;
export const sobel_vertical: (a: number) => void;
export const sobel_global: (a: number) => void;
export const monochrome: (a: number, b: number, c: number, d: number) => void;
export const sepia: (a: number) => void;
export const grayscale: (a: number) => void;
export const grayscale_human_corrected: (a: number) => void;
export const desaturate: (a: number) => void;
export const decompose_min: (a: number) => void;
export const decompose_max: (a: number) => void;
export const grayscale_shades: (a: number, b: number) => void;
export const r_grayscale: (a: number) => void;
export const g_grayscale: (a: number) => void;
export const b_grayscale: (a: number) => void;
export const single_channel_grayscale: (a: number, b: number) => void;
export const threshold: (a: number, b: number) => void;
export const add_noise_rand: (a: number) => void;
export const pink_noise: (a: number) => void;
export const gamma_correction: (a: number, b: number, c: number, d: number) => void;
export const hsluv: (a: number, b: number, c: number, d: number) => void;
export const lch: (a: number, b: number, c: number, d: number) => void;
export const hsl: (a: number, b: number, c: number, d: number) => void;
export const hsv: (a: number, b: number, c: number, d: number) => void;
export const hue_rotate_hsl: (a: number, b: number) => void;
export const hue_rotate_hsv: (a: number, b: number) => void;
export const hue_rotate_lch: (a: number, b: number) => void;
export const hue_rotate_hsluv: (a: number, b: number) => void;
export const saturate_hsl: (a: number, b: number) => void;
export const saturate_lch: (a: number, b: number) => void;
export const saturate_hsluv: (a: number, b: number) => void;
export const saturate_hsv: (a: number, b: number) => void;
export const lighten_lch: (a: number, b: number) => void;
export const lighten_hsluv: (a: number, b: number) => void;
export const lighten_hsl: (a: number, b: number) => void;
export const lighten_hsv: (a: number, b: number) => void;
export const darken_lch: (a: number, b: number) => void;
export const darken_hsluv: (a: number, b: number) => void;
export const darken_hsl: (a: number, b: number) => void;
export const darken_hsv: (a: number, b: number) => void;
export const desaturate_hsv: (a: number, b: number) => void;
export const desaturate_hsl: (a: number, b: number) => void;
export const desaturate_lch: (a: number, b: number) => void;
export const desaturate_hsluv: (a: number, b: number) => void;
export const mix_with_colour: (a: number, b: number, c: number) => void;
export const draw_text_with_border: (a: number, b: number, c: number, d: number, e: number) => void;
export const draw_text: (a: number, b: number, c: number, d: number, e: number) => void;
export const watermark: (a: number, b: number, c: bigint, d: bigint) => void;
export const blend: (a: number, b: number, c: number, d: number) => void;
export const create_gradient: (a: number, b: number) => number;
export const apply_gradient: (a: number) => void;
export const offset: (a: number, b: number, c: number) => void;
export const offset_red: (a: number, b: number) => void;
export const offset_green: (a: number, b: number) => void;
export const offset_blue: (a: number, b: number) => void;
export const multiple_offsets: (a: number, b: number, c: number, d: number) => void;
export const halftone: (a: number) => void;
export const primary: (a: number) => void;
export const colorize: (a: number) => void;
export const solarize: (a: number) => void;
export const solarize_retimg: (a: number) => number;
export const adjust_brightness: (a: number, b: number) => void;
export const inc_brightness: (a: number, b: number) => void;
export const dec_brightness: (a: number, b: number) => void;
export const adjust_contrast: (a: number, b: number) => void;
export const tint: (a: number, b: number, c: number, d: number) => void;
export const horizontal_strips: (a: number, b: number) => void;
export const color_horizontal_strips: (a: number, b: number, c: number) => void;
export const vertical_strips: (a: number, b: number) => void;
export const color_vertical_strips: (a: number, b: number, c: number) => void;
export const oil: (a: number, b: number, c: number) => void;
export const frosted_glass: (a: number) => void;
export const pixelize: (a: number, b: number) => void;
export const normalize: (a: number) => void;
export const dither: (a: number, b: number) => void;
export const duotone: (a: number, b: number, c: number) => void;
export const __wbg_photonimage_free: (a: number, b: number) => void;
export const photonimage_new: (a: number, b: number, c: number, d: number) => number;
export const photonimage_new_from_byteslice: (a: number, b: number) => number;
export const photonimage_new_from_blob: (a: any) => number;
export const photonimage_new_from_image: (a: any) => number;
export const photonimage_get_width: (a: number) => number;
export const photonimage_get_raw_pixels: (a: number) => [number, number];
export const photonimage_get_height: (a: number) => number;
export const photonimage_get_base64: (a: number) => [number, number];
export const photonimage_get_bytes: (a: number) => [number, number];
export const photonimage_get_bytes_jpeg: (a: number, b: number) => [number, number];
export const photonimage_get_bytes_webp: (a: number) => [number, number];
export const photonimage_get_image_data: (a: number) => any;
export const photonimage_set_imgdata: (a: number, b: any) => void;
export const photonimage_get_estimated_filesize: (a: number) => bigint;
export const __wbg_rgb_free: (a: number, b: number) => void;
export const rgb_new: (a: number, b: number, c: number) => number;
export const rgb_set_red: (a: number, b: number) => void;
export const rgb_set_green: (a: number, b: number) => void;
export const rgb_set_blue: (a: number, b: number) => void;
export const rgb_get_red: (a: number) => number;
export const rgb_get_green: (a: number) => number;
export const rgb_get_blue: (a: number) => number;
export const __wbg_rgba_free: (a: number, b: number) => void;
export const rgba_new: (a: number, b: number, c: number, d: number) => number;
export const rgba_set_alpha: (a: number, b: number) => void;
export const rgba_get_alpha: (a: number) => number;
export const run: () => [number, number];
export const get_image_data: (a: any, b: any) => any;
export const putImageData: (a: any, b: any, c: number) => void;
export const open_image: (a: any, b: any) => number;
export const to_raw_pixels: (a: any) => [number, number];
export const base64_to_image: (a: number, b: number) => number;
export const base64_to_vec: (a: number, b: number) => [number, number];
export const to_image_data: (a: number) => any;
export const rgba_set_green: (a: number, b: number) => void;
export const rgba_set_blue: (a: number, b: number) => void;
export const photonimage_new_from_base64: (a: number, b: number) => number;
export const rgba_set_red: (a: number, b: number) => void;
export const rgba_get_red: (a: number) => number;
export const rgba_get_green: (a: number) => number;
export const rgba_get_blue: (a: number) => number;
export const __wbindgen_exn_store: (a: number) => void;
export const __externref_table_alloc: () => number;
export const __wbindgen_export_2: WebAssembly.Table;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
export const __externref_table_dealloc: (a: number) => void;
export const __wbindgen_start: () => void;
