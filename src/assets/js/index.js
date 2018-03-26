/*$('#box').pagination({
    pageCount: 50,
    jump: true,
    callback:function(api){
        var data = {
            page: api.getCurrent(),
            name: 'mss',
            say: 'oh'
        };
        $.getJSON('http://localhost:3000/data.json',data,function(json){
            console.log(json);
        });
    }
});*/


$(function(){
	
	$('#box').paging({
	    initPageNo: 1, // 初始页码
	    totalPages: 30, //总页数
	    slideSpeed: 600, // 缓动速度。单位毫秒 
	    callback: function(page) { // 回调函数 
	        console.log(page);
	    }
	})
	var half = 0;/*这里表示是页数的前半部分还是后半部分，后台传过来一页是20个数据，这里只显示10个*/
	var catid = 500;
	var page = 1;
	getListAndContent(catid,half,page);
	
	$("#pageSelect").on("click","li",function(){
		$('.content_ul1').html("");
		
		var contentText = $(this).text();
		half = parseInt(contentText/2);
		catid = 500 - parseInt(contentText%2)*10;
		page = Math.ceil(contentText);
		
		getListAndContent(catid,half,page)
//		location.reload();
		console.log(half)
		console.log(catid)
		console.log(page)
	})
	
	
	
})

/*封装一个获取数据库内容的函数*/
function getListAndContent(catid,half,page){
	
	var date = new Date();
	var year = date.getFullYear();
	var mounth = date.getMonth();
	var day = date.getDay();
	/*获取列表数据*/
	var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+page;
	$.get(url,function(data){
		var data = JSON.parse(data).result

		for(var i=10 * half ; i < 10 * (half+1);i++){
			
			var dataContent = `<li><h2><a href='javascript:;' class='content_ul1_a1'>${data[i].title}</a></h2><p class='content_p'></p>
			<a href='html/content.html?aid=${data[i].aid}'class='content_ul1_a2'>阅读全文&gt;&gt;</a>
			<span class='content_ul1_span'><span class='content_ul1_span1'>${year}-${mounth}-${day}</span><span class='content_ul1_span2'>编辑：<i>浪子树</i></span><span class='content_ul1_span4'>个人博客:[IT资讯]</span></span></li>`
			$(dataContent).appendTo($('.content_ul1'));
			
		}
	})
	/*获取商品详情页的内容*/
	for(let i = catid,j=0 ;j<10,i > catid-10 ; i--,j++){
		let url1 = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+i;
		$.get(url1,function(data){
			var data = JSON.parse(data)
//			console.log(data);
			$('.content_p').eq(j).html(data.result[0].summary);
		})
	}
}



