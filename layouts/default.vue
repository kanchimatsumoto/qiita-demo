<template>
  <div>
		<div id="wrapper">
			<Header />
			<CampaignLink />
			<nuxt />
			<Footer />
		</div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue'
import CampaignLink from '~/components/CampaignLink.vue'
import Footer from '~/components/Footer/Footer.vue'
export default {
  components: {
    Header,
		CampaignLink,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#wrapper {
	min-height: 100vh;
	background-color: #f6f6f4;
}
</style>
