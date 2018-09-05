import * as React from 'react';
import XY, { XYInterface } from 'utils/XY';

const getSwipeThreshold = () => ({ x: window.innerWidth / 20, time: 300 });

export interface SwipeChildrenProps {
  onTouchStart: React.TouchEventHandler;
  onTouchEnd: React.TouchEventHandler;
}

export interface SwipeProps {
  onSwipeLeft: VoidFunction;
  onSwipeRight: VoidFunction;
  children: (arg: SwipeChildrenProps) => React.ReactElement<any>;
}

const intendedToScroll = (difference: XYInterface) =>
  Math.abs(difference.y) * 2 > Math.abs(difference.x);

class Swipe extends React.Component<SwipeProps> {
  startXY = new XY(0, 0);
  startTime = 0;

  handleTouchStart: React.TouchEventHandler = e => {
    this.startTime = Date.now();
    this.startXY = XY.fromPageXY(e.changedTouches[0]);
  };

  handleTouchEnd: React.TouchEventHandler = e => {
    const swipeThreshold = getSwipeThreshold();
    const timeDifference = Date.now() - this.startTime;
    if (timeDifference < swipeThreshold.time) {
      const XYDifference = XY.subtract(
        this.startXY,
        XY.fromPageXY(e.changedTouches[0])
      );
      if (intendedToScroll(XYDifference)) return;
      if (XYDifference.x > swipeThreshold.x) this.props.onSwipeLeft();
      if (-XYDifference.x > swipeThreshold.x) this.props.onSwipeRight();
    }
  };

  render() {
    return this.props.children({
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    });
  }
}

export default Swipe;
