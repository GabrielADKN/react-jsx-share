function App() {
    return (
        <div>
            <Tweet
                username="kylemathews"
                name="Kyle Mathews"
                date="4/15/2020"
                content="This is my first tweet!"
            />

            <Tweet
                username="kylemathews"
                name="Kyle Mathews"
                date="4/16/2020"
                content="This is my second tweet!"
            />

            <Tweet
                username="kylemathews"
                name="Kyle Mathews"
                date="4/18/2020"
                content="This is my third tweet!"
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
