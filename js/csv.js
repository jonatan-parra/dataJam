function csv(dir) {
  $.ajax({
    url: './docs/'+dir,
    dataType: 'text',
  }).done(successFunction);
}

function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var field = []
  var info = []
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(';');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      info.push(rowCells[rowCell])
      // if (singleRow === 0) {
      //   labels.push(rowCells[rowCell])
      //   field.push(labels)
      // } else {
      //   info.push(rowCells[rowCell])
      // }
    }
    field.push(info)
    info = []
  }
  console.log(field);
  return field
}
