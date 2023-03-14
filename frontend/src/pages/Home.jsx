import { AiFillQuestionCircle } from 'react-icons/ai';
import { BsTicketDetailed } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What can we help you with?</h1>
        <p>Please choose from the option below</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <AiFillQuestionCircle /> Create new ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <BsTicketDetailed /> View my tickets
      </Link>
    </>
  );
}

export default Home;
