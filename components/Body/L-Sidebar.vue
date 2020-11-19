<template>
    <div class="actions l-sidebar">
			<Like />
			<Item />
			<Comment />
			<Twitter />
			<Facebook />
    </div>
</template>

<script>
import Like from './Buttons/Like.vue';
import Item from './Buttons/Item.vue';
import Comment from './Buttons/Comment.vue'
import Twitter from './Buttons/Twitter.vue'
import Facebook from './Buttons/Facebook.vue';

export default {
	components: {
		Like,
		Item,
		Comment,
		Twitter,
		Facebook
	}
}
</script>

<style lang="scss" scoped>
.actions {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-start;
}

.l-sidebar {
	position: sticky;
	top: 20vh;
	margin-top: -20px;
	width: 80px;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
}
</style>

