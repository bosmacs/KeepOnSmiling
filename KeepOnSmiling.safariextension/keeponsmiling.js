if (window.location.hostname.substr(0, 5) !== 'smile') {
  tmp = window.location.hostname.replace(/^(www\.)?amazon/,"smile.amazon");
  window.location.hostname = tmp
}
