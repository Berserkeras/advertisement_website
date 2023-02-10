import LandingWrapper from "../assets/LandingWrapper";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <LandingWrapper className="centered">
                    <Link to="/apply" className="landingApplyBtn">
                        Create Ad
                    </Link>
                    <Link to="/register" className="landingCheckBtn">
                        Check Ads
                    </Link>
                    <Link to="/register" className="landingRemoveBtn">
                        Delete Ad
                    </Link>
        </LandingWrapper>
    );
};

export default Landing;
