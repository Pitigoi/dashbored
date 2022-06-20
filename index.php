<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>DashBored</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	<link rel="stylesheet" href="./style.css"> </head>

<body>
	<!-- partial:index.partial.html -->
	<div class="app">
		<header class="app-header">
			<div class="app-header-logo">
				<div class="logo">
					<p style="font-size:20px;"><b>DashBored</b></p>
				</div>
			</div>
			<div class="app-header-navigation">
				<div class="tabs"> <a href="#temp">
					TEMP/HUMID
				</a> <a href="#covid">
					COVID
				</a> <a href="#subs">
					SUBS
				</a> </div>
			</div>
		</header>
		<div class="app-body">
			<div class="app-body-main-content">
				<section class="temp-section" id="temp">
					<div class="covid-section-header">
						<h2>TEMP/HUMID</h2> </div>
					<svg width="800" height="500" style="width:800;height:500;float:left;" class="temp"></svg>
					<svg width="800" height="500" style="width:800;height:500;float:left;" class="humid"></svg>
				</section>
				<section class="covid-section" id="covid">
					<div class="covid-section-header">
						<h2>COVID</h2> </div>
					<svg width="800" height="500" style="width:800;height:500;float:left;" class="coviddeaths"></svg>
					<svg width="800" height="500" style="width:800;height:500;float:left;" class="covidcases"></svg>
				</section>
				<section class="subs-section" id="subs">
					<div class="subs-section-header">
						<h2>SUBS</h2> </div>
					<div width="800" height="500" style="width:800;height:500;float:left;"> statistici views pentru Markiplier
						<br>
						<svg width="800" height="0" style=""></svg>
					</div>
					<svg width="800" height="500" style="width:800;height:500;float:left;" class="subs"></svg>
					<script src="https://d3js.org/d3.v4.min.js"></script>
					<script src="graph.js"></script>
				</section>
			</div>
		</div>
	</div>
</body>

</html>
