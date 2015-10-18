$(function () {
    for (var i = 1; i <= 5; i++)
    {
        // 1
        (function() {
            // 2
            var nextIndex = (i != 5) ? (i + 1) : (1);
            var $nextVideo = $("#video" + nextIndex);

            // 3
            $("#video" + i).on("ended", function() {
                $(this).hide();
                $nextVideo.show();

                $nextVideo.get(0).play();
            });
        })(i);
    }
});
$(function() {
	$("#webticker").webTicker({
		speed: 100, /* 流れるスピード*/
		moving: true /* ティッカーがマウスオーバされたときに動作を停止させるかどうか*/
	});
	$("#stop").click(function(){
		$("#webticker").webTicker('stop');
	});

	$("#continue").click(function(){
		$("#webticker").webTicker('cont');
	});

});
