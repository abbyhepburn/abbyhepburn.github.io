import React from 'react';
const paths = {
  IconArrowDown: 'M12 3v18m-7-7 7 7 7-7', IconDownload: 'M12 3v12m-5-5 5 5 5-5M4 20h16',
  IconGithub: 'M9 19c-5 2-5-3-7-3m14 6v-4a4 4 0 0 0-1-3c4-.5 7-2 7-7a5 5 0 0 0-1-3 5 5 0 0 0 0-3s-2 0-4 2a14 14 0 0 0-8 0C7 2 5 2 5 2a5 5 0 0 0 0 3 5 5 0 0 0-1 3c0 5 3 6.5 7 7a4 4 0 0 0-1 3v4',
  IconLinkedin: 'M4 9v11M4 4v1m5 15V9h5v2c1-2 6-3 6 2v7m-11-7v7',
  IconMail: 'M3 5h18v14H3z m0 0 9 8 9-8', IconCopy: 'M8 4h13v15H8z M4 8v13h13',
  IconExternal: 'M14 4h6v6m0-6-9 9M20 14v6H4V4h6', IconCode: 'm8 7-5 5 5 5m8-10 5 5-5 5',
  IconBook: 'M3 4h8a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H3z M14 7a3 3 0 0 1 3-3h4v14h-4a3 3 0 0 0-3 3',
  IconFolder: 'M3 6h7l2 2h9v12H3z', IconMenu: 'M3 6h18M3 12h18M3 18h18', IconClose: 'M4 4l16 16M20 4 4 20',
  IconChevronLeft: 'm15 4-8 8 8 8', IconChevronRight: 'm9 4 8 8-8 8',
  IconPause: 'M7 4v16m10-16v16', IconPlay: 'm7 4 13 8-13 8z',
};
function makeIcon(name) {
  return function Icon() {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
  };
}
export const IconArrowDown = makeIcon('IconArrowDown');
export const IconDownload = makeIcon('IconDownload');
export const IconGithub = makeIcon('IconGithub');
export const IconLinkedin = makeIcon('IconLinkedin');
export const IconMail = makeIcon('IconMail');
export const IconCopy = makeIcon('IconCopy');
export const IconExternal = makeIcon('IconExternal');
export const IconCode = makeIcon('IconCode');
export const IconBook = makeIcon('IconBook');
export const IconFolder = makeIcon('IconFolder');
export const IconMenu = makeIcon('IconMenu');
export const IconClose = makeIcon('IconClose');
export const IconChevronLeft = makeIcon('IconChevronLeft');
export const IconChevronRight = makeIcon('IconChevronRight');
export const IconPause = makeIcon('IconPause');
export const IconPlay = makeIcon('IconPlay');
