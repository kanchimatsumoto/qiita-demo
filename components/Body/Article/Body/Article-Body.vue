<template>
	<div class="article-content">
		<div class="article-content-body">
			<div>
				<h2 class="article-content-fragment" id="css-architect">CSS設計とは</h2>
				<p>ウェブサイトをパーツの集合体として考え、そのパーツごとに分けてCSSを考えること。CSSを記述する時のルールとなるもの。</p>
				
				<h2 class="article-content-fragment" id="multi-single">マルチクラス・シングルクラス</h2>
				<p>１つの要素に対して、複数のクラスを指定するのをマルチクラス、１つないし２つ程度のクラスを指定するのをシングルクラスと呼びます。</p>
				<br>
				<p>例えば、BootstrapをはじめとしたOOCSSはマルチクラスで、BEMはシングルクラスが適していると言われています。</p>
				<br>
				<p>ただし、これらはそこまで厳密なものではなく、BEMだから絶対にシングルクラスにすべきという事ではありません。</p>
        <h2 class="article-content-fragment" id="basic-css">基本のCSS設計手法</h2>
        <h3 class="article-content-fragment" id="oocss">OOCSS</h3> 
				<p>OOCSS は、 Object Oriented CSSの略で、オブジェクト指向CSSなどと日本語では呼ばれます。構造と見た目、コンテナーと内容を分離し、それぞれ別のクラスで指定をします。そのため、マルチクラスで使うことが多いのが特徴です。</p>
				<br>
				<p>SMACCSなどの基礎となる考え方で、以下の２つがポイントとなります。</p>
				<br>
				<p>場所に依存したスタイルを当てる、上書き、コピーし回すのはNG。。（それぞれ、h2にスタイルを当てています。メインエリアのh2にはコレ、サイドバーのh2にはコレ、お問い合わせブロックのh2にはコレ……といった指定方法です。）</p>
        <h3 class="article-content-fragment" id="bem">BEM</h3> 
				<p>BEMとは「Block」「Element」「Modifier」の略であり、要素をこの３つに分けて考える厳格な命名規則です。</p>
				<br>
				<p>CSS設計で使う場合、BEMを元にしたMindBEMdingが使われます。</p>
				<br>
				<p>ウェブサイトのUIをBlockとして考え、Blockに含まれる要素をElementと、BlockやElementの見た目や動きのパターンをModifierというルールで扱います。</p>
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
