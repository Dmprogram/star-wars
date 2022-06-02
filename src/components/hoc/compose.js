const compose =
  (...funcs) =>
  (component) =>
    funcs.reduceRight((prevResult, f) => f(prevResult), component);

export default compose;
