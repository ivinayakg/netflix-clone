import Row from "./components/Row";
import "./styles.css";
import Requests from "./Requests";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header urlString={Requests.fetchTrending} />
      <Row
        urlString={Requests.fetchAction}
        portrait={false}
        title="Action Movies"
      />
      <Row
        urlString={Requests.fetchTrending}
        portrait={true}
        title="Trending Movies"
      />
      <Row
        urlString={Requests.fetchAnimation}
        portrait={false}
        title="Animation Movies"
      />
      <Row
        urlString={Requests.fetchComedy}
        portrait={false}
        title="Comedy Movies"
      />
      <Row
        urlString={Requests.fetchCrime}
        portrait={true}
        title="Crime Movies"
      />
      <Row
        urlString={Requests.fetchDrama}
        portrait={false}
        title="Drama Movies"
      />
      <Row
        urlString={Requests.fetchRomance}
        portrait={false}
        title="Romance Movies"
      />
      <Row
        urlString={Requests.fetchThriller}
        portrait={true}
        title="Thriller Movies"
      />
    </div>
  );
}

export default App;
