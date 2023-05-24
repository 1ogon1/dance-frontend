import { SingleEliminationBracket, SVGViewer } from '@g-loot/react-tournament-brackets';
import React from 'react';
import { Match } from './Match/Match';
//TODO: needs to be hardcoded for roles (especially for "screen" page)
  const finalWidth = window.innerWidth - 200;
  const finalHeight = window.innerHeight - 120;

export const Brackets = (props) => (    
     <SingleEliminationBracket
      matches={props.matches}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer width={finalWidth} height={finalHeight} {...props}>
          {children}
        </SVGViewer>
      )}
    />

  );