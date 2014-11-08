var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 30,
  padding: 20
}

var gameStats = {
  score: 0,
  bestScore: 0
}

var axes = {
  x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
  y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
}


var svgContainer= d3.select('body').append('svg')
                                   .attr('class','gameBoard');

var gameBoard = d3.select('.gameBoard').attr('width', gameOptions.width)
                                       .attr('height', gameOptions.height);

var createEnemies = function(){
  var enemies = _.range(0,gameOptions.nEnemies).map(function(index){
    return {
      id: index,
      x: axes.x(Math.random()*100),
      y: axes.y(Math.random()*100)
    };
  });
  return enemies;
};

var render = function(){
  var enemies = d3.select('.gameBoard').selectAll('.enemies').data(createEnemies()).enter().append('circle').attr('cx', function(d){return d.x}).attr('cy', function(d){return d.y}).attr('r', 10).attr('id', function(d){return d.id}).style('fill', 'white').style('stroke', 'blue').style('stroke-width', 2).attr('class', 'enemies');



};
render();
// var circles= svgContainer.selectAll('circle')
//                          .data(randomize(30))
//                          .enter()
//                          .append('circle')
//                          .attr('cx', function (d) { return d.x; })
//                          .attr('cy', function (d) { return d.y; })
//                          .attr('r', 10)
//                          .attr('fill','white')
//                          .attr('stroke', 'blue')
//                          .attr('stroke-width', 2);

// var update = function(){
//   //move all the circles to new coordinates given by randomize function

// };
