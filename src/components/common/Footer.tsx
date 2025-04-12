import { appConstants } from "../../constants/app.constants";
import packageJson from '../../../package.json';

const Footer: React.FC = () => {
    return (
        <footer className={`w-full fixed overflow-auto bottom-0 right-0 left-0 p-1 text-white ${appConstants.APP_BG_PRIMARY}`}>
            <div className="container mx-auto text-center font-6 flex flex-row justify-center gap-4">
                <p>© 2025 {appConstants.APP_NAME}, All rights reserved</p>
                <p>v.{packageJson.version}</p>
            </div>
        </footer>
    );
}

export default Footer;
