const getInitialYamlData = async ({
  sampleResumeUrl
}: {
  sampleResumeUrl: string;
}) =>
  window.localStorage.getItem('resumae') ||
  (await fetch(sampleResumeUrl).then(res => res.text()));

export default getInitialYamlData;
