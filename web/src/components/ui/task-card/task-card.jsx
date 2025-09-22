import Quill from "quill";
import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css"
import * as ApiClient from "../../../services/api-client";
import { useParams } from "react-router";

function TaskCard({ day, schedule, index }) {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const { id } = useParams();

  const handleOnSave = async () => {
    const html = quillInstance.current?.getSemanticHTML();
    const updatedTravel = await ApiClient.updateTravelSchedule(id, index, {
      content: html 
    });
    console.log(updatedTravel.schedule);
  }

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, { 
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],  
            ["bold", "italic", "underline"],
            ["link", "image", "video"],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],

            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],

            ['clean']
          ]
        },
        placeholder: "Start adding some things to do",
        theme: "snow",
      })

      quillInstance.current.clipboard.dangerouslyPasteHTML(schedule.content);
    }
  }, [])


  return (
    <div className="card" style={{ minWidth: "25rem"}}>
      <h2 className="card-header text-center">{`Day ${day}`}</h2>
      <div ref={editorRef} className="card-body"></div>
      <button className="btn btn-success" onClick={() => handleOnSave()}>Save</button>
    </div>
  )
};

export default TaskCard;