function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let cutStr = str.slice(0, maxlength - 1) + "…";
    return cutStr;
  } else {
    return str;
  }
}
