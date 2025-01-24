import { FaUserCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from 'next/navigation';

const Profile = async () => {
    // Get the Kinde session
    const session = await getKindeServerSession();
    const isAuthenticated = await session?.isAuthenticated();

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
        redirect("/api/auth/login");
    }

    // Get the user data
    const user = await session?.getUser();
    const userName = `${user?.given_name} ${user?.family_name}`; // Full name
    const userEmail = user?.email;
    const profilePicture = user?.picture;

    return (
        <div className="flex flex-col pt-6 justify-center items-center md:px-14 px-6 py-6">
            {isAuthenticated ? (
                <>
                    <h2 className="text-2xl text-gray-800 font-bold">Welcome to your profile!</h2>

                    <div className="space-y-4 my-4">
                        <figure className="mx-auto w-44 h-44">
                            <img
                                src={profilePicture}
                                className="w-full h-full shadow-lg border-8 border-emerald-500 rounded-full"
                                alt="Profile picture of user"
                                referrerPolicy="no-referrer"
                            />
                        </figure>

                        {/* Display user name */}
                        <p className="pt-4 flex gap-x-2 items-center text-gray-700 text-lg font-bold">
                            <FaUserCheck className="text-xl" />
                            <span>{userName}</span>
                        </p>

                        {/* Display user email */}
                        <p className="flex gap-x-2 items-center text-gray-700 text-lg font-bold">
                            <MdEmail className="text-xl" />
                            <span>{userEmail}</span>
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-xl text-gray-800 font-bold">
                        First{" "}
                        <Link href="/api/auth/login" className="text-emerald-600 underline">
                            Login
                        </Link>{" "}
                        to view your profile!
                    </h2>
                </>
            )}
        </div>
    );
};

export default Profile;