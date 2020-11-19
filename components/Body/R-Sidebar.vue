<template>
    <div class="r-sidebar">
			<Advertisement />
			<TableOfContents />
    </div>
</template>

<script>
import Advertisement from '@/components/body/Advertisement/Advertisement.vue'
import TableOfContents from '@/components/body/TableOfContents/TableOfContents.vue';
export default {
	components: {
		Advertisement,
		TableOfContents
	}
}
</script>
