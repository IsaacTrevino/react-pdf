// import * as R from 'ramda';

import resolveAssets from './resolveAssets';
import resolveStyles from './resolveStyles';
// import resolveZIndex from './resolveZIndex';
import resolveRulers from './resolveRulers';
import resolveOrigins from './resolveOrigins';
import resolvePageSizes from './resolvePageSizes';
import resolveDimensions from './resolveDimensions';
import resolveTextLayout from './resolveTextLayout';
import resolvePageBreaks from './resolvePageBreaks';
// import resolvePagination from './resolvePagination';
import resolveInheritance from './resolveInheritance';
import resolvePageMargins from './resolvePageMargins';
import resolveDynamicNodes from './resolveDynamicNodes';
import resolveNoteChildren from './resolveNoteChildren';
import resolvePagePaddings from './resolvePagePaddings';
import resolvePercentRadius from './resolvePercentRadius';
import resolvePercentHeight from './resolvePercentHeight';
import resolveLinkSubstitution from './resolveLinkSubstitution';
import resolveAbsoluteCoordinates from './resolveAbsoluteCoordinates';
import asyncCompose from '../utils/asyncCompose';

// const startTimer = name => R.tap(() => console.time(name));
// const endTimer = name => R.tap(() => console.timeEnd(name));

const resolvePageSizeStyle = resolvePageSizes('style');

const layout = asyncCompose(
  resolveAbsoluteCoordinates,
  resolveRulers,
  resolveOrigins,
  // resolvePagination,
  resolveDynamicNodes,
  resolvePageBreaks,
  resolveTextLayout,
  resolvePercentRadius,
  resolveDimensions,
  resolveAssets,
  resolveInheritance,
  resolvePercentHeight,
  resolvePagePaddings,
  resolveStyles,
  resolveNoteChildren,
  resolveLinkSubstitution,
  resolvePageMargins,
  resolvePageSizeStyle,
);

export default layout;
