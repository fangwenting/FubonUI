<template>
  <div id="searchResult">
      <div class="container">
        <div class="row font-20px font-weight-bold">
          <div class="col-md-12 pt-3">待辦案件查詢</div>
        </div>
        <div class="row">
          <div class="col-md-12 mt-2">
            <!-- 按鈕 -->
            <div class="m-3">
              <div>              
                <b-tabs pills align="center">
                  <b-tab class="tab-style" title="待辦-全部" active @click="setInit()"></b-tab>
                  <b-tab title="待辦-已處理" @click="isProcess()"></b-tab>
                  <b-tab title="待辦-未處理" @click="notProcess()"></b-tab>
                  <b-tab title="通知單-全部" @click="noticeALL()"></b-tab>
                </b-tabs>
                <div class="font-18px font-weight-bold text-right pt-2">共{{items.length}}筆</div>
              </div>
            </div>
            
            <!-- 查詢結果 -->
            <b-table
              :items="items"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              stacked="sm"
              show-empty
              empty-text="查無資料"
              outlined >

              <template #cell(processingStatus)="data">
                  <b-form-checkbox class="" v-model="data.item.processingStatus" size="lg" switch></b-form-checkbox>
              </template>

              <template #cell(button)>
                <b-button class="btn-download w-100" block variant="primary" @click="download()"><i class="fa fa-download" aria-hidden="true"></i></b-button>
              </template>
            </b-table>
            <!-- 分頁 -->
            <div class="row justify-content-center">
              <div class="col-md-3">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script src="./SearchResult"></script>
