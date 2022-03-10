type TTarget = string | HTMLElement | Element | any;
type TListener = 'DOMContentLoaded' | 'load' | 'scroll' | 'resize';

const getElement = (target: TTarget) => {
  const isString = typeof target === 'string';

  return isString ? document.querySelector(target) : target;
};

const isInViewport = (rect: DOMRect, callback: () => void) => {
  let { top, left, width, height } = rect;

  if (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  )
    callback();
};

export const elementSpy = (
  target: TTarget,
  callback: () => void,
  listener: TListener | TListener[] = [
    'DOMContentLoaded',
    'load',
    'scroll',
    'resize',
  ]
) => {
  window.onload = () => {
    const el = getElement(target) as HTMLElement;
    const rect = el.getBoundingClientRect();

    if (typeof listener === 'string') {
      addEventListener(listener, () => isInViewport(rect, callback), false);
    } else if (Array.isArray(listener)) {
      for (let i = 0; i < listener.length; i++) {
        addEventListener(
          listener[i],
          () => isInViewport(rect, callback),
          false
        );
      }
    }
  };
};
