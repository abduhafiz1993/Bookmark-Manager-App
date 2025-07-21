import BookmarkForm from "../components/BookmarkForm";
import { useState } from "react";

function Home() {
const [bookmarks, setBookmarks] = useState([]);
const addBookmark = (bookmark) => {
    setBookmarks([bookmark ,...bookmarks]);
};    
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Bookmarks</h2>
      {/* BookmarkForm and BookmarkList will go here */}
      < BookmarkForm onAdd = {addBookmark} />
    </div>
  );
}

export default Home;