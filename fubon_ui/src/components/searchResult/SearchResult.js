export default {
    components: {},
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
          /* 表格資料 */
          fields: [
              { key: 'category', label: '類別', sortable: false, thClass: 'th-style text-nowrap w-10' },
              { key: 'item', label: '項目',sortable: false, thClass: 'th-style text-nowrap', tdClass: 'font-weight-bold' },
              { key: 'date', label: '發布日期',sortable: false, thClass: 'th-style text-nowrap' },
              { key: 'deadline', label: '處理期限',sortable: true, thClass: 'th-style text-nowrap', tdClass: 'font-weight-bold'  },
              { key: 'notification', label: '通知/照會對象',sortable: false, thClass: 'th-style text-nowrap w-20' },
              { key: 'notificationNumber', label: '通知/照會單號',sortable: false, thClass: 'th-style text-nowrap' },
              { key: 'processingStatus', label: '處理狀態',sortable: false, thClass: 'th-style text-nowrap'},
              { key: 'button', label: '', sortable: false, thClass: 'th-style text-nowrap', tdClass: 'text-center' }
          ],
          itemsInit: [],  // 初始資料
          items: [],      // 畫面顯示
          sortBy: 'deadline',
          sortDesc: true ,
          totalRows: 1,
          currentPage: 1,
          perPage: 5,
          
          /* 下載資料 */
          file: null,
          fileName: "test.txt"
        };
      },
      // 初始化
      init() {
        this.setInit();
      },
      // 設定初始表格資料
      setInit(){
        this.items = [
          {category: '核保', item: '一年定期團體保險調整保費明細表', date: '110/06/01', deadline: '110/06/15',
          notification: '要保單位', notificationNumber: '0000000000', processingStatus: true },
          {category: '核保', item: '取消通知書', date: '110/06/01', deadline: '110/06/15',
          notification: '劉飛飛(預留空間)', notificationNumber: '--', processingStatus: false },
          {category: '核保', item: '一年定期團體保險繳費明細表', date: '110/06/01', deadline: '110/06/15',
          notification: '要保單位', notificationNumber: '--', processingStatus: true },
          {category: '核保', item: '補充聲明書(加疾病問券)', date: '110/06/01', deadline: '110/06/15',
          notification: '劉霏霏', notificationNumber: '--', processingStatus: false },
          {category: '核保', item: '受益人變更批註書', date: '110/06/01', deadline: '--',
          notification: '劉斐飛', notificationNumber: '0000000000', processingStatus: false },
          {category: '核保', item: '一年定期團體保險調整保費明細表', date: '110/06/01', deadline: '--',
          notification: '要保單位', notificationNumber: '0000000000', processingStatus: false },
          {category: '核保', item: '取消通知書', date: '110/06/01', deadline: '--',
          notification: '劉飛飛(預留空間)', notificationNumber: '--', processingStatus: true },
          {category: '核保', item: '一年定期團體保險繳費明細表', date: '110/06/01', deadline: '--',
          notification: '要保單位', notificationNumber: '--', processingStatus: true },
          {category: '核保', item: '補充聲明書(加疾病問券)', date: '110/06/01', deadline: '--',
          notification: '劉霏霏', notificationNumber: '--', processingStatus: true },
          {category: '核保', item: '受益人變更批註書', date: '110/06/01', deadline: '--',
          notification: '劉斐飛', notificationNumber: '0000000000', processingStatus: true },
      ]
      this.totalRows = this.items.length;
      },
      // 點擊 待辦-已處理
      isProcess(){
        
        // this.setInit();

        let isProcessItem = this.items.filter(item => item.processingStatus == true);
        this.items = isProcessItem;
        this.totalRows = this.items.length;
      },
      // 點擊 待辦-未處理
      notProcess(){
        // this.setInit();

        let isProcessItem = this.items.filter(item => item.processingStatus == false);
        this.items = isProcessItem;
        this.totalRows = this.items.length;
      },
      // 點擊 通知單-全部
      noticeALL(){
        this.items = [];
        this.totalRows = this.items.length;
      },
      // 下載
      download() {
        fetch("/demoData/testDownload.xlsx").then(response => {
          return response.blob();
        }).then(data => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(data);
          // link.download = "20220120.xlsx";
          link.click();
          URL.revokeObjectURL(link.href);
        });
      },
    },
  };
  