const buildQuery = (predicateBuilder) => (argument, conditionalStyles) => {
  const predicate = predicateBuilder(argument);
  return [predicate, conditionalStyles];
};

export const ScreenWidthMin = buildQuery(
  (minimumWidth) =>
    ({ screenWidth }) =>
      screenWidth >= minimumWidth,
);
