import { Point } from './point';
export class PointList {
  p: Point[] = [];
  private Belongs(x: number, y: number, r: number): boolean {
    if (
      (x >= -r && x <= 0 && y >= 0 && y <= r) ||
      (x * x + y * y <= (r * r) / 4 && x >= 0 && y >= 0) ||
      (r * x - r * y <= r * r && x >= 0 && y <= 0)
    ) {
      return true;
    } else return false;
  }
  addPoint(x: number, y: number, r: number) {
    let b = this.Belongs(x, y, r);
    let p = new Point(x, y, b);
    this.p.push(p);
  }
}
