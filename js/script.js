// Latency Chart
const latencyCtx = document.getElementById('latencyChart');
if (latencyCtx) {
    new Chart(latencyCtx, {
        type: 'line',
        data: {
            labels: [100, 500, 1000, 5000, 10000],
            datasets: [{
                label: 'Median Latency (ms)',
                data: [0.7, 1.2, 1.8, 2.4, 2.9],
                borderColor: '#0077cc',
                backgroundColor: 'rgba(0, 119, 204, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

// Throughput Chart
const throughputCtx = document.getElementById('throughputChart');
if (throughputCtx) {
    new Chart(throughputCtx, {
        type: 'line',
        data: {
            labels: [100, 500, 1000, 5000, 10000],
            datasets: [{
                label: 'Throughput (RPS)',
                data: [11000, 10800, 10500, 10200, 9800],
                borderColor: '#22aa66',
                backgroundColor: 'rgba(34, 170, 102, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true } },
            scales: { y: { beginAtZero: true } }
        }
    });
}
