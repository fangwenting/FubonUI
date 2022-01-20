import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import SearchResult from '@/components/searchResult/SearchResult.vue'

export default {
    components: {
        Breadcrumb,
        SearchResult
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
        return {};
      },
      // 初始化
      init() {
  
      },
      
    },
  };
  