document.addEventListener('DOMContentLoaded', () => {

  new Chart(
    document.querySelector('#chart-1'),
    {
      type: 'line',
      options: {
        plugins: {
          legend: {
            display: false,
          },
          scales: {
            xAxes: {
              beginAtZero: true
            },
            yAxes: [{
              beginAtZero: true,
              ticks: {
                min: 0,
                max: 80,
                stepSize: 20,
              }
            }]
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            data: [25, 50, 20, 35, 20, 65, 48, 60],
            borderColor: '#0B2A97',
            borderWidth: '7',
            cubicInterpolationMode: 'monotone'
          }
        ]
      },
    }
  );
});

document.addEventListener('DOMContentLoaded', () => {

  new Chart(
    document.querySelector('.chart-2'),
    {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        datasets: [
          {
            label: 'Calories',
            data: [50, 70, 30, 13, 62, 30, 3, 43, 24, 45, 24, 45, 70, 30, 13, 62, 30, 3, 42, 30],
            backgroundColor: '#0B2A97',
            borderRadius: 20,
            order: 1,
            categoryPercentage: 1.0,
            barPercentage: 0.2
          },
          {
            label: 'Calories burn',
            data: [-3, -18, -38, -8, -18, -42, -30, -16, -30, -16, -25, -3, -18, -38, -8, -18, -42, -30, -16, -42],
            backgroundColor: '#FF9432',
            borderRadius: 20,
            categoryPercentage: 1.0,
            barPercentage: 0.2
          }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          scales: {
            y: {
              stacked: true,
              beginAtZero: true,
            },
            x: {
              stacked: true,
            }

          }
        }
      }
  });

});
