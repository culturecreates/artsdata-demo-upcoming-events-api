export const concepts = (types) => {
  var html = "";
  if (types && types.length > 0) {
    html += "<ul>";
    types.forEach((type) => {
      html += `<li>${type.name.fr || type.name.en}`;
    });
    html += "</ul>";
  }
  return html;
};
