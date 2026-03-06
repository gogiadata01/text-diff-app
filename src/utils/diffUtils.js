import { diffChars } from 'diff';

// ეს ფუნქცია იღებს ორ ტექსტს და აბრუნებს მათ შორის სხვაობას
export const calculateDiff = (oldText, newText) => {
  if (!oldText && !newText) return [];
  return diffChars(oldText, newText);
};