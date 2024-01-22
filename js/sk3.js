// menu

// _menu_button 関数は、サイドバーのトリガーボタンがクリックされたときに呼び出される関数です。
// function  関数（ev)
function _menu_button(ev) {
	// sk3-sidebar-trigger クラスを持つ要素を取得します。
	var c = document.getElementsByClassName("sk3-sidebar-trigger");
	for (var j = 0; j < c.length; j++) {
		// もし要素が表示されている場合、非表示に設定します。
		if (c[j].style.display === "block") {
			c[j].style.display = "none";
		}
		else {
			// もし要素が非表示の場合、クリックイベントを停止し、要素を表示します。
			ev.stopPropagation();
			c[j].style.display = "block";
		}
	}
}

// _menu_init 関数は、メニューボタンにクリックイベントを追加するための関数です。
function _menu_init() {
	// sk3-sidebar-btn クラスを持つ要素を取得します。
	var m = document.getElementsByClassName("sk3-sidebar-btn");
	for (var i = 0; i < m.length; i++) {
		// メニューボタンがクリックされたときに _menu_button 関数を呼び出します。
		m[i].addEventListener("click", _menu_button, false);
	}
}

// ページ読み込み時に _menu_init 関数を実行し、メニューボタンにクリックイベントを追加します。
_menu_init();

// toc

// collapsible クラスを持つ要素を取得します。
var c = document.getElementsByClassName("collapsible");
for (var i = 0; i < c.length; i++) {
	// 要素を表示状態に設定します。
	c[i].style.display = "block";
	// enableOpenToc 変数の値に応じて、次の要素を表示または非表示に設定します。
	var e = c[i].nextElementSibling;
	e.style.display = (enableOpenToc) ? "block" : "none";
	// クリックイベントを追加します。
	c[i].addEventListener("click", function () {
		// 要素のクラスをトグルし、次の要素を表示または非表示に切り替えます。
		this.classList.toggle(false);
		var e = this.nextElementSibling;
		e.style.display === "block" ? e.style.display = "none" : e.style.display = "block";
	}, false);
}