import Header from "../components/Header";

function Home () {


    return (
        <main>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Welcome to the Home Page</h1>
                    <p>This is the home page of our application.</p>
                </div>
            </div>
        </div>
    </main>
    );

}

export default Home;