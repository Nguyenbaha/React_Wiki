/* eslint-disable-next-line*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';

import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination/Pagination'

function App() {




	let [pageNumber, setPageNumber] = useState(1);
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

	// console.log(pageNumber)


	let [fetchedData,updateFetchedData] =useState([]) ;
	let {info, results} = fetchedData ;


	// console.log('Here: ', info.count);

	useEffect(() => { 
		(async function () {
			let data = await fetch(api).then((res) => res.json());
			updateFetchedData(data)
		})();
	}, [api]);








	return (
		<div className="App">
			<h1 className="text-center ubuntu my-10">
				Name of <span className="text-primary"> Website </span>
			</h1>

			<div class="container">
				<div className="row">
					<div className="col-3">
						<Filters />
					</div>
					<div className="col-8">
						<div className="row">

							<Cards results ={results} />
						</div>
					</div>
				</div>
			</div>

		<Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
			
		</div>
	);
}

export default App;
