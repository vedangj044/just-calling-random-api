import { useState } from "react";
import axios from "axios";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const GithubUser = () => {
    const [valid, setValid] = useState(false);
    const [user, setUser] = useState({});

    const search = (username) => {
        if (username !== "")
            axios
                .get("https://api.github.com/users/" + username)
                .then((res) => {
                    setUser(res.data);
                    setValid(true);
                })
                .catch((err) => setValid(false));
    };

    return (
        <>
            <div className="mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
                <h1 className="text-xl py-2 font-medium">Search Random GitHub User</h1>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                    type="text"
                    onChange={(e) => search(e.target.value)}
                    placeholder="Type any random name here..."
                />

                {valid ? (
                    <section className="flex flex-col justify-content-center align-items-center my-8 md:flex-row">
                        <section>
                            <img src={user?.avatar_url} alt="Profile" className="rounded-full mx-auto" width="25%" />
                        </section>
                        <section className="text-center">
                            <h1 className="text-xl my-2">{user?.name}'s Details</h1>
                            <p className="mt-2 mb-4">{user?.bio}</p>
                            <a
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                role="button"
                                href={user?.html_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </section>
                    </section>
                ) : (
                    <section></section>
                )}

                <section className="mt-6">
                    <ContributorInfo
                        username="shivamsingh-07"
                        profilePic="https://avatars.githubusercontent.com/u/61000207?v=4"
                    />
                    <ApiInfo apiUrl="https://api.github.com/" apiName="GitHub API" />
                </section>
            </div>
        </>
    );
};

export default GithubUser;
