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
  var enemies = d3.range(0,gameOptions.nEnemies).map(function(index){
    return {
      x: axes.x(Math.random()*100),
      y: axes.y(Math.random()*100)
    };
  });
  return enemies;
};

var drag = d3.behavior.drag()
                      .on('drag',function () {
                                 d3.select(this)
                                 .attr('cx', d3.event.x)
                                 .attr('cy', d3.event.y);
}
);

var player = d3.select('.gameBoard').selectAll('.player').data([{x: axes.x(50), y: axes.y(50)}]).enter()
                  .append('circle')
                  .attr('cx', function(d){return d.x})
                  .attr('cy', function(d){return d.y})
                  .attr('r', 10)
                  .style('fill', 'red')
                  .style('stroke', 'blue')
                  .style('stroke-width', 2)
                  .attr('class', 'player')
                  .call(drag);

var update = function(){
  var enemies = d3.select('.gameBoard').selectAll('.enemies')
               .data(createEnemies());

  enemies.transition().duration(1500)
                    .attr('cx', function(d){return d.x})
                    .attr('cy', function(d){return d.y});


  enemies.enter()
         .append('circle')
         .attr('cx', function(d){return d.x})
         .attr('cy', function(d){return d.y})
         .attr('r', 10)
         .style('fill', 'white')
         .style('stroke', 'blue')
         .style('stroke-width', 2)
         .attr('class', 'enemies');
};
update();
setInterval(update, 1700);
