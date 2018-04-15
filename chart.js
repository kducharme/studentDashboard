const lineChartOne = document.querySelector('#lineChart').getContext('2d');
const scatterChartOne = document.querySelector('#scatterChart').getContext('2d');

let ctx = document.getElementById('lineChart').getContext("2d");


// Chart styling
let gradientStroke = ctx.createLinearGradient(0, 150, 0, 300);
gradientStroke.addColorStop(0, "#C6D3FD");
gradientStroke.addColorStop(1, "#E4EAFE");

let lineChart = new Chart(lineChartOne, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [{
            label: 'Total commits',
            data: [125, 512, 432, 395, 212, 421, 204],
            backgroundColor: gradientStroke,
            borderColor: '#404E7C'
        }]
    },
    options: {
        layout: {
            padding: {
                left: 30,
                right: 40,
                top: 40,
                bottom: 30
            }
        },
        legend: {
            display: false
        }
    }
});

let scatterChart = new Chart(scatterChartOne, {
    type: 'scatter',
    data: {
        datasets: [{
            label: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
            data: [
                { x: 9, y: 50 }, 
                { x: 0, y: 10 },
                { x: 0, y: 10 },
                { x: 0, y: 10 },
                { x: 0, y: 10 },
                { x: 0, y: 10 },
                { x: 0, y: 10 },
        ],
            backgroundColor: gradientStroke,
        }]
    },
    options: {
        layout: {
            padding: {
                left: 30,
                right: 40,
                top: 40,
                bottom: 30
            }
        },
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        },
        legend: {
            display: false
        }
    }
});

