<template>
	<main>
    <div class="article-body">
			<Article />
    </div>
	</main>
</template>

<script>
import Article from './Article/Article.vue';

export default {
	components: {
		Article
	}
}
</script>

<style lang="scss" scoped>
main {
 	grid-column: 2 / 3;
	grid-row: 1 / 3;
	padding: 16px;
}
.article-body {
	background-color: #fff;
	padding: 32px;
}
</style>
