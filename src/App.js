import Header from './components/Header'

function App() {
  return (
    <div className="container mt-5 mb-5">
      <Header />

      <div class="row">
		<div class="col-md-6 offset-md-3">
			<h4>Latest News</h4>
			<ul class="timeline">
				<li>
					<a target="_blank" href="#"> <h1>ORION WEBSITE IS STILL UNDER A LOT OF CONSTRUCTION</h1></a>
					<a href="#" class="float-right">Learning</a>
					<p>Our soul purpose is learning....</p>
				</li>
				<li>
					<a href="#">Open Source</a>
					<a href="#" class="float-right"></a>
					<p>Our core mission is to open source as many projects as possible...</p>
				</li>
				<li>
					<a href="#">Teams</a>
					<a href="#" class="float-right"></a>
					<p>We want alot of teamwork...</p>
				</li>
			</ul>
		</div>
	</div>
    </div>
    
  );
}

export default App;
