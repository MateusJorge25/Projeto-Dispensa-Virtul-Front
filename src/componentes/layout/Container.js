import Login from '../paginas/Login'
import styles from './Container.css'


function Container(props) {
    return(
        <div className={'${sytles.container} ${styles[props.customClass]}'}>{props.children}</div>
    )
}

export default Container