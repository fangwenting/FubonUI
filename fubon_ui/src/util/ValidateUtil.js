
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
    let inputID = rocId.toString().toUpperCase().trim()
    // 第二碼後不可有英文字
    const check = /^[0-9]+$/
    if (!check.test(inputID.substr(1, inputID.length))){
      return false
    }
    // 證號不可大於10碼
    if (inputID.length > 10 || inputID.length < 10){
      return false
    }

   // 第一碼是英文
    if ((inputID.substr(0, 1).charCodeAt(0) < 64) || (inputID.substr(0, 1).charCodeAt(0) > 91)) {
     return false
    } else {
           // 驗證性別碼
      if (inputID.substr(1, 1) != '1' && inputID.substr(1, 1) != '2') {
        return false
      } else {
               // 驗證剩餘字串是否為數字
        for (let i = 2; i < inputID.length; i++) {
          if (inputID.substr(i - 1, 1).charCodeAt(0) < 47 || (inputID.substr(i - 1, 1)).charCodeAt(0) > 58) {
            return false
          }
        }
      }
    }

    // 將英文代碼轉成數字
    const ID_ABC_Data = 'A10B11C12D13E14F15G16H17I34J18K19L20M21N22O35P23Q24R25S26T27U28V29W32X30Y31Z33'
    inputID = (ID_ABC_Data.substr(ID_ABC_Data.indexOf(inputID.substr(0, 1)) + 1, 2)) + (inputID.substr(1))

    let getNo = 1
    let sum = parseInt(inputID.substr(0, 1))

    // 取得檢查碼
    for (let iyI = 9; iyI > 0; iyI--) {
      sum = sum + (parseInt(inputID.substr(getNo, 1)) * (iyI))
      getNo = getNo + 1
    }

    const mod = (10 - (sum % 10)) == 10 ? 0 : (10 - (sum % 10))

    // 驗證檢查碼是否合格
    // 檢查碼等於身分證字號最後一碼即合格
    if (inputID.substr(inputID.length - 1, 1) == mod) {
      return true
    } else {
      return false
    }
  },
  /*
  驗證密碼格式
  */
  validatePwd(str){
    let errorMsg = [];
    var lowercase = /^(?=.*[a-z])/;     // 英文小寫
    var uppercase = /^(?=.*[A-Z])/;     // 英文大小
    var number = /^(?=.*[0-9])/;        // 數字
    var special =  /[~|`|!|@|#|$|%|^|&|*|(|)|_|+|{|}|||:|"|<|>|?|\-|=|[|]|;|\\|'|,|\.|\/|]+/;  // 特殊字元
    
    if(!lowercase.test(str)){
      errorMsg.push('至少一個小寫英文字母');
    }
    if(!uppercase.test(str)){
      errorMsg.push('至少一個大寫英文字母');
    }
    if(!number.test(str)){
      errorMsg.push('至少一個數字');
    }
    if(!special.test(str)){
      errorMsg.push('至少一個特殊符號(例：~`!@#$%^&*()_+{}|:"<>?-=[];,./)');
    }
    return errorMsg;
  },
}
export default ValidateUtil;