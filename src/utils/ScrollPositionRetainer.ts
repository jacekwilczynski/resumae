import * as React from 'react';

class ScrollPositionRetainer {
  public constructor(private ref: React.RefObject<any>) {}

  public run({
    goingToFullScreen
  }: {
    goingToFullScreen: boolean;
  }) {
    if (goingToFullScreen) {
      this.copyScrollPositionToWindow();
    } else {
      this.copyScrollPositionFromWindow();
    }
  }

  private copyScrollPositionFromWindow() {
    const scrollPosition = window.scrollY;
    setImmediate(() => {
      if (this.ref.current) {
        (this.ref.current as any).scrollTop = scrollPosition;
      }
    });
  }

  private copyScrollPositionToWindow() {
    const scrollPosition =
      this.ref.current && (this.ref.current as any).scrollTop;
    setImmediate(() => {
      window.scrollTo({ top: scrollPosition });
    });
  }
}

export default ScrollPositionRetainer;
