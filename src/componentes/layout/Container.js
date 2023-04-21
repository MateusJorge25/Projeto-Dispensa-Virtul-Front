import style from "./Container.module.css"

function Container(props) {
    return(
        <div className={`${style.container} ${style[props.customClass, props.containerMod]}`}>{props.children}</div>
    )
}

export default Container