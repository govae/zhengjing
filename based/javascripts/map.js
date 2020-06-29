function init() {
    var center = new qq.maps.LatLng(22.878170,113.836240);
    var map = new qq.maps.Map(document.getElementById("container"), {
        center: center,
        zoom: 20
		//该地图类型显示普通的街道地图。
        mapTypeId: qq.maps.MapTypeId.ROADMAP
    });
}