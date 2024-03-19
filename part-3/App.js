const App = () => {
    return (
        <div>
            <Person name="John Doe" age={25} hobbies={["Reading", "Running", "Cooking"]} />
            <Person name="Jane Smith" age={17} hobbies={["Painting", "Gardening", "Traveling"]} />
            <Person name="Maximilian" age={30} hobbies={["Playing guitar", "Hiking", "Photography"]} />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'))