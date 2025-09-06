
const container = document.querySelector('#container');

const element = () => {

    return (
        <div>
            <h1>Hello World!</h1>
            <p>Welcome to React!</p>
        </div>
    );
};

ReactDOM.createRoot(container).render(element());