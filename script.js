let W = window.innerWidth;
let H = window.innerHeight;
let arr1 = [];
let arr2 = [];
let num_squares = 100;
let square_size_x = W/100;
let square_size_y = H/100;
let img1;
let img2;
let c1;
let c;


function preload() {
	// source picture
    img1 = loadImage('sailor_moon.jpeg');
	// target picture
    img2 = loadImage('heart_hands.jpeg');	
}

function setup() {
	image(img1, 0, 0);
	img1.resize(W, H);
	img2.resize(W, H);
    square_size_x = int(square_size_x);
    square_size_y = int(square_size_y);
    let index1 = 0;
    for (let i = 0; i < W; i+=square_size_x) {
        for (let j = 0; j < H; j+=square_size_y) {
            c1 = img1.get(i, j);
            arr1[index1] = new Cell(i, j, square_size_x, square_size_y, c1[0], c1[1], c1[2]);
            index1++;
        }
    }
    let index2 = 0;
    for (let i = 0; i < W; i+=square_size_x) {
        for (let j = 0; j < H; j+=square_size_y) {
            c2 = img2.get(i, j);
            arr2[index2] = new Cell(i, j, square_size_x, square_size_y, c2[0], c2[1], c2[2]);
            index2++;
        }
    }
    c = createCanvas(W, H);
	createCanvas(W, H);
    background(0);
    //import a mosaic 
    //instead of squares with random position and color, make it the squares from the positions and colors of the tiles of the mosaic
    for (let k = 0; k < arr1.length; k++) {
        arr1[k].identify_correspondent(arr2);
    }
}
let FC;
function draw() {
	if (frameCount > 100) {
		noStroke();
		FC = frameCount;
		if (FC == 0) {
			changeSize();
		}
		background(0);
		for (let i = 0; i < arr1.length; i++) {
			arr1[i].identify_correspondent(arr2);
			arr1[i].move();
			arr1[i].show();
		}
	}
}



