<template>
  <header >
    <header-bottom></header-bottom>
  </header>
  <auth-component></auth-component>
</template>

<script>
import HeaderBottom from '@/components/ChildrenComponents/HeaderBottom'
import AuthComponent from '@/components/ChildrenComponents/AuthComponent'

export default {
    components : {
        HeaderBottom,
        AuthComponent
    },
    data() {
        return {
           
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/Components/TheHeader.scss';
</style>