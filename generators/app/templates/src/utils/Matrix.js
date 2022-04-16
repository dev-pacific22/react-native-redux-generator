/*
 *Using roboto as default font for the app if you want to change it.
 * add font files to assets/fonts
 * map that files in FONTS object
 * run 'npx react-native link' command and run app again
 */

const FONTS = {
  FONT_LIGHT: "roboto-light",
  FONT_REGULAR: "roboto-regular",
  FONT_MEDIUM: "roboto-medium",
  FONT_BOLD: "roboto-black",
  FONT_SEMI_BOLD: "roboto-bold",
};

const FONT_SIZE = {
  EXTRA_SMALL: 14,
  SMALL: 16,
  REGULAR: 18,
  SUB_TITLE: 18,
  TITLE: 20,
  HEADER_TITLE: 20,
  BUTTON_TEXT: 20,
  SUB_HEADER: 24,
  PAGE_SUB_HEADER: 28,
  PAGE_HEADER: 32,
};

const MATRIX = {
  MARGIN_START: 25,
  MARGIN_END: 25,
  MARGIN_HORIZONTAL: 25,
  MARGIN_VERTICAL: 10,
  BORDER_WIDTH: 1,
  BORDER_WIDTH_SELECTED: 2,
  BORDER_WIDTH_ERROR: 1,
  BORDER_RADIUS: 4,
  BUTTON_HEIGHT: 54,
  BUTTON_WIDTH: 150,
  TEXT_FIELD_HEIGHT: 40,
  MARGIN: 25,
  PADDING_HORIZONTAL: 15,
};
export { FONTS, FONT_SIZE, MATRIX };
