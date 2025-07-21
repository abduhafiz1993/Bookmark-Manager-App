import BookmarkForm from "../components/BookmarkForm";
function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Bookmarks</h2>
      {/* BookmarkForm and BookmarkList will go here */}
      < BookmarkForm />
    </div>
  );
}

export default Home;