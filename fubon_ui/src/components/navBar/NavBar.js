import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters(['getLoginSuccess'])
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
        loginStatus: false,
      };
    },
    // 初始化
    init() {

    },
    
  },
};
