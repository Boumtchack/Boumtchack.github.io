var converter = new showdown.Converter();

function convertTexte() {
  window.sortieTexte.innerHTML = converter.makeHtml(window.priseTexte.value);
}
