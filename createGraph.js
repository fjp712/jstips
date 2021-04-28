function Fcharts(){
    this.ctx=null
    this.path=null
    this.addDocument=function (node)
    {
        console.log(node)
        const ctx=document.createElement('canvas')
        node.appendChild(ctx)
        this.ctx=ctx.getContext('2d')
        return ctx
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

