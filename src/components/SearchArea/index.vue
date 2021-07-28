<template>
  <div class="login-search">
    <div class="search">
      <Search class="absolute top-1/2 left-4 -mt-2 opacity-30" size="16" />
      <input type="text" placeholder="Search for songs、artists、albums、etc" />
    </div>
    <div class="setting">
      <Setting size="18" class="opacity-80" />
    </div>
    <LoginDialog v-show="showLogin" />
  </div>
</template>

<script>
// TODO login
import { Setting, Search } from '@icon-park/vue'

export default {
  name: 'index',
  components: {
    Setting,
    Search,
    LoginDialog: Vue.defineAsyncComponent(() =>
      import('@/components/LoginDialog')
    ),
  },
  data: () => ({
    showLogin: false,
  }),
  methods: {
    _login() {
      this.showLogin = true
    },
  },
}
</script>

<style lang="scss" scoped>
.login-search {
  @apply flex justify-between items-center py-4 px-4;
  .search {
    @apply relative flex-none w-3/4;
    input {
      @apply border border-transparent appearance-none w-full py-2 px-10 bg-white text-gray-700 placeholder-gray-400 text-base outline-none focus:border-gray-100 rounded-full transition duration-200;
    }
  }
}
</style>
