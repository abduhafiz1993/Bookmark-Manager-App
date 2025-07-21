function BookmarkForm() {
  return (
    <form className="bg-white shadow p-4 rounded space-y-4 mb-6">
      <div>
      <label className="block font-medium text-sm mb-1">Title</label>
      <input
        type="text"
        placeholder="Bookmark Title"
        className="border p-2 mr-2"
      />
      </div>
      <div>
         <label className="block font-medium text-sm mb-1">URL</label>
        <input
        type="url"
        placeholder="Bookmark URL"
        className="border p-2 mr-2"
      />
      </div>
            <div>
        <label className="block font-medium text-sm mb-1">Note (optional)</label>
        <textarea
          className="w-full border rounded p-2"
          value={note}
          placeholder="Why is this useful?"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Bookmark
      </button>
    </form>
  );
}
export default BookmarkForm;