var axiscolor = "#969593",
	g1color = "steelblue",
	g2color = "red",
	g3color = "darkorange",
	g4color = "lime",
	g5color = "cyan",
	parseTime = d3.timeParse("%Y-%m-%d"),
	parseTime2 = d3.timeParse("%Y-%m-%d %H:%M:%S");
var svg1 = d3.select(".subs"),
	margin1 = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 80
	},
	width1 = +svg1.attr("width") - margin1.left - margin1.right,
	height1 = +svg1.attr("height") - margin1.top - margin1.bottom,
	g1 = svg1.append("g").attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");
var x1 = d3.scaleTime()
	.rangeRound([0, width1]);
var y1 = d3.scaleLinear()
	.rangeRound([height1, 0]);
var line1 = d3.line()
	.x(function(d) {
		return x1(d.date);
	})
	.y(function(d) {
		return y1(d.subs);
	});
d3.tsv("socialblade.txt", function(d) {
	d.date = parseTime(d.date);
	d.subs = +d.subs;
	return d;
}, function(error, data) {
	if (error) throw error;
	x1.domain(d3.extent(data, function(d) {
		return d.date;
	}));
	y1.domain(d3.extent(data, function(d) {
		return d.subs;
	}));
	g1.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", g1color)
		.attr("stroke-linejoin", "round")
		.attr("stroke-linecap", "round")
		.attr("stroke-width", 1.5)
		.attr("d", line1);
	var bot1 = g1.append("g")
		.attr("transform", "translate(0," + height1 + ")")
		.call(d3.axisBottom(x1));
	bot1.selectAll("line")
		.style("stroke", axiscolor)
	bot1.selectAll("path")
		.style("stroke", axiscolor)
	bot1.selectAll("text")
		.style("fill", axiscolor)
	var left1 = g1.append("g")
		.call(d3.axisLeft(y1))
	left1.append("text")
		.attr("fill", axiscolor)
		.attr("y", 6)
		.attr("dy", "0.71em")
		.attr("x", 6)
		.attr("text-anchor", "start")
		.text("Subscribers");
	left1.selectAll("line")
		.style("stroke", axiscolor)
	left1.selectAll("path")
		.style("stroke", axiscolor)
	left1.selectAll("text")
		.style("fill", axiscolor)
});
var svg2 = d3.select(".coviddeaths"),
	margin2 = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 30
	},
	width2 = +svg2.attr("width") - margin2.left - margin2.right,
	height2 = +svg2.attr("height") - margin2.top - margin2.bottom,
	g2 = svg2.append("g").attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");
var x2 = d3.scaleTime()
	.rangeRound([0, width2]);
var y2 = d3.scaleLinear()
	.rangeRound([height2, 0]);
var line2 = d3.line()
	.x(function(d) {
		return x2(d.date);
	})
	.y(function(d) {
		return y2(d.deaths);
	});
d3.tsv("covidrom.txt", function(d) {
	d.date = parseTime(d.date);
	d.deaths = +d.deaths;
	return d;
}, function(error, data) {
	if (error) throw error;
	x2.domain(d3.extent(data, function(d) {
		return d.date;
	}));
	y2.domain(d3.extent(data, function(d) {
		return d.deaths;
	}));
	g2.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", g2color)
		.attr("stroke-linejoin", "round")
		.attr("stroke-linecap", "round")
		.attr("stroke-width", 1.5)
		.attr("d", line2);
	var bot2 = g2.append("g")
		.attr("transform", "translate(0," + height2 + ")")
		.call(d3.axisBottom(x2));
	bot2.selectAll("line")
		.style("stroke", axiscolor)
	bot2.selectAll("path")
		.style("stroke", axiscolor)
	bot2.selectAll("text")
		.style("fill", axiscolor)
	var left2 = g2.append("g")
		.call(d3.axisLeft(y2));
	left2.append("text")
		.attr("fill", axiscolor)
		.attr("y", 6)
		.attr("dy", "0.71em")
		.attr("x", 6)
		.attr("text-anchor", "start")
		.text("People dead");
	left2.selectAll("line")
		.style("stroke", axiscolor)
	left2.selectAll("path")
		.style("stroke", axiscolor)
	left2.selectAll("text")
		.style("fill", axiscolor)
});
var svg3 = d3.select(".covidcases"),
	margin3 = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 30
	},
	width3 = +svg3.attr("width") - margin3.left - margin3.right,
	height3 = +svg3.attr("height") - margin3.top - margin3.bottom,
	g3 = svg3.append("g").attr("transform", "translate(" + margin3.left + "," + margin3.top + ")");
var x3 = d3.scaleTime()
	.rangeRound([0, width3]);
var y3 = d3.scaleLinear()
	.rangeRound([height3, 0]);
var line3 = d3.line()
	.x(function(d) {
		return x3(d.date);
	})
	.y(function(d) {
		return y3(d.cases);
	});
