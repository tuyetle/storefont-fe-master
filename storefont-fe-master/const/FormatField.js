import SeparatorOpt from '~/const/SeparatorOpt.js';

export const PhoneNumberReg = {
  TenNums: /(\d{4})(\d{3})(\d{3})/,
  ElevenNums: /(\d{4})(\d{4})(\d{3})/,
  fourTeenNums: /(\d{3})(\d{3})(\d{3})(\d{3})/,
};
export const PhoneMaxLen = {
  default: 15,
};
const formatPhoneNumber = val =>
  val.replace(/[^\d]/g, '')
    .replace(
      (val.length === 10 ? PhoneNumberReg.TenNums : val.length === 11)
        ? PhoneNumberReg.ElevenNums : PhoneNumberReg.fourTeenNums,
      val.length > 11 ? `$1${SeparatorOpt.minus}$2${SeparatorOpt.minus}$3${SeparatorOpt.minus}$4` : `$1${SeparatorOpt.minus}$2${SeparatorOpt.minus}$3`,
    );
export default formatPhoneNumber;
