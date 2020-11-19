<template>
 <div class="body-footer">
	 <div class="body-footer-actions">
		 <div class="body-footer-actions--stock">
			 <span class="body-footer-actions--stock--button">ストック</span>
		 </div>
		 <div class="body-footer-actions--like">
			 <span class="body-footer-actions--like--logo">LGTM</span>
			 <span class="body-footer-actions--like--count">3</span>
		 </div>
	 </div>
	 <div class="body-footer-social">
		 <div class="body-footer-social--twitter">
			 <font-awesome-icon :icon="['fab', 'fa-twitter']" />
		 </div>
		 <div class="body-footer-social--facebook">
				<font-awesome-icon :icon="['fab', 'fa-facebook-f']" />
		 </div>
	 </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.body-footer {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 64px;
	margin-bottom: 24px;
}

.body-footer-actions {
	display: flex;
	flex-wrap: wrap;
	&--stock {
		height: 32px;
    width: 108px;
    margin-right: 8px;
    margin-bottom: 16px;
		&--button {
			font-weight: bold;
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-shrink: 0;
			color: #5D707C;
			border: 2px solid #5D707C;
			background-color: #fff;
			height: 100%;
			width: 100%;
			padding: 0 8px;
			outline: none;
			cursor: pointer;
			font-size: 1.4rem;
		}
	}
	&--like {
		display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 32px;
    width: 108px;
    margin-right: 8px;
    margin-bottom: 16px;
		&--logo {
			display: inline-block;
			width: 56px;
			font-weight: bold;
			font-size: 20px;
			color: #55C500;
		}
		&--count {
			font-weight: bold;
    	margin-left: 8px;
			color: gray;
		}
	}
}

.body-footer-social {
	display: flex;
	flex-wrap: wrap;
	&--twitter {
		margin-left: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #aaa;
    font-size: 18px;
    cursor: pointer;
	}
	&--facebook {
		margin-left: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #aaa;
    font-size: 18px;
    cursor: pointer;
	}
}
</style>
