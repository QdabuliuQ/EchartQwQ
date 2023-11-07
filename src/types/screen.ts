export type Elements = "chart"|"map"|"text"|"shape"
export interface IStyle {
  width: number;
  height: number;
  translateX: number;
  translateY: number;
  rotate: number;
  zIndex: number
}
export type Shape = {
  type: 'shape',
  isLock: boolean
  path: string
  style: {
    fill: string
    stroke: string
    strokeWidth: number
    shadowColor: string
    shadowX: number
    shadowY: number
    shadowBlur: number
  } & IStyle
}
export type Chart = {
  type: 'chart'
  isLock: boolean
  cover: string
  option: string
  style: IStyle
}
export type Map = {
  type: 'map'
  isLock: boolean
  cover: string
  option: string
  style: IStyle
}
export type Text = {
  type: 'text'
  isLock: boolean
  content: string
  style: {
    fontSize: number;
    fontWeight: string;
    color: string;
    textAlign: "left" | "right" | "center";
    letterSpacing: number
    fontStyle: "normal" | "italic"
    lineHeight: number
    textDecorationLine: "none"|"underline"|"overline"|"line-through"
    textDecorationColor: string
    textDecorationStyle: "solid"|"double"|"dotted"|"dashed"|"wavy"
    backgroundColor: string
  } & IStyle
}
export type BgType = "color" | "image"
export type ElementType = Chart | Map | Text | Shape
export type ElementTypeProperties<T extends ElementType['type']> = T extends 'chart' ? Chart : T extends 'map' ? Map : T extends 'text' ? Text : T extends 'shape' ? Shape : never
export interface IConfig {
  canvas: {
    bgType: BgType;
    bgImage: string
    bgColor: string;
    fontSize: number
    color: string
    fontWeight: string
    backgroundSize: "cover" | "contain"
    backgroundRepeat: "no-repeat" | "repeat"
  };
  elements: Array<ElementTypeProperties<Elements>>;
}