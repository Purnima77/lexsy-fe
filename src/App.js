import data from './domains.json'
import {useState} from 'react';


function SearchForm() {
    const [search, setSearch] = useState("");

    const filterdDomains = () => {
        if (search == '') {
            return data;
        } else {
            return data.filter((record) => record.name.includes(search))
        }
    };


    function searchList() {
        let filteredDom = filterdDomains();
        return (
            <ul>
                {filteredDom.map(record => <li>{record.name}</li>)}
            </ul>
        );
    }

    return (
        <div>
            <form>
                <label>Search here:
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </form>
            <div>
                {searchList()}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <SearchForm/>
        </div>
    );
}

export default App;
