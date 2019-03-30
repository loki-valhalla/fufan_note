(function () {
  function Ball(cvs, cx, cy, r, color) {
    this.cvs = cvs;
    this.ctx = cvs.getContext("2d");
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.color = color;
    this.init();
  }
  Ball.prototype = {
    init: function () {
      this.stepX = this.strop();
      this.stepY = this.strop();
      this.play();
    },
    play: function () {

      var that = this;


      // ctx.clearRect(x, y, width, hegiht);



      if (that.cx + that.r >= cvs.width) {
        that.stepX = -1 * Math.abs(that.stepX);
      }
      if (that.cx - that.r <= 0) {
        that.stepX = Math.abs(that.stepX);
      }
      if (that.cy + that.r >= cvs.height) {
        that.stepY = -1 * Math.abs(that.stepY);
      }
      if (that.cy - that.r <= 0) {
        that.stepY = Math.abs(that.stepY);
      }
      that.cx += that.stepX;
      that.cy += that.stepY;
      that.ctx.beginPath();
      that.ctx.arc(that.cx, that.cy, that.r, 0, Math.PI * 2, false);
      that.ctx.fillStyle = that.color;
      that.ctx.fill();
      that.ctx.closePath();
    },
    strop: function () {
      return Math.floor(Math.random() * 20);
    }
  }
  window.Ball = Ball;
})()
