import { useEffect, useState } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const ImageCompression = () => {
  const [originalUrl, setOriginalUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  );
  const [quality, setQuality] = useState(5);
  const [compressedUrl, setCompressedUrl] = useState("");

  useEffect(() => {
    compressImage(originalUrl, quality);
    // eslint-disable-next-line
  }, []);

  const compressImage = (url, picQuality) => {
    fetch(`https://api.resmush.it/ws.php?img=${url}&qlty=${picQuality}`)
      .then((r) => r.json())
      .then((res) => {
        console.log(res);
        setCompressedUrl(res.dest);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="flex mx-4 my-11 rounded-md p-4 border-1 shadow-2xl md:px-4">
        <div className="w-5/12">
          <h1 className="text-xl py-2">Image Compression</h1>
          <label htmlFor="keyword">Url</label>
          <input
            id="keyword"
            className="border px-2 p-1 focus:border-blue-600 outline-none border-blue-500 border-2 rounded ml-1"
            type="text"
            placeholder="Type any image url..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <label className="ml-3" htmlFor="quality">
            Quality
          </label>
          <input
            id="quality"
            className="border px-2 p-1 focus:border-blue-600 outline-none border-blue-500 border-2 rounded w-20 ml-1"
            type="number"
            placeholder="Enter quality (1 to 100)"
            value={quality}
            onChange={(e) =>
              setQuality(
                +e.target.value > 100
                  ? 100
                  : +e.target.value < 1
                  ? 1
                  : +e.target.value
              )
            }
          />
          <button
            className="border p-1 border-blue-600 rounded ml-2 mb-2 bg-blue-200 hover:bg-blue-400"
            onClick={() => compressImage(originalUrl, quality)}
          >
            Compress
          </button>
          <br />
          <ContributorInfo
            username="Bihan001"
            profilePic="https://avatars.githubusercontent.com/Bihan001"
          />
          <ApiInfo apiUrl="https://resmush.it/api" apiName="reSmush.it" />
        </div>
        <div className=" w-7/12 flex ml-5">
          <div className="w-full">
            <h1 className="text-xl py-2">Original</h1>
            <img className="w-full" src={originalUrl} alt="" />
          </div>
          <div className="w-full">
            <h1 className="text-xl py-2">Compressed</h1>
            <img className="w-full" src={compressedUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCompression;
