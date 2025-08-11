import { useState } from "react";
import { FaRegUser, FaPenFancy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "../../../../Redux/actions";

const StudentDetails = ({ student }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(student.name);
  const [semester, setSemester] = useState(student.semester);
  const [math, setMath] = useState(student.math);
  const [english, setEnglish] = useState(student.english);
  const [science, setScience] = useState(student.science);
  const [average, setAverage] = useState(student.average);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const dispatch = useDispatch();

  const handleEditToggle = () => {
    setEdit(!edit);
  };

  const handleDeleteToggle = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    dispatch(deleteStudent(student.id));
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    dispatch(
      updateStudent(student.id, name, semester, math, english, science, average)
    );
  };

  return (
    <div className="student-details">
      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>Delete this student?</p>
          <button onClick={confirmDelete} className="y">Yes</button>
          <button onClick={cancelDelete} className="n">No</button>
        </div>
      )}
      <div className="student-div">
        <div className="icon">
          <FaRegUser />
        </div>
        <section>
          <FaPenFancy className="i w" onClick={handleEditToggle} />
          <MdDeleteForever className="i d" onClick={handleDeleteToggle} />
        </section>
      </div>
      {edit ? (
        <div className="student-info">
          <form onSubmit={onFormSubmit}>
            <p>
              <strong>Name: </strong>
              <input
                className="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <strong>Semester: </strong>
              <input
                type="number"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                max={100}
              />
            </p>
            <p>
              <strong>Math: </strong>
              <input
                type="number"
                value={math}
                onChange={(e) => setMath(e.target.value)}
                max={100}
              />
            </p>
            <p>
              <strong>English: </strong>
              <input
                type="number"
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
                max={100}
              />
            </p>
            <p>
              <strong>Science: </strong>
              <input
                type="number"
                value={science}
                onChange={(e) => setScience(e.target.value)}
                max={100}
              />
            </p>
            <p>
              <strong>Average: </strong>
              <input
                type="number"
                value={average}
                onChange={(e) => setAverage(e.target.value)}
                max={100}
              />
            </p>
            <button type="submit">Save</button>
          </form>
        </div>
      ) : (
        <div className="student-info">
          <p>
            <strong>ID: </strong> {student.id}
          </p>
          <p>
            <strong>Name: </strong> {name}
          </p>
          <p>
            <strong>Semester: </strong> {semester}
          </p>
          <p>
            <strong>Math: </strong> {math}
          </p>
          <p>
            <strong>English: </strong> {english}
          </p>
          <p>
            <strong>Science: </strong> {science}
          </p>
          <p>
            <strong>Average: </strong> {average}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
