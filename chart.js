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
    type: 'bar',
    data: {
        labels: ['1-5am', '5-9am', '9am-12pm', '12-5pm', '5-8pm', '9pm-12am'],
        datasets: [
            {
                backgroundColor: ['#404E7C', '#566494', '#6373A6', '#8190C0', '#919ECB', '#B0BEEC'],
                data: [92, 204, 321, 482, 351, 261]
            }
        ]
    },
    options: {
        layout: {
            padding: {
                left: 30,
                right: 40,
                top: 30,
                bottom: 30
            }
        },
        legend: {
            display: false
        }
    }
});

