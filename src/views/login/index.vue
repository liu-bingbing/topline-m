<template>
  <div class="login-container">
      <van-nav-bar
        title="标题"
    />
    <van-cell-group>
      <van-field
      v-model="user.mobile"
        required
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        required
        label="验证码"
        placeholder="请输入验证码">
        <van-count-down
        v-if="isCountDownShow"
        slot="button"
        :time="1000*60"
        format=" ss s"
        @finish="isCountDownShow=false"
        />
        <van-button
        v-else
        slot="button"
        size="small"
        type="primary"
        round
        @click="onSendCode"
        >发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn-wrap">
      <van-button round
      type="info"
      @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'

export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: ''// 验证码
      },
      isCountDownShow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      // 1.获取表单数据；
      const user = this.user
      // 2.表单验证；
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '登录中...',
        forbidClick: true// 是否禁止北京点击
      })
      // 3.请求提交；
      try {
        const res = await login(user)
        console.log(res)
        // 提示登录成功
        this.$toast.success('登陆成功')
      } catch (err) {
        console.log('登陆失败', err)
        this.$toast.fail('登陆失败')
      }
      // 4.根据接口返回结果执行后续处理
    },
    async onSendCode () {
      // 1.获取手机号
      const { mobile } = this.user
      // 2.校验手机号是否有效
      // 3.发送验证码
      try {
        // 显示倒计时
        this.isCountDownShow = true
        // 发送
        await getSmsCode(mobile)
      } catch (err) {
        console.log(err)

        // 发送失败关闭倒计时
        this.isCountDownShow = false

        if (err.response.status === 429) {
          this.$toast('请勿频繁操作')
          return
        }
        this.$toast('发送失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.btn-wrap {
  padding:27px 16px;
  .van-button {
    width: 100%;
    background: #6db4fb;
  }
}

</style>
