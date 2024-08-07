<template>
  <custom-header 
    @create-account="handleAccountCreate"
    @login="handleLogin"
  />
  <contact-component />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker 2021</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import contactComponent from './contactComponent.vue'
import customHeader from './customHeader.vue'
import useModal from '../../hooks/useModal'

export default {
  name: 'homePage',
  components: { contactComponent, customHeader },
  setup () {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token =window.localStorage.getItem('token')
      if(token){
        router.push({name: 'feedbacks'})
      }
    })

    function handleLogin (){
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleAccountCreate(){
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      handleLogin,
      handleAccountCreate,
    }
  }
}
</script>

<style>

</style>