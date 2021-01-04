export const sleep = (sleepTimeInMilliseconds) =>
  new Promise((resolve) => setTimeout(resolve, sleepTimeInMilliseconds));

export const nextTick = () => sleep(0);
