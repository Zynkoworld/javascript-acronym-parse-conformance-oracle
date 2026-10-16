const parse = (phrase) =>
  phrase
    .replace("'", '')
    .match(/^[A-Z]|(?<=[^A-Z])[A-Z]|\b[a-z]/g)
    .join('')
    .toUpperCase();

const __in = ["Portable Network Graphics", "Ruby on Rails", "First In, First Out", "GNU Image Manipulation Program", "Complementary metal-oxide semiconductor", "Something - I made up from thin air", "Halley's Comet", "The Road _Not_ Taken"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: parse(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
