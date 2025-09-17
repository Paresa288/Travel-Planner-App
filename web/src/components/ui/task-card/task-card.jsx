import Quill from "quill";
import { useEffect } from "react";
import { useRef } from "react";
import "quill/dist/quill.snow.css"

function TaskCard({ day }) {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (editorRef.current && ! quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, { 
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["link", "image"]
          ]
        },
        placeholder: "Start adding some things to do",
        theme: "snow" 
      })

      quillInstance.current.on("text-change", () => {

      })
    }
  }, [])


  return (
    <div className="card">
      <h2 className="card-header text-center">{`Day ${day}`}</h2>
      <div ref={editorRef} className="card-body"></div>
    </div>
  )
};

export default TaskCard;