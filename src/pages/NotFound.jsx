import { Link } from "react-router-dom";
import ImageNotFoundPage from '../components/assets/notFound.jpg'; 

const NotFound = () => {
    return (
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <Link to="/">Back to the home page</Link>
        <img
          src={ImageNotFoundPage}
          alt="NotFoundPage"
          width={500}
          style={{ marginTop: 20 }}
        />
      </div>
    );
}

export default NotFound; 