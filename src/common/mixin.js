import {debouce} from "./utils"
import BackTop from "components/content/backTop/BackTop";
import {POP, NEW, SELL} from "./const";
// import {TOP_DISTANCE} from "./const";

export const itemListenerMixin = {
    data(){
        return{
            itemImgListener:null,
            newRefresh:null
        }
    },
    mounted(){
        this.newRefresh = debouce(this.$refs.scroll.refresh,100)
        this.itemImgListener = ()=>{
            this.newRefresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
        //console.log('我是混入中的内容');
    }
}
export const backTopMixin = {
	components: {
		BackTop
	},
	data() {
		return {
			isShowBackTop: false,    
		}
	},
	methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
          }  
	}
}


export const tabControlMixin = {
	data: function () {
		return {
			currentType: POP
		}
	},
	methods: {
		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = POP
					break
				case 1:
					this.currentType = NEW
					break
				case 2:
					this.currentType = SELL
					break
			}
			console.log(this.currentType);
		}
	}
}