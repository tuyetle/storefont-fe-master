const LoadScriptSingleton = (() => {
  const loadedScripts = {};

  return {
    load(url) {
      if (!url || url === '#') return;

      if (!loadedScripts[url]) {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);

        loadedScripts[url] = true;
      }
    },
  };
})();

export default LoadScriptSingleton;
