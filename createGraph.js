

middware={
    ctx:null
}

function Fcharts(){
    this.ctx=null
    this.path=null
    this.element=null
    this.addDocument=function (node)
    {
        const ctx=document.createElement('canvas')
        let mentionElement=document.createElement('div')
        mentionElement.setAttribute('class','mentionArea')
        node.appendChild(ctx)
        node.appendChild(mentionElement)
        this.element=ctx
        this.ctx=ctx.getContext('2d')
        middware.ctx=this.ctx
        return ctx
    }
    this.addHoverEvent=function ()
    {
        console.log(this.element.offsetLeft)
        this.element.addEventListener('mousemove',this.inPath)
    }
    this.inPath=function (event)
    {
        const  element=document.getElementsByTagName('canvas')[0]
        let mentionElement=document.getElementsByClassName('mentionArea')[0]
        let positionX=event.pageX-element.offsetLeft
        let positionY=event.pageY-element.offsetTop
        console.log(`${positionX},${positionY}`)
        if(positionX<50&&positionY<50)
        {
            console.log(true)
            mentionElement.innerText=`(${positionX}.${positionY})`
            mentionElement.style.left=`${event.pageX+10}px`
            mentionElement.style.top=`${event.pageY+10}px`
            mentionElement.style.visibility='visible'
        }
        else {
            mentionElement.style.visibility='hidden'
        }
    }
    this.addData=function (position){
      let path=new Path2D()
      path.moveTo(5,5)
      for(let item of position)
      {
          path.lineTo(item[0],item[1])
      }
      this.path=path
    }
    this.setOptions=function (options){
       const {lineWidth}=options
       this.ctx.lineWidth=lineWidth
       this.ctx.stroke(this.path)
    }
}

