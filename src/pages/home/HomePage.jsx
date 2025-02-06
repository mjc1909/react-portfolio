import { Link } from 'react-router-dom';
import SubscribersList from '../../components/Subscribers/SubscribersList';
import page from '../../styles/modules/page/page.module.css';

const HomePage = () => {

    let pageStyles = `${page.wrapper}`;

    return (
        <div className={pageStyles}>
            <div>
                <Link to={`/subscribers`}>subscribers</Link>
            </div>
        </div>
    );
};
export default HomePage;