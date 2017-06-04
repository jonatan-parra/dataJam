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
    var barChartData = {
      labels: lb,
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: window.chartColors.red,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Dataset 2',
        backgroundColor: window.chartColors.blue,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Dataset 3',
        backgroundColor: window.chartColors.green,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }]

    };

    console.log(results.data.length);
    for (var i = 0; i < results.data.length; i++) {
      temp = results.data[i]
      lb.push(temp[1]);
      console.log(temp[1]);
    }
    for (var i = 1; i < results.data.length; i++) {
      for (var j = 0; j < results.data[i].length; j++) {
        temp = results.data[i]
        dt.push(temp[j]);
      }
    }
    console.log(dt);
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
        responsive: true
      }
    };
    window.myBar = new Chart(ctx, config);
  }
});
