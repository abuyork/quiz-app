import React from 'react';
import { GridPattern } from './ui/animated-grid-pattern';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <GridPattern
        width={40}
        height={40}
        className="text-gray-200 opacity-50"
        numSquares={100}
        maxOpacity={0.3}
        duration={8}
        repeatDelay={0}
      />
    </div>
  );
};

export default Background;
