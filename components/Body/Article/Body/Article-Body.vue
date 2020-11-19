<template>
	<div class="article-content">
		<div class="article-content-body">
			<div>
				<h2 class="article-content-fragment">CSS設計とは</h2>
				<p>ウェブサイトをパーツの集合体として考え、そのパーツごとに分けてCSSを考えること。CSSを記述する時のルールとなるもの。</p>
				
				<h2 class="article-content-fragment">マルチクラス・シングルクラス</h2>
				<p>１つの要素に対して、複数のクラスを指定するのをマルチクラス、１つないし２つ程度のクラスを指定するのをシングルクラスと呼びます。</p>
				<br>
				<p>例えば、BootstrapをはじめとしたOOCSSはマルチクラスで、BEMはシングルクラスが適していると言われています。</p>
				<br>
				<p>ただし、これらはそこまで厳密なものではなく、BEMだから絶対にシングルクラスにすべきという事ではありません。</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.article-content {
	font-size: 1.6rem;
	color: #333;
}

.article-content-body {
	margin-top: 0;
}

.article-content-fragment {
	font-size: 1.6em;
	border-bottom: 1px solid #ddd;
	padding-bottom: 0.1em;
	font-weight: bold;
	line-height: 1.5;
	font-feature-settings: "palt";
	margin-top: 2.2em;
	margin-bottom: 2.4rem;
	cursor: pointer;
	position: relative;
}
</style>
