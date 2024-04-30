import { Link } from '@tanstack/react-router';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
    const { getUsername } = useAuth();
    const userName = getUsername();

    return (
        <nav className="bg-gray-700 text-white  navbar">
            <div className="container mx-auto my-auto h-full flex justify-between items-center">
                {/* Logo */}
                <a href="#" className=" text-2xl font-bold">
                    MyApp
                </a>

                {/* Navigation Links */}

                <div className="flex items-cente">
                    {(
                        [
                            ['/', 'Home'],
                            ['/products', 'Products'],
                            ['/profile', 'Profile'],
                            ['/users', 'Users'],
                        ] as const
                    ).map(([to, label]) => {
                        return (
                            <Link
                                to={to}
                                key={label}
                                activeOptions={
                                    {
                                        // exact:true
                                        // If the route points to the root of it's parent,
                                        // make sure it's only active if it's exact
                                        // exact: to === '.',
                                    }
                                }
                                preload="intent"
                                className={`block py-2 px-3`}
                                // Make "active" links bold
                                activeProps={{ className: `font-bold` }}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
                {userName ? (
                    <span className="text-green-300">
                        hey <strong>{userName}</strong> 👋
                    </span>
                ) : (
                    <Link to="/login" activeProps={{ className: `font-bold` }}>
                        {({ isActive }) => <span>Login {isActive && "🧑‍🦱"}</span>}
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
