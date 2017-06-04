// function csv(dir) {
//   $.ajax({
//     url: './docs/' + dir,
//     dataType: 'text',
//     // async: false
//   }).done(successFunction)
// }
//
// function successFunction(data) {
//   var allRows = data.split(/\r?\n|\r/);
//   var info = []
//   var field = []
//   for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
//     var rowCells = allRows[singleRow].split(';');
//     for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
//       info.push(rowCells[rowCell])
//     }
//     field.push(info)
//     info = []
//   }
//   console.log("prueba " + field );
//   devolverCSV(field);
// }
// var localCSV;
// function devolverCSV(data){
//     localCSV = data;
// }
// function traerCSV(url){
//   csv(url);
//   var lo = localCSV;
//   localCSV=null;
//   return lo;
// }

function csv(dir, func) {
  $.ajax({
    url: './docs/' + dir,
    dataType: 'text',
    // async: false
  }).done(successFunction)
  function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var info = []
    var field = []
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
      var rowCells = allRows[singleRow].split(';');
      for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        info.push(rowCells[rowCell])
      }
      field.push(info)
      info = []
      func(field)
    }

  }
}

function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var info = []
  var field = []
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(';');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      info.push(rowCells[rowCell])
    }
    field.push(info)
    info = []
    a(field)
  }

}
