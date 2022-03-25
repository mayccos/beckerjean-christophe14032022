import './Thumb.scss'
import { Link } from 'react-router-dom'
function Thumb({ id }) {
    return (
        <div className="thumb" key={id}>
            <Link to={`profile/${id}`} className="thumb__link">
                Profile user {id}
            </Link>
        </div>
    )
}

export default Thumb
