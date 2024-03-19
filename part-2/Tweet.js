const Tweet = (props) => {
    return (
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title">Username: {props.username}</h5>
                <h5 className="card-title">Name: {props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Date: {props.date}</h6>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    );
}
