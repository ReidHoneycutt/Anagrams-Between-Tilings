class Cell {
    constructor(x, y, w, h, c0, c1, c2) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c0 = c0;
        this.c1 = c1;
        this.c2 = c2;
        this.correspondent = null;
    }
    move() {
        if (dist(this.x, this.y, this.correspondent.x, this.correspondent.y) < 10) {
            this.x = this.correspondent.x;
            this.y = this.correspondent.y;
        } else {
            let k = .01; 
            this.x += (this.correspondent.x - this.x)*k;
            this.y += (this.correspondent.y - this.y)*k;
            k+=.001;
        }
    }
	// finds a minimum distance between color values
    identify_correspondent(a2) {
        let closest = null;
        let min = 10000000;
        let d;
        for (let i = 0; i < a2.length; i++) {
            d = dist(this.c0, this.c1, this.c2, a2[i].c0, a2[i].c1, a2[i].c2);
            if (d < min) {
                min = d;
                closest = a2[i];
            }
        }
        if (closest == null) {
            closest = new Cell(W/3, H/4, 5, 7, 0, 0);
        } else {
            this.correspondent = closest;
            arr2.splice(arr2.indexOf(closest), 1);
        }
        
    }
    show() {
        fill(this.c0, this.c1, this.c2);
        rect(this.x, this.y, this.w, this.h);
    }
}