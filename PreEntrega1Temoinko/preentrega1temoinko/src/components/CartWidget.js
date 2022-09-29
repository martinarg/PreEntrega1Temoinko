import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';


function CartWidget(){
    const iconoStyles = { 
        'color':'white',
        'margin-top': '3vh',
        'margin-left': '1vw'
    }
    return(
        
        <FontAwesomeIcon style={iconoStyles} icon={faCartShopping}/>
    )

}
export default CartWidget;