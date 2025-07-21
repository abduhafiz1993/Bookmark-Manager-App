import BookmarkForm from "../components/BookmarkForm";
import { useEffect, useState } from "react";
import BookmarkList from "../components/BookmarkList";
import Cookies from "js-cookie";

function Home() {
const [bookmarks, setBookmarks] = useState([]);
const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const saved = Cookies.get("bookmarks");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

useEffect(() => {
    Cookies.set("bookmarks", JSON.stringify(bookmarks), { expires: 7 });
}, [bookmarks]);


    const addBookmark = (bookmark) => {
    setBookmarks([bookmark ,...bookmarks]);
};
  const deleteBookmark = (id) => {
    const updated = bookmarks.filter((b) => b.id !== id);
    setBookmarks(updated);
  };
  const filteredBookmarks = bookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Bookmarks</h2>
      <input 
      type="text"
      placeholder="Search bookmarks..."
      className="w-full px-4 py-2 border rounded mb-4"
      value = {searchQuery}
      onChange={(e)=> setSearchQuery(e.target.value)}
       />
      {/* BookmarkForm and BookmarkList will go here */}
      < BookmarkForm onAdd = {addBookmark} />
      <BookmarkList bookmarks={filteredBookmarks} onDelete = {deleteBookmark} />

    </div>
  );
}

export default Home;