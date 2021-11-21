document.addEventListener('DOMContentLoaded', () => { 
  
  new Chart(
    document.querySelector('.chart-1'), 
    { 
      type: 'line', 
      data: { 
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], 
        datasets: [ 
          { 
            label: 'Workout Statistic',
            data: [20, 50, 20, 40, 20, 60, 40, 60], 
						borderColor: '#0B2A97',
						borderWidth: '9',
						cubicInterpolationMode: 'monotone'
            
					}
					
        ]
      },
      options: {
        responsive: true,
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
    }
  );

})

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
            data: [50, 65, 30, 10, 60, 30, 3, 40, 20, 50, 20, 50, 65, 30, 10, 60, 30, 3, 45, 30],
						backgroundColor: '#0B2A97',
            borderRadius: 20,
            order: 1
					},
					{ 
            label: 'Calories burn', 
            data: [-3, -20, -40, -10, -20, -40, -30, -15, -30, -15, -25, -3, -20, -40, -10, -20, -40, -30, -20, -40],
						backgroundColor: '#FF9432',
            borderRadius: 20,
            
					}
					
        ]
      },
      options: {
        responsive: true,
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
  );

})