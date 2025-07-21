import { useState } from "react";
function BookmarkForm({onAdd}) {

    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!url || !title) {
            alert("Please fill in both title and URL.");
            return;
        }
        // Here you would typically send the data to your backend or state management
    const newBookmark = {
      id: Date.now(),
      title,
      url,
      note,
    };
        console.log("Bookmark added:", { title, url, note });
        // Reset form fields
        setTitle("");
        setUrl("");
        setNote("");
    }
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded space-y-4 mb-6">
      <div>
      <label className="block font-medium text-sm mb-1">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Bookmark Title"
        className="border p-2 mr-2"
        required
      />
      </div>
      <div>
         <label className="block font-medium text-sm mb-1">URL</label>
        <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Bookmark URL"
        className="border p-2 mr-2"
        required
      />
      </div>
            <div>
        <label className="block font-medium text-sm mb-1">Note (optional)</label>
        <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
          className="w-full border rounded p-2"
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