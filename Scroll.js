const SCROLLSPEED=125




class FScroll{
    constructor(idName,sliderIdName,scrollIdName,speed) {
        this.targetElement=document.getElementById(idName)
        this.slider=document.getElementById(sliderIdName)
        this.scroll=document.getElementById(scrollIdName)
        this.speed=speed

        let height=this.scroll.clientHeight
        let sliderHeight=(this.targetElement.clientHeight*height)/this.targetElement.scrollHeight//滑块高度修改
        this.slider.style.height=`${sliderHeight}px`
        let sliderRatio=(this.targetElement.scrollHeight-this.targetElement.clientHeight)/(height-sliderHeight)//滚动比例
        //比例修改

        this.targetElement.addEventListener('mousewheel',(e)=>{
            if(this.targetElement.scrollTop/sliderRatio>height-sliderHeight)
                return
            this.targetElement.scrollTop=this.targetElement.scrollTop-(e.deltaY*this.speed)/SCROLLSPEED
            this.slider.style.top=`${this.targetElement.scrollTop/sliderRatio}px`
        })
        //滚轮事件添加
        this.slider.addEventListener('mousedown',(e)=>{
            let lastPlace=e.pageY
            let lastsSliderScroll=this.targetElement.scrollTop/sliderRatio
            this.slider.addEventListener('mousemove',(e)=>{
                let distance=e.pageY-lastPlace
                let sliderScroll=lastsSliderScroll+distance
                this.targetElement.scrollTop=sliderScroll*sliderRatio
                if(this.targetElement.scrollTop>=200||this.targetElement.scrollTop<=0)
                    return
                this.slider.style.top=`${(sliderScroll)}px`
                console.log(this.targetElement.scrollTop)
            })
        })
        //添加鼠标事件
    }

    setSpeed(speed){
        this.speed=speed//设置滚轮速度
    }
}