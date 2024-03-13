import { Link } from 'react-router-dom';
import "../Items/styles.css"

const Item = (props) => {
    const title = props.title;
    const id = props.id;    
    const url = props.to;

    return (
        <div className={'item'}>
            <div className='left'>
                <Link to={url} className={'to-do-name'}>{title}</Link>
            </div>
        </div>
    );
};

export default Item;