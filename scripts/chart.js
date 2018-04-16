const lineChartOne = document.querySelector('#lineChart').getContext('2d');
const scatterChartOne = document.querySelector('#scatterChart').getContext('2d');
const pieChartOne = document.querySelector('#pieChart').getContext('2d');
const totalRepos = document.querySelector('#totalRepos');
const avgRepos = document.querySelector('#avgRepos');

// Chart styling
let gradientStroke = lineChartOne.createLinearGradient(0, 150, 0, 300);
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

let pieChart = new Chart(pieChartOne, {
    type: 'doughnut',
    data: {
        labels: ['JavaScript', 'HTML', 'CSS'],
        datasets: [
            {
                backgroundColor: ['#404E7C', '#C6D3FD', '#6373A6'],
                data: [120, 180, 95]
            }
        ]
    },
    options: {
        layout: {
            padding: {
                top: 20,
                bottom: 20,
                right: 20,
                left: 20
            }
        },
        legend: {
            display: false
        }
    }
})

const repoChart = (studentRepos) => {

    const repoTotal = 542;
    const avgData = Math.floor(repoTotal / 30);
    const repoEl = document.createElement('p');
    const avgEl = document.createElement('p');

    repoEl.classList.add('repo')
    repoEl.textContent = repoTotal;

    avgEl.classList.add('avg')
    avgEl.textContent = `${avgData} per student`;

    totalRepos.appendChild(repoEl)
    avgRepos.appendChild(avgEl)
}

