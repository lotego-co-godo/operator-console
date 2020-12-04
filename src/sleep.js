export const sleep = (sleepTimeInMilliseconds) =>
  new Promise((resolve) => setTimeout(resolve, sleepTimeInMilliseconds));
