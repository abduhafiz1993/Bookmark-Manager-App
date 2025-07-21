import BookmarkForm from "../components/BookmarkForm";
import { useState } from "react";
import BookmarkList from "../components/BookmarkList";

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
      <BookmarkList bookmarks={bookmarks} />

    </div>
  );
}

export default Home;