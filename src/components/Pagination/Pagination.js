import React from 'react';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
	// console.log("Count: ",info.pages) ;
	let next = () => {
		if (pageNumber >= info.pages) return;
		setPageNumber((e) => e + 1);
	};
	let prev = () => {
		if (pageNumber === 1) return;
		setPageNumber((e) => e - 1);
	};
	return (
		<div className="container d-flex justify-content-center gap-5 my-5">
			<button onClick={prev} className="btn btn-primary">
				Prev
			</button>
			<button onClick={next} className="btn btn-primary">
				Next
			</button>
		</div>
	);
};

export default Pagination;
