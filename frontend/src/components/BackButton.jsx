import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function BackButton({ url }) {
  return (
    <Link to={url} className="btn btn-reverse btn-back">
      <BsFillArrowLeftCircleFill /> Back
    </Link>
  );
}

export default BackButton;
