const App = () => {

    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jane" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))