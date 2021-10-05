import { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

export default function TronaldDump(props){
    const[Quote, setQuote] = useState("");

    useEffect(() => {
        fetch("https://api.tronalddump.io/random/quote")
            .then((res) => res.json())
			.then((data) => setQuote(data.value));
    }, []);

    return(
        <div>
			<div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
				<h1 className="text-xl py-2">Tronald Dump</h1>
				<h1 className="text-2xl font-medium pb-6">{Quote}</h1>
				<ContributorInfo
					username="mayank-kr"
					profilePic="https://avatars.githubusercontent.com/u/75662227?v=4"
				/>
				<ApiInfo apiUrl="https://api.tronalddump.io/" apiName="Tronald Dump" />
			</div>
		</div>
    )
}