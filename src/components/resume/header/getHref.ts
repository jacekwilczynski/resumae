const isEmail = (str: string) => str.includes('@');

const isPhoneNo = (str: string) => str.match(/^[0-9+()\s]+$/);

const cleanPhoneNo = (str: string) => str.replace(/[\s.()]/g, '');

const getHref = (str: string) => {
  if (isEmail(str)) {
    return `mailto:${str}`;
  }
  if (isPhoneNo(str)) {
    return `tel:${cleanPhoneNo(str)}`;
  }
  return null;
};

export default getHref;
