

// 定义表示积分盘的类

class ScorePanel {
  // score 用来记录分数和等级
  score = 0;
  level = 1;
  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreElemnt: HTMLElement;
  levelElemnt: HTMLElement;

  // 设置变量限制等级
  maxLevel: number;
  // 表示多少分升级
  upScore: number;

  constructor(max: number = 10, up: number = 10) {
    this.scoreElemnt = document.getElementById("score")!;
    this.levelElemnt = document.getElementById("level")!;
    this.maxLevel = max;
    this.upScore = up;
  }

  // 设置一个加分的方法
  addScore() {
    this.scoreElemnt.innerHTML = ++this.score + '';

    // 判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  // 提升等级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelElemnt.innerHTML = ++this.level + '';
    }
  }
}

// // 测试代码
// let scorePane = new ScorePanel(100, 2)
// for (let index = 0; index < 200; index++) {
//     scorePane.addScore();

// }
// scorePane.levelUp();
// scorePane.levelUp();
export default ScorePanel;