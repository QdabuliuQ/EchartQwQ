import { markRaw } from 'vue';
import useCommonStore from "@/store/common";
import paramsPieStyle from "@/views/ChartPanel/components/paramsPie/paramsPieStyle.vue";
import paramsPieText from "@/views/ChartPanel/components/paramsPie/paramsPieText.vue";
import paramsPieLine from "@/views/ChartPanel/components/paramsPie/paramsPieLine.vue";
import titleOption from "@/chartConfig/commonParams/title";
import canvas from "@/chartConfig/commonParams/canvas";
import gridOption from "@/chartConfig/commonParams/grid";
import legendOption from "@/chartConfig/commonParams/legend";
import waterMark from "@/chartConfig/commonParams/waterMark";
import pie_label from "@/chartConfig/commonParams/pie_label";
import pie_labelLine from "@/chartConfig/commonParams/pie_labelLine";
import { conveyToExcel } from '@/chartConfig/conveyUtils/conveyData';

const common: any = useCommonStore()

const getOption = () => {
  return [
    titleOption({
      'show': false
    }),
    canvas,
    gridOption(),
    legendOption({
      'icon': 'roundRect',
      'top': '95%',
      'left': '7%',
      'orient': 'horizontal',
    }),
    waterMark,
    {
      name: '数据',
      opName: 'series',
      chartOption: true,
      menuOption: false,
      defaultOption: {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: [30, 90],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            label: {
              ...pie_label
            },
            labelLine: {
              ...pie_labelLine
            },
            data: [
              { name: 'rose 1', value: 40 },
              { name: 'rose 2', value: 38 },
              { name: 'rose 3', value: 32 },
              { name: 'rose 4', value: 30 },
              { name: 'rose 5', value: 28 },
              { name: 'rose 6', value: 26 },
              { name: 'rose 7', value: 22 },
              { name: 'rose 8', value: 18 }
            ],
          }
        ]
      }
    },
    {
      name: '饼图样式',
      opName: 'pieStyle',
      chartOption: false,
      menuOption: true,
      uniqueOption: true,
      icon: 'i_pie',
      component: markRaw(paramsPieStyle),
      allOption: {},
    },
    {
      name: '文本样式',
      opName: 'textStyle',
      chartOption: false,
      menuOption: true,
      uniqueOption: true,
      icon: 'i_text',
      component: markRaw(paramsPieText),
      allOption: {},
    },
    {
      name: '引导线样式',
      opName: 'lineStyle',
      chartOption: false,
      menuOption: true,
      uniqueOption: true,
      icon: 'i_gline',
      component: markRaw(paramsPieLine),
      allOption: {},
    },
  ]
}

export default getOption

export function combineOption(data: any) {
  let series = common.option.series
  series[0].data = data.seriesData
  return {
    series
  }
}

export const createExcelData = (config: any) => {
  return conveyToExcel([
    {
      direction: 'col',
      data: config.series[0].data
    }
  ])
}

// 收集数据并进行转换
export const conveyExcelData = (rows: any) => {
  if(!rows) return null
  let datas: any = {
    seriesData: <any>[]
  }
  // 遍历数据项
  let rowsTLength = Object.keys(rows).length;
  for (let i = 0; i < rowsTLength; i++) {
    let val1 = rows[i] && rows[i].cells[0] ? rows[i].cells[0].text : ''
    let val2 = rows[i] && rows[i].cells[1] ? parseFloat(rows[i].cells[1].text) : NaN
    if(val1 == '' || isNaN(val2)) break
    datas.seriesData.push({  // 创建series
      name: val1,
      value: val2
    })
  }
  return datas
}
