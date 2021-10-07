import React, {useState} from 'react'
import axios from 'axios';
import ApiInfo from '../components/apiInfo';
import ContributorInfo from '../components/contributorInfo';

const HaikuSyllableCounter = () => {
	const [input, setInput] = useState("")
	const [wordMeta, setWordMeta] = useState({})
	const [syllables, setSyllables] = useState([0,0,0])

	const recalculateSyllables = async () => {
		const inputArr = parseInput(input)
		let newWordMeta = {...wordMeta};
		let newLineSyllables = [0,0,0]
		for (let i = 0; i < inputArr.length; i++) {
			const line = inputArr[i];
			let lineSyllables = 0;
			for (const word of line) {
				let wordSyllables = 0;
				if (wordMeta[word]) {
					wordSyllables = wordMeta[word]
				} else {
					wordSyllables = await getSyllables(word)
					newWordMeta = {...newWordMeta, [word]:wordSyllables}
				}	
				lineSyllables += wordSyllables;
			}
			newLineSyllables[i] = lineSyllables;
		}
		setSyllables(newLineSyllables)
		setWordMeta(newWordMeta)
	}

	return (
        <div className="mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4">
            <h1 className="text-xl py-2">Haiku Syllable Counter</h1>
			<textarea className="w-full h-32 border p-2" onChange={({target})=>setInput(target.value)} value={input}/>
			<button className="px-2 py-2 my-2 bg-gray-200 rounded shadow active:bg-gray-300" onClick={recalculateSyllables}>Check Syllables</button>
			<div className="mt-2 grid grid-rows-3 gap-2">
				{syllables.map((count, line)=> <SyllableCount {...{count, line: line + 1, key:line}}/>)}
			</div>
            <br />
            <ContributorInfo
                username="jesse-moore"
                profilePic="https://avatars.githubusercontent.com/u/4754841?v=4"
            />
            <ApiInfo apiUrl="https://www.datamuse.com/api/" apiName="datamuse" />
        </div>
	)
}

const getSyllables = async (word) => {
	try {
		const res = await axios.get(`https://api.datamuse.com/words?sp=${word}&md=s&max=1`)
		const data = await res.data;
		return data[0].numSyllables || 0;	
	} catch (error) {
		return 0;
	}
}

const parseInput = (input) => {
	return input.split('\n').map(line=>line.replace(/\W+/g,' ').split(' ').filter(word=>word!==''));
}

const SyllableCount = ({line, count}) => {
	return (
		<div className="grid grid-cols-2 w-72">
			<div>Syllables line {line}:</div>
			<div className="font-bold">{count}</div>
		</div>
	)
}

export default HaikuSyllableCounter
