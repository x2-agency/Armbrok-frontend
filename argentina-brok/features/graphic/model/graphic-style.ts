import type Highcharts from 'highcharts/highstock';

export const graphicStyle = (): Array<Highcharts.ResponsiveRulesOptions> => {
    return [
        {
            condition: {
                maxWidth: 768,
            },
            chartOptions: {
                xAxis: {
                    labels: {
                        style: {
                            fontSize: '10px',
                        },
                    },
                },
                yAxis: {
                    labels: {
                        style: {
                            fontSize: '10px',
                        },
                    },
                },
                tooltip: {
                    style: {
                        fontSize: '12px',
                    },
                },
                navigator: {
                    handles: {
                        width: 20,
                        height: 20,
                    },
                },
            },
        },
    ]
};
