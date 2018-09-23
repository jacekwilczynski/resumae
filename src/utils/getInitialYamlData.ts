const getInitialYamlData = async ({ url }: { url: string }) =>
  window.localStorage.getItem('resumae') ||
  (await fetch(url).then(res => res.text()));

export default getInitialYamlData;
