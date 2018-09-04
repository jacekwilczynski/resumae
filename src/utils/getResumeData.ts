import { safeLoad as parseYaml } from 'js-yaml';

const getResumeData = (yamlData: string) => {
  try {
    return parseYaml(yamlData);
  } catch (e) {
    return { name: e.message };
  }
};

export default getResumeData;
