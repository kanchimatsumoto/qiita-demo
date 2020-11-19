<template>
    <div class="campaign-link">
			<div class="campaign-link__body">
				<span class="campaign-link__body--celebration">今ならQiita Jobsで転職お祝い金30万円がもらえるキャンペーンを実施中！</span>
				<span class="campaign-link__body--detail">詳しくはこちら</span>
			</div>
    </div>
</template>

<style lang="scss" scoped>
.campaign-link {
	background-color: #333333;
	width: 100%;
	&__body {
		display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    font-size: 13px;
    padding: 0.8em;
		&--celebration {
			color: #fff;
		}
		&--detail {
			color: #fff;
		}
	}
}
</style>

