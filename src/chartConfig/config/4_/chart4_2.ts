import { markRaw } from 'vue';
import useCommonStore from "@/store/common";
import title from "@/chartConfig/commonParams/title";
import canvas from "@/chartConfig/commonParams/canvas";
import grid from "@/chartConfig/commonParams/grid";
import waterMark from "@/chartConfig/commonParams/waterMark";
import { asisOpNameList } from "@/chartConfig/constant";
import xAxis, { xAxisOption } from "@/chartConfig/commonParams/xAxis";
import yAxis, { yAxisOption } from "@/chartConfig/commonParams/yAxis";
import paramsPointStyle from "@/views/ChartPanel/components/paramsPoint/paramsPointStyle.vue";
import lodash from 'lodash';
const common: any = useCommonStore()
const xData = [
  '12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a', '10a', '11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p', '15p'
]
const yData = [
  'Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];
const data = [[0, 0, 5],[1, 0, 1],[2, 0, 0],[3, 0, 0],[4, 0, 0],[5, 0, 0],[6, 0, 0],[7, 0, 0],[8, 0, 0],[9, 0, 0],[10, 0, 0],[11, 0, 2],[12, 0, 4],[13, 0, 1],[14, 0, 1],[15, 0, 3],[16, 0, 4],[17, 0, 6],[18, 0, 4],[19, 0, 4],[20, 0, 3],[21, 0, 3],[22, 0, 2],[23, 0, 5],[0, 1, 7],[1, 1, 0],[2, 1, 0],[3, 1, 0],[4, 1, 0],[5, 1, 0],[6, 1, 0],[7, 1, 0],[8, 1, 0],[9, 1, 0],[10, 1, 5],[11, 1, 2],[12, 1, 2],[13, 1, 6],[14, 1, 9],[15, 1, 11],[16, 1, 6],[17, 1, 7],[18, 1, 8],[19, 1, 12],[20, 1, 5],[21, 1, 5],[22, 1, 7],[23, 1, 2],[0, 2, 1],[1, 2, 1],[2, 2, 0],[3, 2, 0],[4, 2, 0],[5, 2, 0],[6, 2, 0],[7, 2, 0],[8, 2, 0],[9, 2, 0],[10, 2, 3],[11, 2, 2],[12, 2, 1],[13, 2, 9],[14, 2, 8],[15, 2, 10],[16, 2, 6],[17, 2, 5],[18, 2, 5],[19, 2, 5],[20, 2, 7],[21, 2, 4],[22, 2, 2],[23, 2, 4],[0, 3, 7],[1, 3, 3],[2, 3, 0],[3, 3, 0],[4, 3, 0],[5, 3, 0],[6, 3, 0],[7, 3, 0],[8, 3, 1],[9, 3, 0],[10, 3, 5],[11, 3, 4],[12, 3, 7],[13, 3, 14],[14, 3, 13],[15, 3, 12],[16, 3, 9],[17, 3, 5],[18, 3, 5],[19, 3, 10],[20, 3, 6],[21, 3, 4],[22, 3, 4],[23, 3, 1],[0, 4, 1],[1, 4, 3],[2, 4, 0],[3, 4, 0],[4, 4, 0],[5, 4, 1],[6, 4, 0],[7, 4, 0],[8, 4, 0],[9, 4, 2],[10, 4, 4],[11, 4, 4],[12, 4, 2],[13, 4, 4],[14, 4, 4],[15, 4, 14],[16, 4, 12],[17, 4, 1],[18, 4, 8],[19, 4, 5],[20, 4, 3],[21, 4, 7],[22, 4, 3],[23, 4, 0],[0, 5, 2],[1, 5, 1],[2, 5, 0],[3, 5, 3],[4, 5, 0],[5, 5, 0],[6, 5, 0],[7, 5, 0],[8, 5, 2],[9, 5, 0],[10, 5, 4],[11, 5, 1],[12, 5, 5],[13, 5, 10],[14, 5, 5],[15, 5, 7],[16, 5, 11],[17, 5, 6],[18, 5, 0],[19, 5, 5],[20, 5, 3],[21, 5, 4],[22, 5, 2],[23, 5, 0],[0, 6, 1],[1, 6, 0],[2, 6, 0],[3, 6, 0],[4, 6, 0],[5, 6, 0],[6, 6, 0],[7, 6, 0],[8, 6, 0],[9, 6, 0],[10, 6, 1],[11, 6, 0],[12, 6, 2],[13, 6, 1],[14, 6, 3],[15, 6, 4],[16, 6, 0],[17, 6, 0],[18, 6, 0],[19, 6, 0],[20, 6, 1],[21, 6, 2],[22, 6, 2],[23, 6, 6]]

const getOption = () => {
  xAxis.axisLine.show = false
  yAxis.axisLine.show = false
  grid.defaultOption.grid.left = 2
  grid.defaultOption.grid.bottom = 10
  grid.defaultOption.grid.right = 20
  grid.defaultOption.grid.containLabel = true
  return [
    title,
    canvas,
    grid,
    waterMark,
    {
      name: 'X轴样式',
      opName: 'xAxis',
      chartOption: true,
      menuOption: true,
      icon: 'i_X',
      defaultOption: {
        xAxis: [{
          ...xAxis,
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: true
          },
          data: xData
        }],
      },
      allOption: {
        xAxis: [
          {
            ...xAxisOption,
            type: 'category',
          }
        ]
      },
      opNameList: asisOpNameList
    },
    {
      name: 'Y轴样式',
      opName: 'yAxis',
      chartOption: true,
      menuOption: true,
      icon: 'i_Y',
      defaultOption: {
        yAxis: [{
          ...yAxis,
          data: yData,
          type: 'category',
        }],
      },
      allOption: {
        yAxis: [
          {
            ...yAxisOption,
            type: 'category',
          }
        ]
      },
      opNameList: asisOpNameList
    },
    {
      name: '数据',
      opName: 'series',
      chartOption: true,
      menuOption: true,
      defaultOption: {
        series: [
          {
            data,
            type: 'scatter',
            symbol: 'circle',
            color: '',
            itemStyle: {
              borderColor: '#000',
              borderWidth: 0,
              borderType: 'solid',
              shadowBlur: 0 ,
              shadowColor: '' ,
              shadowOffsetX: 0 ,
              shadowOffsetY: 0 ,
            },
            symbolSize: function (val: any) {
              return val[2] * 4;
            },
          }
        ]
      },
    },
    {
      name: '散点样式',
      opName: 'pointStyle',
      chartOption: false,
      menuOption: true,
      uniqueOption: true,
      icon: 'i_point',
      component: markRaw(paramsPointStyle),
      allOption: {},
    },
  ]
}

