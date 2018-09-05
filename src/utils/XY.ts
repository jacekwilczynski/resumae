export interface pageXY {
  pageX: number;
  pageY: number;
}

export interface XYInterface {
  x: number;
  y: number;
}

class XY implements XYInterface {
  constructor(public readonly x: number, public readonly y: number) {}

  public static fromPageXY({ pageX, pageY }: pageXY) {
    return new XY(pageX, pageY);
  }

  public static subtract(...args: XYInterface[]) {
    return args.reduce(
      (result, current) => new XY(result.x - current.x, result.y - current.y)
    );
  }
}

export default XY;
