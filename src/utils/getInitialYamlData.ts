const getInitialYamlData = async ({
  url,
  useLocal
}: {
  url: string;
  useLocal?: boolean;
}) =>
  (useLocal && window.localStorage.getItem('resumae')) ||
  (await fetch(url).then(res => res.text()));

export default getInitialYamlData;
