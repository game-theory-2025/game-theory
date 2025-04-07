import { Link } from "react-router-dom";

function About() {
    return (
      <div className="flex flex-col gap-10">
        <h1>About This Application</h1>
        <p>This application is my game theory project, designed to help users analyze and compare different game strategies using matrix representations. Users can input matrices representing payoffs for various strategies and choose sorting methods to evaluate competitiveness. The application provides a user-friendly interface for matrix input and displays results clearly, making it an effective tool for understanding game theory concepts.</p>
        
        <p>Developed under the guidance of Professor <span className="font-bold"> Dr. Mohsen Miri. </span></p>

        <div>
          <h2 className="font-bold">Contributors</h2>
          <ul className=" list-disc ml-5">
            <li>Sajad Kiani</li>
            <li>Susan Kiani</li>
            <li>AmirHossein Dashtban</li>
            <li>Human Kaseban</li>
            <li>Keivan sagheb</li>
          </ul>
        </div>
        <Link to="/">Go to Home Page</Link>
      </div>
    );
}

export default About;