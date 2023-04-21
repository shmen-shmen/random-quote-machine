import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
	const [quote, setQuote] = useState({
		text: "Yo Orystar Sheshen Am Qotaqtar Sap Sary Qotaq Sheshen Am Qaldyragan",
		author: "Quazaq People",
	});

	const quoteRefresh = () => {
		setQuote({ ...quote, text: "you requested a new quote" });
	};

	return (
		<div className="App">
			<main id="quote-box">
				<div id="text">
					<em>"{quote.text}"</em>
				</div>
				<div id="author">
					<strong>{quote.author}</strong>
				</div>
				<button id="new-quote" onClick={quoteRefresh}>
					new quote
				</button>
				<div className="share-links-wrapper">
					<p>share this quote:</p>
					<div className="share-links-row">
						<a
							id="tweet-quote"
							href="twitter.com/intent/tweet"
							target={"_blank"}
						>
							twitter
						</a>
						<a href="twitter.com/intent/tweet" target={"_blank"}>
							vkontakte
						</a>
						<a href="twitter.com/intent/tweet" target={"_blank"}>
							odnoklassniki
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
