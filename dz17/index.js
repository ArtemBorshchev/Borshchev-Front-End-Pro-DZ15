const ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    this.step -= 1;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().showStep().up()
  .up()
  .up()
  .down()
  .showStep();
