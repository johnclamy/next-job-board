import { Link } from 'react-router-dom';
import SigninIcon from './SigninIcon';
import SignOutIcon from './SignOutIcon'

const Header = ({ signedIn }) => {
  const authIcon = signedIn ? (
    <Link to="/signout">
      <SignOutIcon />
    </Link>
  ) : (
    <Link to="/signin">
      <SigninIcon />
    </Link>
  );
  return (
    <header className="bg-teal-100 p-4 flex items-center">
      <h1 className="text-gray-900 font-mono text-4xl tracking-wide text-center capitalize flex-1">
        <Link to="/">my todos</Link>
      </h1>
      {authIcon}
    </header>
  );
}

export default Header