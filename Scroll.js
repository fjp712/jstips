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
    }

    setSpeed(speed){
        this.speed=speed//设置滚轮速度
    }
}