export default function buildUrlSearchFromObj(obj) {
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    return "";
  }

  let str = "";

  keys.forEach((key, index) => {
    const value = encode(obj[key]);

    if (!value) {
      return;
    }

    str += `${index === 0 ? "?" : "&"}${key}=${value}`;
  });

  return str;
}

function encode(value) {
  if (!value) {
    return null;
  }

  return encodeURIComponent(value)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]")
    .replace(/%2F/gi, "/");
}
