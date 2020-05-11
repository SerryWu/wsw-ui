export function on(
    target,
    event,
    handler
  ) {
    target.addEventListener(
      event,
      handler,
      false
    );
  }