export default getOption

export const createExcelData = (config: any) => {
  let excelData: any = {}
  let xData = config.xAxis[0].data
  let yData = config.yAxis[0].data
  let data = config.series[0].data
  excelData[0] = {
    cells: {
    }
  }
  excelData[1] = {
    cells: {
    }
  }
  for(let i = 0; i < xData.length; i ++) {
    excelData[0].cells[i] = {
      text: xData[i]
    }
  }
  for(let i = 0; i < yData.length; i ++) {
    excelData[1].cells[i] = {
      text: yData[i]
    }
  }
  for(let i = 0; i < data.length; i ++) {
    excelData[2+i] = {
      cells: {
        0: {text: data[i] ? data[i][0].toString() : ''},
        1: {text: data[i] ? data[i][1].toString() : ''},
        2: {text: data[i] ? data[i][2].toString() : ''},
      }
    }
  }
  return excelData
}
// 收集数据并进行转换
export const conveyExcelData = (rows: any) => {
  let xAxis = lodash.cloneDeep(common.option.xAxis)
  let yAxis = lodash.cloneDeep(common.option.yAxis)
  let series = lodash.cloneDeep(common.option.series)
  let xLength = Object.keys(rows[0].cells).length
  let yLength = Object.keys(rows[1].cells).length
  let dataObj = {
    xAxis,
    yAxis,
    series
  }
  dataObj.xAxis[0].data = []
  dataObj.yAxis[0].data = []
  dataObj.series[0].data = []
  for(let i = 0; i < xLength; i ++) {
    dataObj.xAxis[0].data[i] = rows[0] && rows[0].cells && rows[0].cells[i] ? rows[0].cells[i].text : ''
  }
  for(let i = 0; i < yLength; i ++) {
    dataObj.yAxis[0].data[i] = rows[1] && rows[1].cells && rows[1].cells[i] ? rows[1].cells[i].text : ''
  }
  for(let i = 2; i < rows.len; i ++) {
    let val1 = rows[i] && rows[i].cells && rows[i].cells[0] ? parseInt(rows[i].cells[0].text) : ''
    let val2 = rows[i] && rows[i].cells && rows[i].cells[1] ? parseInt(rows[i].cells[1].text) : ''
    let val3 = rows[i] && rows[i].cells && rows[i].cells[2] ? parseInt(rows[i].cells[2].text) : ''
    dataObj.series[0].data[i-2] = [val1, val2, val3]
  }
  return dataObj
}