d3.tsv("covidrom.txt", function(d) {
	d.date = parseTime(d.date);
	d.cases = +d.cases;
	return d;
}, function(error, data) {
	if (error) throw error;
	x3.domain(d3.extent(data, function(d) {
		return d.date;
	}));
	y3.domain(d3.extent(data, function(d) {
		return d.cases;
	}));
	g3.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", g3color)
		.attr("stroke-linejoin", "round")
		.attr("stroke-linecap", "round")
		.attr("stroke-width", 1.5)
		.attr("d", line3);
	var bot3 = g3.append("g")
		.attr("transform", "translate(0," + height3 + ")")
		.call(d3.axisBottom(x3));
	bot3.selectAll("line")
		.style("stroke", axiscolor)
	bot3.selectAll("path")
		.style("stroke", axiscolor)
	bot3.selectAll("text")
		.style("fill", axiscolor)
	var left3 = g3.append("g")
		.call(d3.axisLeft(y3));
	left3.append("text")
		.attr("fill", axiscolor)
		.attr("y", 6)
		.attr("dy", "0.71em")
		.attr("x", 6)
		.attr("text-anchor", "start")
		.text("People infected");
	left3.selectAll("line")
		.style("stroke", axiscolor)
	left3.selectAll("path")
		.style("stroke", axiscolor)
	left3.selectAll("text")
		.style("fill", axiscolor)
});
var svg4 = d3.select(".temp"),
	margin4 = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 30
	},
	width4 = +svg4.attr("width") - margin4.left - margin4.right,
	height4 = +svg4.attr("height") - margin4.top - margin4.bottom,
	g4 = svg4.append("g").attr("transform", "translate(" + margin4.left + "," + margin4.top + ")");
var x4 = d3.scaleTime()
	.rangeRound([0, width4]);
var y4 = d3.scaleLinear()
	.rangeRound([height4, 0]);
var line4 = d3.line()
	.x(function(d) {
		return x4(d.date);
	})
	.y(function(d) {
		return y4(d.temp);
	});
d3.tsv("temp.txt", function(d) {
	d.date = parseTime2(d.date);
	d.temp = parseFloat(d.temp);
	return d;
}, function(error, data) {
	if (error) throw error;
	x4.domain(d3.extent(data, function(d) {
		return d.date;
	}));
	y4.domain(d3.extent(data, function(d) {
		return d.temp;
	}));
	g4.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", g4color)
		.attr("stroke-linejoin", "round")
		.attr("stroke-linecap", "round")
		.attr("stroke-width", 2)
		.attr("d", line4);
	var bot4 = g4.append("g")
		.attr("transform", "translate(0," + height4 + ")")
		.call(d3.axisBottom(x4));
	bot4.selectAll("line")
		.style("stroke", axiscolor)
	bot4.selectAll("path")
		.style("stroke", axiscolor)
	bot4.selectAll("text")
		.style("fill", axiscolor)
	var left4 = g4.append("g")
		.call(d3.axisLeft(y4));
	left4.append("text")
		.attr("fill", axiscolor)
		.attr("y", 6)
		.attr("dy", "0.71em")
		.attr("x", 6)
		.attr("text-anchor", "start")
		.text("Celsius");
	left4.selectAll("line")
		.style("stroke", axiscolor)
	left4.selectAll("path")
		.style("stroke", axiscolor)
	left4.selectAll("text")
		.style("fill", axiscolor)
});
var svg5 = d3.select(".humid"),
	margin5 = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 30
	},
	width5 = +svg5.attr("width") - margin5.left - margin5.right,
	height5 = +svg5.attr("height") - margin5.top - margin5.bottom,
	g5 = svg5.append("g").attr("transform", "translate(" + margin5.left + "," + margin5.top + ")");
var x5 = d3.scaleTime()
	.rangeRound([0, width5]);
var y5 = d3.scaleLinear()
	.rangeRound([height5, 0]);
var line5 = d3.line()
	.x(function(d) {
		return x5(d.date);
	})
	.y(function(d) {
		return y5(d.humid);
	});
d3.tsv("temp.txt", function(d) {
	d.date = parseTime2(d.date);
	d.humid = parseFloat(d.humid);
	return d;
}, function(error, data) {
	if (error) throw error;
	x5.domain(d3.extent(data, function(d) {
		return d.date;
	}));
	y5.domain([0, 100]);
	g5.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", g5color)
		.attr("stroke-linejoin", "round")
		.attr("stroke-linecap", "round")
		.attr("stroke-width", 2)
		.attr("d", line5);
	var bot5 = g5.append("g")
		.attr("transform", "translate(0," + height5 + ")")
		.call(d3.axisBottom(x5));
	bot5.selectAll("line")
		.style("stroke", axiscolor)
	bot5.selectAll("path")
		.style("stroke", axiscolor)
	bot5.selectAll("text")
		.style("fill", axiscolor)
	var left5 = g5.append("g")
		.call(d3.axisLeft(y5));
	left5.append("text")
		.attr("fill", axiscolor)
		.attr("y", 6)
		.attr("dy", "0.71em")
		.attr("x", 6)
		.attr("text-anchor", "start")
		.text("Humidity%");
	left5.selectAll("line")
		.style("stroke", axiscolor)
	left5.selectAll("path")
		.style("stroke", axiscolor)
	left5.selectAll("text")
		.style("fill", axiscolor)
});
