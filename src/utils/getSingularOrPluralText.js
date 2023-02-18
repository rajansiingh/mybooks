export const pluralize = (count, singular, plural, withNum = false) =>
  `${withNum ? count : ''} ${count > 1 ? plural : singular}`;