if (typeof registerPaint !== 'undefined') {
  class Tooltip {
    static get inputProperties() {
      return [
        'background-color',
        '--tooltip-position',
        '--tooltip-size'
      ];
    }
    paint(ctx, geom, props) {

      let color = String(props.get('background-color'));
      let positionPercent = parseInt(props.get('--tooltip-position'));
      if (Number.isNaN(positionPercent)) {
        positionPercent = 50;
      }
      let position = geom.width * positionPercent / 100;
      let size = parseInt(props.get('--tooltip-size'));
      if (Number.isNaN(size)) {
        size = 30;
      }

      ctx.beginPath();
      ctx.moveTo(position - size, 0);
      ctx.lineTo(position + size, 0);
      ctx.lineTo(position, geom.height);
      ctx.closePath();

      // fill
      ctx.fillStyle = color;
      ctx.fill();

    }
  }

  registerPaint('tooltip', Tooltip);
}