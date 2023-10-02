import { useState, useEffect } from "react";
import Picture from "./Picture";

const Main = (props) => {
  const [pictureList, setPictureList] = useState();

  useEffect(() => {
    const fetchPictures = async () => {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPictureList(data);
    };

    fetchPictures();
  }, []);
  return (
    <div className="picture-holder">
      {pictureList
        ? pictureList.map((item, index) => {
            return <Picture url={item.download_url} key={index} />;
          })
        : "loading your feed"}
    </div>
  );
};

export default Main;
