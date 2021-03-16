<template>
      <!--百度地图控件-->
      <offline-map
          :center="center"
          :scroll-wheel-zoom="true"
          :zoom="zoom"
          ak="your ak"
          class="content-right"
          @moveend=""
          @moving=""
          @ready="handler"
          @zoomend=""
      >
        <bm-polyline :key=""
                     :editing="false"
                     :path=""
                     :stroke-opacity="0"
                     :stroke-weight="10"
                     stroke-color="blue"
        >
        </bm-polyline>
        <bm-marker :dragging="false"
                   :icon="{url: '../../icon.png',size: {width: 18, height: 40}}"
                   :position=""
                   :rotation=""
                   @click="">
          <bm-info-window :auto-pan="true" :position="[]" :show="" @close="">
            <div>
              
            </div>
          </bm-info-window>

        </bm-marker>
        <bm-polyline :editing="false"
                     :path="[]"
                     :stroke-opacity="0"
                     :stroke-weight="10"
                     stroke-color="green"
        >
        </bm-polyline>
        <bm-point-collection :points="[]" :zIndex="10000"
                             color="red" shape="BMAP_POINT_SHAPE_CIRCLE" size="BMAP_POINT_SIZE_NORMAL"
                             @mouseout="" @mouseover=""></bm-point-collection>
        <!--鼠标放在点上 -->
        <bm-info-window :position="{}">
          
        </bm-info-window>

        <!--比例尺控件-->
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>

        <!--缩放控件-->
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
      </offline-map>
</template>
<script>


//百度地图
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import OfflineMap from "./components/map/OfflineMap.vue";
import BmScale from "vue-baidu-map/components/controls/Scale";
import BmNavigation from "vue-baidu-map/components/controls/Navigation";
import BmMarkerClusterer from "vue-baidu-map/components/extra/MarkerClusterer";
import BmMarker from "vue-baidu-map/components/overlays/Marker";
import BmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow";
import BmOverlay from "vue-baidu-map/components/overlays/Overlay";
import BmPolyline from "vue-baidu-map/components/overlays/Polyline";
import BmlCurveLine from "vue-baidu-map/components/extra/CurveLine";
import BmPointCollection from "vue-baidu-map/components/overlays/PointCollection";


export default {
  components: {
    BaiduMap,
    OfflineMap,
    BmScale,
    BmNavigation,
    BmMarkerClusterer,
    BmMarker,
    BmInfoWindow,
    BmOverlay,
    BmPolyline,
    BmlCurveLine,
    BmPointCollection
  },
  data() {
    return {
      map: null,
	  geo: null,
	  center:null,
	  zoom: 0
    };
  },
  created() {
    
  },
  mounted() {
   
  },
  methods: {

    /**
     * 当地图初始化完成之后执行
     * */
    handler({BMap, map}) {
      this.center.lng = window._CONFIG['centerPoint'].lng;
      this.center.lat = window._CONFIG['centerPoint'].lat;
      this.zoom = 16;
      this.map = map;
      this.geo = new BMap.Geocoder();
    },

    /**
     * 同步地图的状态
     */
    syncCenterAndZoom(e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng;
      this.center.lat = lat;
      this.zoom = e.target.getZoom();
    }
  }
};
</script>