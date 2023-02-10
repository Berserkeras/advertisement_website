import LandingWrapper from "../assets/LandingWrapper";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <LandingWrapper className="centered">
                    <Link to="create" className="landingApplyBtn">
                        Create Ad
                    </Link>
                    <Link to="check" className="landingCheckBtn">
                        Check Ads
                    </Link>
                    <Link to="delete" className="landingRemoveBtn">
                        Delete Ad
                    </Link>
        </LandingWrapper>
    );
};

export default Landing;
