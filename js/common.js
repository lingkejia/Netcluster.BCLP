var domain = "http://npp.baibangbao.com/";

function showWebview(webview) {
	plus.webview.show(webview, "slide-in-right");
}

function showWaiting() {
	var op = {
		width: "100px",
		height: "100px",
		background: "rgba(0,0,0,0.3)",
		round: 100,
		loading: {
			display: "block",
			height: "50px",
			icon: "/img/loading.png",
			interval: 300
		}
	}
	plus.nativeUI.showWaiting("加速中", op);
}

function closeWaiting() {
	plus.nativeUI.closeWaiting();
}