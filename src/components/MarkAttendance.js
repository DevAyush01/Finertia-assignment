import { useState } from "react";

function MarkAttendance({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };
    // alert('Mark Attendance');
      const [rollNumber, setRollNumber] = useState('');
      const [date, setDate] = useState('');
      const [attendanceStatus, setAttendanceStatus] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending data to the server or updating state
    console.log('Roll Number:', rollNumber);
    console.log('Date:', date);
    console.log('Attendance Status:', attendanceStatus);
    // Reset form fields
    setRollNumber('');
    setDate('');
    setAttendanceStatus('');
  };

  return (
    <div>
      <h2 className="text-4xl text-cyan-400 text-center">Mark the Attendance</h2>
      {/* <button onClick={handleMarkAttendance}>Mark Attendance</button> */}
      <form onSubmit={handleSubmit} className="text-center">
        <div>
          <label className="font-medium">
            Roll Number:
            <input
            className="shadow w-80 appearance-none my-4 border rounded  border-red-700 py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="font-medium ml-14">
            Date:
            <input
            className="shadow w-80 appearance-none my-2 border rounded  border-red-700 py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-4">
          <label className="font-medium">
            Attendance Status:
            <select className="font-bold ml-4"
              value={attendanceStatus}
              onChange={(e) => setAttendanceStatus(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </label>
        </div>
        <button type="submit" className="w-40 mr-40  border border-solid border-teal-400 rounded-md my-4 text-blue-600 py-1">Submit</button>
      </form>
      <button onClick={handleLogout} className="w-28 absolute right-4 top-4 border border-solid border-red-400 bg-slate-400 rounded-md my-1 text-black font-bold py-1">Logout</button>
    </div>
  );
}
export default MarkAttendance