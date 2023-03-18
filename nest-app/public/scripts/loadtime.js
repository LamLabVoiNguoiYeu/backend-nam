window.onload = function () {
  const clientTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;
  document.querySelector('#client-time').textContent =
    clientTime.toString() + 'ms';

  // const serverTime = document
  //   .querySelector('meta[name="X-Server-Response-Time"]')
  //   .getAttribute('content');

  // document.querySelector('#server-time').textContent = serverTime;
};
