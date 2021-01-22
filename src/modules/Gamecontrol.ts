import Food from "./Food";
//引入积分盘
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏控制器
class GameControl {
  // 定义三个属性
  // 蛇
  sanke: Snake;
  //食物
  food: Food;
  //记分板
  scorePanel: ScorePanel;
  // 创建一个值来存储蛇移动的方向
  direction: string = '';
  // 创建一个属性来记录游戏是否结束
  isLive = true;


  constructor() {
    this.sanke = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    this.init();
  }
  // 游戏初始化方法，调用后游戏开始
  init() {
    // 绑定键盘按下的事件
    document.addEventListener("keydown", this.keyDownHandler.bind(this))
    // 调用run方法，使蛇移动
    this.run();
  }
  /**
   * 
   * @param even 
   * ArrowUp
      ArrowLeft
      ArrowRight
      ArrowDown
  */
  // 创建一个键盘按下的响应函数
  keyDownHandler(even: KeyboardEvent) {
    // 需要检查一下key是否合法，
    // 修改direction
    // if (even.key in ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"]) {
    this.direction = even.key;
    // }


  }

  // 创建一个蛇移动的方法
  run() {
    // 根据driciton改变蛇的位置
    // 向上 top 减少
    // 向下 top 增加
    // 向左 left 减少
    // 向右 top 增加

    // 先获取蛇的位置
    let X = this.sanke.X;
    let Y = this.sanke.Y;

    switch (this.direction) {
      case "ArrowUp":
        // 向上移动 top 减小
        Y -= 10;
        break;
      case "ArrowDown":
        //  向下移动 top 增加
        Y += 10;
        break;
      case "ArrowLeft":
        // 向左移动 left 减少
        X -= 10;
        break;
      case "ArrowRight":
        // 向右移动 left 增加
        X += 10
        break;
    }
    // 检查蛇是否吃到食物
    this.ckeckEat(X, Y)

    // 修改蛇的x和y值
    try {
      this.sanke.X = X
      this.sanke.Y = Y

    } catch (e) {
      alert(e.message + "GAME OVER!")
      // 将isLive设为false
      this.isLive = false;
    }

    // 开启一个定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 15);

  }

  // 定义一个方法用来检查蛇是否吃到食物
  ckeckEat(X: number, Y: number) {
    if (X == this.food.X && Y == this.food.Y) {
      // 食物的位置需要重置，
      this.food.change();
      //分数分数增加
      this.scorePanel.addScore();
      // 蛇增加一节
      this.sanke.addBody();
    }
  }

}

export default GameControl;