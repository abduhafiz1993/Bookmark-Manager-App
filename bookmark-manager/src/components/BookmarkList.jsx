function BookmarkList({ bookmarks, onDelete }) {
      if (bookmarks.length === 0) {
    return <p className="text-gray-600">No bookmarks yet.</p>;
  }
  return (
     <div className="space-y-4">
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className="bg-gray-100 p-4 rounded shadow">
          <div className="flex justify-between items-center">
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
            {bookmark.title}
          </a>
            <button
              onClick={() => onDelete(bookmark.id)}
              className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
            </div>
          {bookmark.note && <p className="text-sm text-gray-700 mt-1">{bookmark.note}</p>}
        </div>
      ))}
    </div>
  );
}

export default BookmarkList;