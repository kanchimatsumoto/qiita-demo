<template>
    <div class="actions l-sidebar__like">
			<span class="actions l-sidebar__like--count">66</span>
			<button id="lgtm">
				<img src="@/assets/img/LGTM.png">
			</button>
    </div>
</template>

<style lang="scss" scoped>
.l-sidebar__like {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	font-size: 24px;
	position: relative;
	&--count {
		position: absolute;
    top: -30px;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    color: #55c500;
	}
}
#lgtm {
	height: 100%;
	width: 100%;
	font-size: 20px;
	color: #55c500;
	background-color: #fff;
	border: 2px solid #55c500;
	border-radius: 50%;
	outline: none;
	size: 24px;
	&img {
		height: 24px;
    width: 24px;
    fill: rgb(85, 197, 0);
	}
}
</style>
