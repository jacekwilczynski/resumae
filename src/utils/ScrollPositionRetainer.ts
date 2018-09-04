import * as React from 'react';

class ScrollPositionRetainer {
  public constructor(private ref: React.RefObject<any>) {}

  public copyScrollPositionFromWindow() {
    const scrollPosition = window.scrollY;
    setImmediate(() => {
      if (this.ref.current) {
        (this.ref.current as any).scrollTop = scrollPosition;
      }
    });
  }

  public copyScrollPositionToWindow() {
    const scrollPosition =
      this.ref.current && (this.ref.current as any).scrollTop;
    setImmediate(() => {
      window.scrollTo({ top: scrollPosition });
    });
  }
}

export default ScrollPositionRetainer;
