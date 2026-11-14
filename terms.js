// Add a new term by appending an object to this list.
// source is optional: { title, url }
const QUANT_GUIDE = {
  title: "A Visual Guide to Quantization",
  url: "https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization",
};

const TERMS = [
  {
    term: "Dynamic range",
    tags: ["numerics", "quantization"],
    definition:
      "The entire set of values a number representation can store, from its smallest to its largest value. It depends on the format: a 64-bit float covers a far wider range than a 32-bit or 16-bit one.",
    example: "FP32 reaches about ±3.4 × 10^38, while FP16 tops out at ±65,504.",
    links: ["Precision", "32-bit (FP32) is considered full precision"],
    source: QUANT_GUIDE,
  },
  {
    term: "Precision",
    tags: ["numerics", "quantization"],
    definition:
      "The distance between two neighboring representable values. Higher precision means smaller gaps, so values can be stored more exactly.",
    example: "Fewer mantissa bits means bigger gaps between neighbors, so more rounding error.",
    links: ["Dynamic range", "Mantissa", "32-bit (FP32) is considered full precision"],
    source: QUANT_GUIDE,
  },
  {
    term: "Mantissa",
    tags: ["numerics", "IEEE 754"],
    definition:
      "The fractional part of a floating-point number in IEEE 754. It holds the significant digits; more mantissa bits give higher precision. Also called the significand or fraction.",
    example: "FP32 has 23 mantissa bits; FP16 has 10.",
    links: ["Precision"],
    source: QUANT_GUIDE,
  },
];
