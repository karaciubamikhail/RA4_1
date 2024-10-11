export function Color ({color,funk}){
    let value = ''
    console.log(color)
    if(color!==null){
        const {r,g,b} = color;
        if(r!==undefined ||g!==undefined ||b!==undefined){
            value = `r:${r},g:${g},b:${b}`;
            document.body.style.background = `rgb(${r},${g},${b})`;
        }
    }else{
        value='Неверный цвет'
    }
    return(
        <form>
            <input type="text" name="colorUser" onChange={funk}/>
            <input type="text" name="colorNew" value={value}/>
        </form>
    )
}