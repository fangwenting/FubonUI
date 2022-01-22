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
          fields: [      // 表頭
            { key: 'category', label: '類別', sortable: false, thClass: 'th-style text-nowrap w-10' },
            { key: 'item', label: '項目',sortable: false, thClass: 'th-style text-nowrap', tdClass: 'font-weight-bold' },
            { key: 'date', label: '發布日期',sortable: false, thClass: 'th-style text-nowrap' },
            { key: 'deadline', label: '處理期限',sortable: true, thClass: 'th-style text-nowrap', tdClass: 'font-weight-bold'  },
            { key: 'notification', label: '通知/照會對象',sortable: false, thClass: 'th-style text-nowrap w-20' },
            { key: 'notificationNumber', label: '通知/照會單號',sortable: false, thClass: 'th-style text-nowrap' },
            { key: 'processingStatus', label: '處理狀態',sortable: false, thClass: 'th-style text-nowrap'},
            { key: 'button', label: '', sortable: false, thClass: 'th-style text-nowrap', tdClass: 'text-center' }
          ],
          itemsInit:  [  // 初始資料
            {no: '01', category: '核保', item: '一年定期團體保險調整保費明細表', date: '110/06/01', deadline: '110/06/15',
            notification: '要保單位', notificationNumber: '0000000000', processingStatus: true },
            {no: '02', category: '核保', item: '取消通知書', date: '110/06/01', deadline: '110/06/15',
            notification: '劉飛飛(預留空間)', notificationNumber: '--', processingStatus: false },
            {no: '03', category: '核保', item: '一年定期團體保險繳費明細表', date: '110/06/01', deadline: '110/06/15',
            notification: '要保單位', notificationNumber: '--', processingStatus: true },
            {no: '04', category: '核保', item: '補充聲明書(加疾病問券)', date: '110/06/01', deadline: '110/06/15',
            notification: '劉霏霏', notificationNumber: '--', processingStatus: false },
            {no: '05', category: '核保', item: '受益人變更批註書', date: '110/06/01', deadline: '--',
            notification: '劉斐飛', notificationNumber: '0000000000', processingStatus: false },
            {no: '06', category: '核保', item: '一年定期團體保險調整保費明細表', date: '110/06/01', deadline: '--',
            notification: '要保單位', notificationNumber: '0000000000', processingStatus: false },
            {no: '07', category: '核保', item: '取消通知書', date: '110/06/01', deadline: '--',
            notification: '劉飛飛(預留空間)', notificationNumber: '--', processingStatus: true },
            {no: '08', category: '核保', item: '一年定期團體保險繳費明細表', date: '110/06/01', deadline: '--',
            notification: '要保單位', notificationNumber: '--', processingStatus: true },
            {no: '09', category: '核保', item: '補充聲明書(加疾病問券)', date: '110/06/01', deadline: '--',
            notification: '劉霏霏', notificationNumber: '--', processingStatus: true },
            {no: '10', category: '核保', item: '受益人變更批註書', date: '110/06/01', deadline: '--',
            notification: '劉斐飛', notificationNumber: '0000000000', processingStatus: true },
          ],
          items: [],       // 畫面顯示
          sortBy: 'deadline',
          sortDesc: true ,
          totalRows: 1,
          currentPage: 1,
          perPage: 5,
          tabStatus: null, // 紀錄現在tab點在哪裡

          /* 常數設定 */
          contant: {
            ALL: 'ALL',
            ISPROCESS: 'isProcess',
            NOTPROCESS: 'notProcess'
          }
        };
      },
      // 初始化
      init() {
        this.setInit();
      },
      // 設定初始表格資料
      setInit(){
        this.items = JSON.parse(JSON.stringify(this.itemsInit));
        this.totalRows = this.items.length;
        this.tabStatus = this.contant.ALL;
        
      },
      // 點擊 待辦-已處理
      isProcess(){
        let isProcessItem = this.itemsInit.filter(item => item.processingStatus == true);
        this.items = isProcessItem;
        this.totalRows = this.items.length;
        this.tabStatus = this.contant.ISPROCESS;
      },
      // 點擊 待辦-未處理
      notProcess(){
        let isProcessItem = this.itemsInit.filter(item => item.processingStatus == false);
        this.items = isProcessItem;
        this.totalRows = this.items.length;
        this.tabStatus = this.contant.NOTPROCESS;
      },
      // 改變處理狀態
      changeProcessingStatus(item){
        let index = this.itemsInit.findIndex(itemInit => itemInit.no == item.no);
        this.itemsInit[index].processingStatus = item.processingStatus;

        switch (this.tabStatus) {
          case this.contant.ALL : this.setInit();
            break;
          case this.contant.ISPROCESS : this.isProcess();
            break;
          case this.contant.NOTPROCESS : this.notProcess();
            break;
        }
         
      },
      // 下載
      download() {
        fetch("/demoData/testDownload.xlsx").then(response => {
          return response.blob();
        }).then(data => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(data);
          link.download = "保險單.xlsx";
          link.click();
          URL.revokeObjectURL(link.href);
        });
      },
    },
  };
  