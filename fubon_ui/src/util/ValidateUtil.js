
const ValidateUtil = {
  /*
  驗證傳入參數是否為空(null、空字串、空陣列)
  true : empty
  false : not empty
  */
  isEmpty(data){
    let result = true;

    if(data != null && data != undefined){
      // 字串
      if(typeof data === 'string' && data.trim() != ''){
        result = false;
      }
      // 數字
      if(typeof data === 'number' && String(data).trim() != ''){
        result = false;
      }
      // 物件
      if (data instanceof Object && Object.keys(data).length == 0) {
        result = false;
      }
      // 陣列
      if(Array.isArray(data) && data.length > 0){
        result = false;
      }
    }
    return result;
  },
  /*
  驗證身分證
  */
  validateRocId(rocId){
    rocId = rocId.trim();

    if (rocId.length != 10) {
        return "使用者ID格式錯誤：長度不正確";
    }


    let countyCode = rocId.charCodeAt(0);
    if (countyCode < 65 | countyCode > 90) {
        return "使用者ID格式錯誤：字首英文代號不正確";
    }

    let genderCode = rocId.charCodeAt(1);
    if (genderCode != 49 && genderCode != 50) {
        return "使用者ID格式錯誤：性別代碼不正確";
    }

    let serialCode = rocId.slice(2)
    for (let i in serialCode) {
        let c = serialCode.charCodeAt(i);
        if (c < 48 | c > 57) {
            return "使用者ID格式錯誤：數字區出現非數字字元";
        }
    }

    let conver = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    let weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]

    rocId = String(conver.indexOf(rocId[0]) + 10) + rocId.slice(1);

    let checkSum = 0
    for (let i = 0; i < rocId.length; i++) {
      let c = parseInt(rocId[i])
      let w = weights[i]
      checkSum += c * w
    }

    let verification = checkSum % 10 == 0

    if (!verification) {
        return "使用者ID格式錯誤：檢核碼不正確";
    }
    return null;
  },
  /*
  驗證密碼格式
  */
  validatePwd(str){
    let count = 0;
    var lowercase = /^(?=.*[a-z])/;     // 英文小寫
    var uppercase = /^(?=.*[A-Z])/;     // 英文大小
    var number = /^(?=.*[0-9])/;        // 數字
    var special =  /[~|`|!|@|#|$|%|^|&|*|(|)|_|+|{|}|||:|"|<|>|?|\-|=|[|]|;|\\|'|,|\.|\/|]+/;  // 特殊字元
    
    if(!lowercase.test(str)){
      count ++ ;
    }
    if(!uppercase.test(str)){
      count ++ ;
    }
    if(!number.test(str)){
      count ++ ;
    }
    if(!special.test(str)){
      count ++ ;
    }
    return count;
  },
}
export default ValidateUtil;