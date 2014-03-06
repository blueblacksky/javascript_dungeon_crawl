

/*MapTile function for creating mapTiles
 * passable: if tile is passable by the player
 * mapImg: string for map array image src update
 * description: flavor text for the location
 * encounter: can the player encounter monsters on this tile?
 * treasure: any treasure found on the tile
 * trap: if a trap is present
 */
  function MapTile(passable, mapImage, description, encounter, treasure, trap)
{
    this.passable=passable;
    this.mapImage=mapImage;
    this.description=description;
    this.encounter=encounter;
    this.treasure=treasure;
	this.trap = trap;
}
//here for now until the boss tile is chosen and an if statement evaluates in that tile and sets bossFight to 1
var bossFight = false;

// worldMap array - this stores data about each "location" in the game world. 2d array of objects 28x31
var worldMap = [[new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
               [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
               [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   [new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile(),new MapTile()],
			   ];

// worldMapImg array - this stores images in an array for drawing the world map with drawMap();
var worldMapImg = [[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
                   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
				   ];
		   
$(document).on('click', '#new_game', function(){
	
	// name, school, health, attack, defense, magic, mp, accuracy, evasion, attackMultiplier, defenseMultiplier
	window.player = new Player("", 0, 200, 40, 60, 50, 100, 51, 51, 30, 30, .35, .10);	
	window.buttonClicks = 0;
	
	// removes new game button and appends UI
	$('#new_game').remove();	

	//introduction
	$('#main_body').append('<br /><br /><form id= "form1" action = ""><div id="button_container" style="text-align: center"><form id="form2" action="" style="text-align: center"><div id="output_area" ><textarea id="output" cols="65" rows="10" readonly="yes" style="resize: none"></textarea></div></form><div id="lower_btns" align="center"/><audio controls id="audio_container" hidden="true"><source src="" type="audio/mpeg"><embed height="0" width="0" src=""></audio><audio controls id="music_container" hidden="true"><source src="" type="audio/mpeg"><embed height="0" width="0" src=""></audio>');
	
	//asks for player's name and supplies a default name if the player doesn't supply one
	player._name = prompt("Apprentice, what are you called?", "");
	if(player._name.length == 0)
		{
			player._name = "Luka";
		}
	$('#output').val($('#output').val()+'\n\nWelcome '+player._name+', to the Sealed Archive.');
	AutoScroll();
	$('#output').val($('#output').val()+'\n\nChoose your school.');
	AutoScroll();
	$('#lower_btns').append('<input type="button" id="conjuration" value="Conjuration/Abjuration" /><input type="button" id="divination" value="Divination/Obfuscation" /><input type="button" id="invocation" value="Invocation/Revocation" />');
	});
	
$(document).on('click', '#conjuration', function(){
	var c = confirm("The school of Conjuration and Abjurations.\nMagicks devoted to the physical forces.\n\nSpells:\n  Shield\n  Force\n  Restore Self\n  Decay Bonds\n  Blinding Light\n  Continual Darkness");
	if(c == true)
	{
		player._school = 1;
		$("#conjuration").remove();
		$("#divination").remove();
		$("#invocation").remove();
		$("#lower_btns").append('<input type="button" id="continue_intro" value="Continue"/>');
	}
	else
	{
	}
});

$(document).on('click', '#divination', function(){
	var c = confirm("The school of Divination and Obfuscation:\nMagicks devoted to perception and the mind.\n\nSpells:\n  Obscure Mist\n  Read Intent\n  Mirror Image\n  Mind Force\n  Feign Death\n  Glamour of Power");
	if(c == true)
	{
		player._school = 2;
		$("#conjuration").remove();
		$("#divination").remove();
		$("#invocation").remove();
		$("#lower_btns").append('<input type="button" id="continue_intro" value="Continue"/>');
	}
	else
	{
	}
});

$(document).on('click', '#invocation', function(){
	var c = confirm("The school of Invocation and Revocation:\nMagicks devoted to manipulating the attributes of objects.\n\nSpells:\n  Restore Strength\n  Hasten\n  Stoneskin\n  Magic Blight\n  Ennervate\n  Drain");
	if(c == true)
	{
		player._school = 3;
		$("#conjuration").remove();
		$("#divination").remove();
		$("#invocation").remove();
		$("#lower_btns").append('<input type="button" id="continue_intro" value="Continue"/>');
	}
	else
	{
	}
});	

	$(document).on('click', '#continue_intro', function(){
		buttonClicks++;
		
		switch(buttonClicks)
		{
			case 1:
			{
				playMusic(".\assets\firelink_shrine.mp3");
				$('#output').val($('#output').val()+'\n\nYou find yourself in a well kept study, warmed by the gentle flickering of a fireplace. Before you sits a man in a high backed chair, the very same that asked for your name.');
				AutoScroll();
				break;
			}
			case 2:
			{
				$('#output').val($('#output').val()+'\n\nDespite your best efforts you cannot recall exactly how you arrived here. There is the distinct memory of joining your peers, to stand before the Masters of the Magick School of Gamiland.');
				AutoScroll();
				break;
			}
			case 3:
			{
				$('#output').val($('#output').val()+'\n\nBut beyond that, nothing. Before you were there, and now you are here, compelled to answer this strange man.');
				AutoScroll();
				break;
			}
			case 4:
			{
				$('#output').val($('#output').val()+'\n\n"Do not displace thine fear in me Apprentice '+player._name+'", the man says, "I am the Wizard Astra. Long have I lingered here, with naught but thought for company. I bear thee no ill will."');
				AutoScroll();
				break;
			}
			case 4:
			{
				$('#output').val($('#output').val()+'\n\n"Do not displace thine fear in me Apprentice '+player._name+'", the man says.\n"I am the Wizard Astra. Long have I lingered here, with naught but thought for company. I bear thee no ill will."');
				AutoScroll();
				break;
			}
			case 4:
			{
				$('#output').val($('#output').val()+'\n\n"Do not displace thine fear in me Apprentice '+player._name+'", the man says.\n"I am the Wizard Astra. Long have I lingered here, with naught but thought for company. I bear thee no ill will."');
				AutoScroll();
				break;
			}
			case 5:
			{
				$('#output').val($('#output').val()+'\n\n"How you have come here is beyond mine knowing, but I am glad for it. Here I have lingered, trapped, in this place that is with and without time. Your arrival here bestows upon me a chance to escape."');
				AutoScroll();
				break;
			}
			case 6:
			{
				$('#output').val($('#output').val()+'\n\n"Attend, my attentions are the only reason this place has not succumbed to time, and this chair mine only defense against the very same. I cannot leave it"');
				AutoScroll();
				break;
			}
			case 7:
			{
				$('#output').val($('#output').val()+'\n\n"Consider that you can Apprentice. Somewhere in this archive is a stone that appears most unremarkable. This stone was taken from me long ago, when this place first fell to ruin."');
				AutoScroll();
				break;
			}
			case 8:
			{
				$('#output').val($('#output').val()+'\n\n"That stone was mine catalyst for preserving this place, and the reason that I linger. You see, long ago I was a student at the Gamiland School, and I would not see it destroyed, not even for mine freedom."');
				AutoScroll();
				break;
			}
			case 9:
			{
				$('#output').val($('#output').val()+'\n\n"Upon the table lay a parchment of distinct quality. Thine path might be made clearer with its use. Take it and find the stone. I will linger here, in hope."\n');
				AutoScroll();
				$('#continue_intro').remove();
				gamePlay();
				break;
			}	
			default:
			{
				break;
			}
		}
	});

		   
//function that begins gameplay
function gamePlay(){
	
	//sealed archive UI
	$('#main_body').prepend('<form id= "form1" action = ""><div id="button_container" style="text-align: center"><input type="button" id="north" value="North" /><input type="button" id="south" value="South" /><input type="button" id="east" value="East" /><input type="button" id="west" value="West" /><input type="button" id="open_map" value= "Open Map" /><input type="button" id="open_inventory" value="Open Inventory" /></div><br /></form><div id="enemy_container" style="position:relative; width:382px; height:293px; margin:0 auto;"><img id="background_img" src="background_test.png" style="position: absolute; top: 30; left: 150;"/></div><form id="form2" action="" style="text-align: center"></form>');
	
    //row 1
    worldMap[0][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][1] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][2] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][3] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][4] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][5] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][6] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][7] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][8] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][9] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][10] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][11] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][12] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][13] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][14] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[0][15] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][16] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][17] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][18] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][19] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][20] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][21] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][22] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][23] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][24] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][25] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][26] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][27] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[0][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);

    //row 2
    worldMap[1][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[1][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
    worldMap[1][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
    worldMap[1][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
    worldMap[1][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
    worldMap[1][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
    worldMap[1][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
    worldMap[1][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
    worldMap[1][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[1][9] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,1,0);
    worldMap[1][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[1][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[1][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[1][13] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[1][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[1][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][22] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",0,0,0);
	worldMap[1][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[1][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[1][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[1][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[1][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);

    //row 3
    worldMap[2][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[2][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][9] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][13] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][21] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[2][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[2][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 4
	worldMap[3][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[3][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[3][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[3][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 5
	worldMap[4][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[4][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[4][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[4][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 6
	worldMap[5][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[5][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[5][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[5][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 7
	worldMap[6][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[6][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][21] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[6][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[6][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 8
	worldMap[7][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[7][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[7][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[7][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 9
	worldMap[8][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[8][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][2] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][3] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][4] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][21] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[8][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[8][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 10
	worldMap[9][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[9][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][2] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][3] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][4] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[9][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[9][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 11
	worldMap[10][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[10][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][2] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][3] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][4] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][13] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[10][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[10][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 12
	worldMap[11][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[11][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][2] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][3] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][4] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[11][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[11][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 13
	worldMap[12][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[12][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][3] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[12][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[12][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 14
	worldMap[13][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[13][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][3] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[13][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[13][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 15
	worldMap[14][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[14][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][3] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][4] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][5] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][6] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][7] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][9] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][13] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][21] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[14][27] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[14][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 16
	worldMap[15][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[15][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[15][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[15][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 17
	worldMap[16][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[16][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][9] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][13] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[16][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[16][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 18
	worldMap[17][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[17][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][16] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[17][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[17][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 19
	worldMap[18][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[18][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][16] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[18][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[18][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 20
	worldMap[19][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[19][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][6] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][7] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][23] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[19][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[19][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 21
	worldMap[20][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[20][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][5] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][6] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][7] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][9] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][21] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[20][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[20][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 22
	worldMap[21][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[21][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][5] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][6] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][7] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][9] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][10] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][11] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][12] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][13] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][16] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][19] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][20] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][21] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[21][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[21][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 23
	worldMap[22][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[22][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][5] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][6] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][7] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][9] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][21] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][24] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][25] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][26] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[22][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[22][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 24
	worldMap[23][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[23][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][6] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][7] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][8] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[23][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[23][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 25
	worldMap[24][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[24][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][18] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[24][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[24][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 26
	worldMap[25][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[25][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][15] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][16] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[25][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[25][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 27
	worldMap[26][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[26][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][16] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[26][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[26][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 28
	worldMap[27][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[27][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][14] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][16] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[27][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[27][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 29
	worldMap[28][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[28][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][13] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][16] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][17] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[28][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[28][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 30
	worldMap[29][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[29][1] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][2] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][3] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][4] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][5] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][6] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][7] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][8] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][9] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][10] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][11] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][12] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][13] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][14] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][15] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][16] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][17] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][18] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][19] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][20] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][21] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][22] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][23] =  new MapTile(1,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][24] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][25] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][26] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
	worldMap[29][27] =  new MapTile(0,'http://i.imgur.com/rdGSnVp.jpg',"",1,0,0);
    worldMap[29][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 31
	worldMap[30][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][1] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][2] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][3] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][4] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][5] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][6] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][7] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][8] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][9] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][10] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][11] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][12] =  new MapTile(1,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][13] =  new MapTile(1,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][14] =  new MapTile(1,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][15] =  new MapTile(1,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][16] =  new MapTile(1,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][17] =  new MapTile(1,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][18] =  new MapTile(1,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][19] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][20] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][21] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][22] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][23] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][24] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][25] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][26] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[30][27] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[30][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	
	//row 32
	worldMap[31][0] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][1] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][2] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][3] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][4] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][5] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][6] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][7] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][8] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][9] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][10] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][11] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][12] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][13] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][14] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][15] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][16] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][17] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][18] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][19] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][20] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][21] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][22] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][23] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][24] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][25] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][26] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	worldMap[31][27] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
    worldMap[31][28] =  new MapTile(0,'http://i.imgur.com/XFV93fC.jpg',"",0,0,0);
	

    //row worldmap 1
    worldMapImg[0][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][14].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[0][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][27].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[0][28].source =  'http://i.imgur.com/XFV93fC.jpg';

    //row worldmap 2
    worldMapImg[1][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[1][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[1][28].source =  'http://i.imgur.com/XFV93fC.jpg';

    //row worldmap 3
    worldMapImg[2][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][11].source =  'http://i.imgur.com/Z167bSw.gif';
    worldMapImg[2][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[2][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[2][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 4
	worldMapImg[3][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[3][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[3][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 5
	worldMapImg[4][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[4][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[4][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 6
	worldMapImg[5][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[5][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[5][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 7
	worldMapImg[6][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[6][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[6][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 8
	worldMapImg[7][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[7][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[7][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 9
	worldMapImg[8][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[8][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[8][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 10
	worldMapImg[9][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[9][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[9][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 11
	worldMapImg[10][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[10][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[10][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 12
	worldMapImg[11][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[11][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[11][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 13
	worldMapImg[12][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[12][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[12][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 14
	worldMapImg[13][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[13][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[13][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 15
	worldMapImg[14][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[14][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[14][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 16
	worldMapImg[15][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[15][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[15][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 17
	worldMapImg[16][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[16][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[16][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 18
	worldMapImg[17][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[17][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[17][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 19
	worldMapImg[18][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[18][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[18][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 20
	worldMapImg[19][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[19][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[19][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 21
	worldMapImg[20][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[20][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[20][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 22
	worldMapImg[21][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[21][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[21][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 23
	worldMapImg[22][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[22][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[22][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 24
	worldMapImg[23][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[23][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[23][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 25
	worldMapImg[24][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[24][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[24][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 26
	worldMapImg[25][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[25][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[25][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 27
	worldMapImg[26][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[26][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[26][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 28
	worldMapImg[27][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[27][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[27][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 29
	worldMapImg[28][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[28][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[28][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 30
	worldMapImg[29][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[29][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[29][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 31
	worldMapImg[30][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[30][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[30][28].source =  'http://i.imgur.com/XFV93fC.jpg';
	
	//row worldmap 32
	worldMapImg[31][0].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][1].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][2].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][3].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][4].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][5].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][6].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][7].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][8].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][9].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][10].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][11].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][12].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][13].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][14].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][15].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][16].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][17].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][18].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][19].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][20].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][21].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][22].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][23].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][24].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][25].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][26].source =  'http://i.imgur.com/XFV93fC.jpg';
	worldMapImg[31][27].source =  'http://i.imgur.com/XFV93fC.jpg';
    worldMapImg[31][28].source =  'http://i.imgur.com/XFV93fC.jpg';
}

//variables that store player position
var playerPosX = 2;
var playerPosY = 11;

/*movement functions
these functions facilitate player "movement" through the worldMap array */
//Event listener for the north button
$(document).on('click', '#north', function(){
	playerPosX--;
    if(worldMap[playerPosX][playerPosY].passable == 0){
        playerPosX++;
		worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
        document.getElementById('output').value += "You cannot move there.\n";
		AutoScroll();
    }
    else{
		worldMapImg[playerPosX+1][playerPosY].source = 'http://i.imgur.com/rdGSnVp.jpg';
		worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
        document.getElementById('output').value += "You have moved north.\n";
		AutoScroll();
		Encounter(bossFight);
    }
});

//Event listener for the south button
$(document).on('click', '#south', function(){
    playerPosX++;
    if(worldMap[playerPosX][playerPosY].passable == 0){
        playerPosX--;
		worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
        document.getElementById('output').value += "You cannot move there.\n";
		AutoScroll();
    }
    else{
		worldMapImg[playerPosX-1][playerPosY].source = 'http://i.imgur.com/rdGSnVp.jpg';
		worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
        document.getElementById('output').value += "You have moved south.\n";
		AutoScroll();
		Encounter(bossFight);
    }
});

//Event listener for the east button
$(document).on('click', '#east', function(){
    playerPosY++;
    if(worldMap[playerPosX][playerPosY].passable == 0){
        playerPosY--;
        worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
        document.getElementById('output').value += "You cannot move there.\n";
		AutoScroll();
    }
    else{
		if(worldMap[playerPosX][playerPosY].treasure == 1){
			treasure();
		}
		worldMapImg[playerPosX][playerPosY-1].source = 'http://i.imgur.com/rdGSnVp.jpg';
		worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
        document.getElementById('output').value += "You have moved east.\n";
		AutoScroll();
		Encounter(bossFight);
    }
});

//Event listener for the west button
$(document).on('click', '#west', function(){
    playerPosY--;
    if(worldMap[playerPosX][playerPosY].passable == 0){
        playerPosY++;
        worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
        document.getElementById('output').value += "You cannot move there.\n";
		AutoScroll();
    }
    else{
        worldMapImg[playerPosX][playerPosY+1].source = 'http://i.imgur.com/rdGSnVp.jpg';
		worldMapImg[playerPosX][playerPosY].source = 'http://i.imgur.com/Z167bSw.gif';
		document.getElementById('output').value += "You have moved west.\n";
		AutoScroll();
		Encounter(bossFight);
	}
});
// end of movement functions

//draw worldMapImg array - open map button to player
$(document).on('click', '#open_map', function(){
	var mapWindow = window.open("","","width=740,height=885");
	//mapWindow.document.head.innerHTML = "<title>Map</title><script src='map.js'></script>";
	mapWindow.document.body.innerHTML = "<div id='map_container'></div>";
    var table = mapWindow.document.createElement("table");
    mapWindow.document.getElementById("map_container").appendChild(table);
	for (i = 0; i < worldMapImg.length; ++i) {
		entry = worldMapImg[i];
		for (j = 0; j < entry.length; ++j)
		{
			var row = mapWindow.document.createElement("tr"),
			photo = mapWindow.document.createElement("td"),
			img = new Image();
			img.src = worldMapImg[i][j].source;
			photo.appendChild(img);
			table.appendChild(photo);
		}
		table.appendChild(row);
		}
	});