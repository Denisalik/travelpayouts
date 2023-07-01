import React from 'react';
import classes from '@/css/Card.module.scss';
import Card from '@/components/Card';
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const breakpointValues: Record<string, string> = {
  xs: '480px',
  md: '768px',
  xl: '1200px',
};

export function App () {
  const screens = useBreakpoint();
  const breakpoints = Object.entries(screens).filter(bp => bp[0] in breakpointValues);
  const trueBreakpoints = breakpoints
    .filter(bp => bp[1])
    .map(bp => bp[0])
    .map(bp => `${bp}(${breakpointValues[bp]})`);
  const falseBreakpoints = breakpoints
    .filter(bp => !bp[1])
    .map(bp => bp[0])
    .map(bp => `${bp}(${breakpointValues[bp]})`);
  return (
    <div className='App'>
      <div>Use dev tools to check responsive design</div>
      <div>True: {trueBreakpoints.join(' ')}</div>
      <div>False: {falseBreakpoints.join(' ')}</div>
      <br />
      <br />
      <Card />
    </div>
  );
}
