import * as React from 'react';

export interface TwoColumnLayoutProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const TwoColumnLayout: React.SFC<TwoColumnLayoutProps> = ({
  leftContent,
  rightContent
}) => (
  <div className="two-column-layout">
    <div className="two-column-layout__left">{leftContent}</div>
    <div className="two-column-layout__right">{rightContent}</div>
  </div>
);

export default TwoColumnLayout;
