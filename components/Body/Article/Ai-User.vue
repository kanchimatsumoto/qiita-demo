<template>
	<div class="ai-container">
		<div class="ai-User">
			<img class="ai-User--image" src="https://qiita-user-profile-images.imgix.net/https%-1A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fqiita-image-store%2F0%2F302544%2F7992188bf89ce2fb271c7e832f7f7417618875f3%2Flarge.png%3F1601217171?ixlib=rb-1.2.2&auto=compress%2Cformat&lossless=0&w=75&s=a6ca5c639aae36a5809d17489da0dafd">
			<div class="ai-User--body">
				<div class="ai-User--body--header">
					<div class="ai-User--body--header--name">K Matsumoto</div>
					<div class="ai-User--body--header--urlname">@ka-matsumoto</div>
				</div>
				<div class="ai-User--body--description">品川で働いています。web系2年目の松本と申します。
最近技術力が身についていないと思い焦っています。</div>
				<div class="ai-User--body--footer"></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ai-User {
	display: flex;
	width: 100%;
	margin-right: 16px;
	&--image{
		display: flex;
    overflow: hidden;
    border-radius: 0.2em;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 16px;
	}
}
.ai-User--body {
	flex-grow: 1;
	width: 0;
	min-width: 0;
	&--header {
		display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 8px;
		&--name {
			color: inherit;
			font-size: 1.6rem;
			font-weight: bold;
			margin-right: 8px;
		}
		&--urlname {
			font-size: 1.4rem;
			color: #999;
			margin-right: 8px;
		}
	}
	&--description {
		font-size: 1.4rem;
    color: #777;
    margin-bottom: 4px;
	}
	&--footer {
		margin-top: 16px;
    display: flex;
    align-items: center;
	}
}
</style>
