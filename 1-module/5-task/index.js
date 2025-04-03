function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  } else {
    let cutStr = str.slice(0, maxlength) + "...";
    return cutStr;
  }
}
