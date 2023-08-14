var myChart = echarts.init(document.getElementById("lineChart"));

var option = {
  xAxis: [{
    type: 'category',
    // years
    data: [
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
      2012, 2013, 2014, 2015, 2016
    ],
    splitLine: {
      show: true
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ededef',
      }
    },
    axisTick: {
      length: 10,
    },
    axisLabel: {
      margin: 20,
      textStyle: {
        fontSize: 30,
        fontWeight: 'bolder',
        color: "#898989"
      },
      formatter: function (value, index) {
        if (index === 0 || index === 16) {
          return value;
        } else {
          return '';
          // return value;
        }
      }
    }
  }, {
    type: 'category',
    position: 'up',
    alignTicks: true,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ededef',
      }
    }
  }
  ],
  yAxis: [{
    // name: 'Per 1000 people',
    // nameTextStyle: {
    //   fontSize: 12,
    //   color: '#a2a2a2',
    //   padding: [10, 0, 0, -170],
    // },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ededef',
      }
    },
    axisTick: {
      show: true,
      length: 10,
    },
    axisLabel: {
      margin: 60,
      textStyle: {
        color: '#898989',
        fontSize: 50,
        fontWeight: 'bolder'
      },
      formatter: function (value, index) {
        if (value === 0) {
          return value;
        } else if (value === 15) {
          return value;
        } else {
          return '';
        }
        // console.log('value:' + value + ';index:' + index)
      }
    }
  }, {
    type: 'value',
    position: 'right',
    axisLine: {
      show: true,
      onZero: false,
      lineStyle: {
        color: '#ededef',
      }
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      inside: false,
      length: 5,
    }

  }
  ],
  series: [
    {
      // Birth rate in China 2000-2016
      data: [
        14.03, 13.38, 12.86, 12.41, 12.29, 12.4, 12.09, 12.1, 12.14, 11.95,
        11.9, 13.27, 14.57, 13.03, 13.83, 11.99, 13.57
      ],
      showSymbol: false,
      type: 'line',
      lineStyle: {
        color: '#fcce10',
        width: 8
      },
      markPoint: {
        emphasis: {
          disabled: true
        },
        data: [
          {
            type: 'average',
            x: 'center',
            y: 'center',
            symbolSize: ['288', '358'],
            symbol:
              'image://assets/bg.png'
          },
          {
            type: 'max',
            symbol: 'rect',
            symbolOffset: [-22],
            symbolSize: [60, 30],
            label: {
              show: true,
              color: 'white'
            },
            itemStyle: {
              color: '#fcce10'
            }
          },
          {
            type: 'min',
            symbol: 'rect',
            symbolOffset: [-22],
            symbolSize: [60, 30],
            label: {
              show: true,
              color: 'white'
            }
          }
        ],
        label: {
          show: false
        },
        itemStyle: {
          color: '#fcce10'
        }
      }
    },
    {
      // Divorce rate in China 2000-2016
      data: [
        0.96, 0.98, 0.9, 1.05, 1.28, 1.37, 1.46, 1.59, 1.71, 1.85, 2, 2.13,
        2.29, 2.57, 2.67, 2.79, 3.02
      ],
      type: 'line',
      showSymbol: false,
      lineStyle: {
        color: '#5ab1ef',
        width: 8
      },
      markPoint: {
        emphasis: {
          disabled: true
        },
        data: [
          {
            type: 'max',
            symbol: 'rect',
            symbolOffset: [-22],
            symbolSize: [60, 30],
            label: {
              show: true,
              color: 'white'
            },
            itemStyle: {
              color: '#5ab1ef'
            }
          },
          {
            type: 'min',
            symbol: 'rect',
            symbolOffset: [-22],
            symbolSize: [60, 30],
            label: {
              show: true,
              color: 'white'
            },
            itemStyle: {
              color: '#5ab1ef'
            }
          }
        ]
      }
    },
    {
      // Marriage rate in China 2000-2016
      data: [
        6.7, 6.3, 6.1, 6.3, 6.7, 6.3, 7.2, 7.5, 8.3, 9.1, 9.3, 9.7, 9.8, 9.9,
        9.6, 9, 8.3
      ],
      type: 'line',
      showSymbol: false,
      lineStyle: {
        color: '#FFC0CB',
        width: 8
      },
      markPoint: {
        emphasis: {
          disabled: true
        },
        data: [
          {
            type: 'max',
            symbol: 'rect',
            symbolOffset: [-22],
            symbolSize: [60, 30],
            label: {
              show: true,
              color: 'white'
            },
            itemStyle: {
              color: '#FFC0CB'
            }
          },
          {
            type: 'min',
            symbol: 'rect',
            symbolOffset: [-22],
            symbolSize: [60, 30],
            label: {
              show: true,
              color: 'white'
            },
            itemStyle: {
              color: '#FFC0CB'
            }
          }
        ]
      }
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);