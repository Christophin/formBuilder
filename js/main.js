function getData (callback)  {
  return $.ajax({
    url: `http://json-data.herokuapp.com/forms`,
    dataType: "json",
    success: callback
});
}

function populateData (formData)  {
  formData.forEach (function(object)  {
    if (object.options.length > 0)  {
        var optionsHtml = object.options.map(function (langs)  {
          return `<option value="${langs.value}">${langs.label}</option>`
        });
        var html = `<select name="${object.label}">
          <option>${object.label}...</option>
          ${optionsHtml.join(" ")}
          </select>`;
    } else {
      var html = `<div class="${object.id}">
        <i class="fa ${object.icon}" aria-hidden="true"></i>
        <input type="text" placeholder="${object.label}">
       </div>`
    };
    $(".content").append(html);
  });
}

getData(populateData);
