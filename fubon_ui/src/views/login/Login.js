import { mapActions } from 'vuex'
import Footer from '@/components/footer/Footer.vue'
import ValidateUtil from '@/util/ValidateUtil.js'

export default {
    components: {
        Footer
    },
    data() {
      return this.getDefaultData();
    },
    mounted() {
      this.init();
    },
    methods: {
      // 定義需要綁在畫面上的data
      getDefaultData() {
        return {
            userId: undefined,
            pwd: undefined,
            inputType: 'password',
            constant: {
                text: 'text',
                password: 'password',
            },
            showPwd: false,
            loginSuccess: false,
            errorMsg: [],
        };
      },
      // store
      ...mapActions([ 'saveLoginSuccess']),
      // 初始化
      init() {
        this.saveLoginSuccess(false);
      },
      // 明碼隱碼
      toggleVisibility(){
        this.showPwd = !this.showPwd;
        if(this.showPwd){
            this.inputType = this.constant.text;
        }else{
            this.inputType = this.constant.password;
        }
      },
      // 登入
      login(){
        // 驗證使用者代號
        if(ValidateUtil.isEmpty(this.userId)){
          this.showMessage(['請輸入使用者Id']);
          return;
        }
        if(!ValidateUtil.validateRocId(this.userId)){
          this.showMessage(['使用者Id格式不符，請重新輸入']);
          return;
        }
        // 驗證密碼
        if(ValidateUtil.isEmpty(this.pwd)){
          this.showMessage(['請輸入密碼']);
          return;
        }
        if(!ValidateUtil.isEmpty(ValidateUtil.validatePwd(this.pwd)) && ValidateUtil.validatePwd(this.pwd).length > 1){
          this.showMessage(ValidateUtil.validatePwd(this.pwd));
          return;
        }
        this.loginSuccess = true;
        this.saveLoginSuccess(this.loginSuccess);
        // 導頁
        this.$router.push('/searchPage');
      },
      // 顯示錯誤訊息
      showMessage(msg){
        this.$bvToast.show('my-toast');
        this.errorMsg = msg;
      },
    },
  };
  