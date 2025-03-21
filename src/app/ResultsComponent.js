import { RESULTS } from "../utilities/ResultsData";

function ResultsComponent() {
    const results = RESULTS[0]; // Get the first array of results

    return (
        <section id="results">
            <div className="container">
                <h2>Academic Results</h2>
                <div className="results-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Semester</th>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Score</th>
                                <th>Credit Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result) => (
                                <tr key={result.id}>
                                    <td>{result.year}</td>
                                    <td>{result.semester}</td>
                                    <td>{result.course_code}</td>
                                    <td>{result.course_name}</td>
                                    <td>{result.score}</td>
                                    <td>{result.credit_units}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default ResultsComponent;