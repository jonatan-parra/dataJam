function csv(x) {
  $.ajax({
    url: x,
    dataType: 'text',
  }).done(successFunction);
}

function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var labels = []
  var field = []
  var info = []
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(';');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        labels.push(rowCells[rowCell])
      } else {
        info.push(rowCells[rowCell])
      }
    }
    field.push(info)
    console.log(info);
    info = []
  }
}
