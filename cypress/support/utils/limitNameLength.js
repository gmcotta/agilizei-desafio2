export const limitNameLength = (name, maxLimit) => {
  if (name.length <= maxLimit) {
    return name;
  }
  return name.slice(0, maxLimit)
}