import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 space-x-5 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer "
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <img
          className="h-7 mx-2"
          alt="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="grid-cols-10">
        <div>
          <input
            className="border border-gray-300 rounded-l-3xl p-2 w-96"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-300 bg-gray-300 rounded-r-3xl p-2">
            Search
          </button>
        </div>
        <div className="fixed bg-white border-gray-100 px-5 py-2 shadow-lg rounded-lg w-96">
          <ul>
            {suggestions.map((suggestion) => (
              <li className="hover:bg-gray-100" key={suggestion}>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid-cols-1">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
