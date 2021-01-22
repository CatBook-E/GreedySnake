// 定义food类

class Food {
  // 定义属性来表示食物所对应的元素
  element: HTMLElement;
  maxWidth: number;

  constructor(max: number = 27) {
    // 获取页面中的food 将其赋值给element
    this.element = document.getElementById("food")!;
    this.maxWidth = max;
  }

  // 定一个获取食物x轴的坐标
  get X() {
    return this.element.offsetLeft;
  }

  //定义一个获取food y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  change() {
    // 生成一个随机位置
    // 最大470，最小0
    //蛇移动一次就是10
    let left = Math.round(Math.random() * this.maxWidth) * 10;
    let top = Math.round(Math.random() * this.maxWidth) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}
// 测试代码
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

export default Food;