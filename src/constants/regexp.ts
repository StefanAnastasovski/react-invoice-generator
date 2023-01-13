export const phoneMKDRegExp = /(^\+389)(7[0-9])([1-9])([0-9]{5}$)/i;
export const edbMKDRegExp = /[1-9][0-9]{12}/i;
export const embsKDRegExp = /[1-9][0-9]{5}/i;
export const zipCodeMKDRegExp = /[1,2,3,7][0,2,3,4,5,9][0-6,8][0,2,4,6]/i;
export const bankAccountMKDRegExp =
  /([1-9][0-9]{2})\-([1-9][0-9]{9})\-([0-9]{2})/i;
export const emailRegExp =
  /^[a-zA-Z]\w{5,}([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
export const skuRegExp = /^[a-zA-Z]{3}\-[0-9]{4,10}$/i;
