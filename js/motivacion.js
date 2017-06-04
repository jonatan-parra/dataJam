String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, "");
};
Papa.parse('./docs/motivacion.csv', {
  download: true,
  complete: function(results) {

    var ctx = document.getElementById("histoChart").getContext("2d");

    dt = []
    lb = []
    cl = []
    for (var i = 0; i < results.data.length; i++) {
      temp = results.data[i]
      lb.push(temp[1]);
    }
    lb.shift();
    for (var i = 1; i < results.data.length; i++) {
      for (var j = 0; j < results.data[i].length; j++) {
        temp = results.data[i]
        temp[j] = temp[j].trim()
        if (isNaN(temp[j])) {
          dt.push(temp[j]);

        } else {
          while (temp[j].indexOf('.') > 0) {
            temp[j] = temp[j].slice(0, temp[j].indexOf('.')) + temp[j].slice(temp[j].indexOf('.') + 1)
          }
          dt.push(parseInt(temp[j]))
        }
      }
    }
    var dataProcessed = []
    for (var j = 1; j < results.data.length; j++) {
      var conj = []
      for (var k = 2; k < results.data[j].length; k++) {
        temp = results.data[j]
        conj.push(parseInt(temp[k]))
      }
      dataProcessed.push(conj)
      console.log(conj);
    }
    var barChartData = {
      labels: lb,
      datasets: [{
        label: 'Dataset 1',
        // backgroundColor: window.chartColors.red,
        data: dataProcessed[0]
      }, {
        label: 'Dataset 2',
        // backgroundColor: window.chartColors.blue,
        data: dataProcessed[1]
      }, {
        label: 'Dataset 3',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[2]
      }, {
        label: 'Dataset 4',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[3]
      }, {
        label: 'Dataset 5',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[4]
      }, {
        label: 'Dataset 6',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[5]
      }, {
        label: 'Dataset 7',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[8]
      }, {
        label: 'Dataset 8',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[7]
      }, {
        label: 'Dataset 9',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[8]
      }, {
        label: 'Dataset 10',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[9]
      }, {
        label: 'Dataset 11',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[10]
      }, {
        label: 'Dataset 12',
        // backgroundColor: window.chartColors.green,
        data: dataProcessed[11]
      }]

    };
    var config = {
      type: 'bar',
      data: {
        datasets: [{
          data: dt,
          label: 'Motivacion'
        }],
        labels: lb
      },
      options: {
        responsive: true,
        scales:{
          yAxes:[{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 100,
            }
          }]
        }
      }
    };
    window.myBar = new Chart(ctx, config);
  }
});
