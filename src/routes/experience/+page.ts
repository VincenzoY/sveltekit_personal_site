import type { PageLoad } from './$types';
import { experiences } from './experiences';

export const load: PageLoad = (({ params }) => {
  return { experiences: experiences };
});