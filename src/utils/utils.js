export const copyText = (value) => {
  const elem = document.createElement("textarea");
  elem.value = value;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
};
