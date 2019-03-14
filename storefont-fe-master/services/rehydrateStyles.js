import { rehydrate } from 'glamor';

export default function () {
  // Adds server generated styles to glamor cache.
  // Has to run before any `style()` calls
  // '__NEXT_DATA__.ids' is set in '_document.js'
  if (typeof window !== 'undefined') {
    rehydrate(window.__NEXT_DATA__.ids);
  }
}
