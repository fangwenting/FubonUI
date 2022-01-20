<template>
  <div id="login" class="bg-color">
    <!---------------------------------- 內文 ------------------------------------>
    <div class="container">
      <div class="row">
        <div class="offset-lg-8 col-lg-4">
            <div class="mt-5 color-blue font-25px boder">團險行政管理</div>
            <div class="mt-3 font-weight-bold">使用者ID</div>
            <div>
              <input v-model.trim="userId" class="form-control" placeholder="請輸入10碼使用者ID" maxlength="10">
            </div>
            <div class="mt-3 font-weight-bold">密碼</div>
            <div class="login">
              <b-input-group class="mt-2">
                <template #append>
                  <b-input-group-text @click="toggleVisibility()">
                    <b-icon v-show="showPwd" icon="eye-fill" ></b-icon>
                    <b-icon v-show="!showPwd" icon="eye-slash-fill"></b-icon>
                  </b-input-group-text>
                </template>
                <b-form-input v-model.trim="pwd" :id="`type-${inputType}`" :type="inputType" placeholder="請輸入密碼"></b-form-input>
              </b-input-group>
            </div>
            <div class="mt-4">
              <b-button pill block variant="primary" size="lg" @click="login()">登入</b-button>
            </div>
        </div>
      </div>
    </div>
    
  <!---------------------------------- 提示訊息 ---------------------------------->
    <b-toast id="my-toast" variant="danger" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">提醒</strong>
        </div>
      </template>
      <div v-for="(item,index) in errorMsg" :key="index">
        {{item}}
      </div>
    </b-toast>

    <!---------------------------------- 頁底 ---------------------------------->
    <Footer></Footer>

  </div>
</template>
<script src="./Login"></script>
