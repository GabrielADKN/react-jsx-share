const Person = (props) => {
    let displayName = props.name;
    let votingMessage = props.age >= 18 ? "Please go vote!" : "You must be 18";

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{displayName}</h3>
            <h3>{votingMessage}</h3>
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}