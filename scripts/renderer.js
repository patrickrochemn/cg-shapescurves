/*

Slides:
    -Slide 0: Rectangle            [x]
    -Slide 1: Circle               [x]
    -Slide 2: Bezier curve         [x]
    -Slide 3: Draw your name       [x]

User controlled Options:
    -Number of sections to divide circles/curves into
        -Circle            [x]
        -Bezier curve      [x]
        -Draw your name    [x]
    -Ability to show / hide points used in drawing routines
        -Rectangle            [x]
        -Circle               [x]
        -Bezier curve         [x]
        -Draw your name       [x]

*/

class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }

    // ctx:          canvas context
    drawSlide0(ctx) {
        // Rectangle
        this.drawRectangle({x:100, y:100}, {x:700, y:500}, [0, 0, 255, 255], ctx);
    }

    // ctx:          canvas context
    drawSlide1(ctx) {
        // Draw Circle
        this.drawCircle(({x:400, y:300}), 200, [0, 0, 255, 255], ctx);
    }

    // ctx:          canvas context
    drawSlide2(ctx) {
        // Bezier Curve
        this.drawBezierCurve({x:100, y:100}, {x:200, y:300}, {x:400, y:100}, {x:300, y:400}, [255, 0, 0, 255], ctx);
    }

    // ctx:          canvas context
    drawSlide3(ctx) {
        // Name

        // P
        this.drawRectangle({x:50, y:250}, {x:50, y:350}, [255, 0, 0, 255], ctx);
        this.drawBezierCurve({x:50, y: 300}, {x:100, y:300}, {x:100, y:350}, {x:50, y:350}, [0, 0, 255, 255], ctx);

        // A
        this.drawLine({x:100, y:250}, {x:125, y:350}, [0, 255, 0, 255], ctx);
        this.drawLine({x:125, y:350}, {x:150, y:250}, [0, 255, 0, 255], ctx);
        this.drawLine({x:112, y:300}, {x:137, y:300}, [0, 255, 0, 255], ctx);

        // T
        this.drawLine({x:185, y:250}, {x:185, y:350}, [0, 255, 0, 255], ctx);
        this.drawLine({x:150, y:350}, {x:220, y:350}, [0, 255, 0, 255], ctx);

        // R
        this.drawLine({x:245, y:250}, {x:245, y:330}, [0, 255, 0, 255], ctx);
        this.drawCircle({x:270, y:330}, 25, [255, 0, 0, 255], ctx);
        this.drawLine({x:270, y:305}, {x:300, y:250}, [0, 255, 0, 255], ctx);

        // I
        this.drawLine({x:325, y:350}, {x:385, y:350}, [0, 255, 0, 255], ctx);
        this.drawLine({x:355, y:250}, {x:355, y:350}, [0, 255, 0, 255], ctx);
        this.drawLine({x:325, y:250}, {x:385, y:250}, [0, 255, 0, 255], ctx);

        // C
        this.drawBezierCurve({x:450, y:250}, {x:400, y:250}, {x:400, y:350}, {x:450, y:350}, [0, 0, 255, 255], ctx);

        // K
        this.drawLine({x:490, y:250}, {x:490, y:350}, [0, 255, 0, 255], ctx);
        this.drawLine({x:490, y:300}, {x:520, y:250}, [0, 255, 0, 255], ctx);
        this.drawLine({x:490, y:300}, {x:520, y:350}, [0, 255, 0, 255], ctx);

        // show points from lines
        if(this.show_points) {
            // P
            // handled by rectangle and bezier curve functions

            // A
            this.highlightPoint({x:100, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:125, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:125, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:150, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:112, y:300}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:137, y:300}, [0, 255, 255, 255], ctx);
            //T
            this.highlightPoint({x:185, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:185, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:150, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:220, y:350}, [0, 255, 255, 255], ctx);
            // R
            this.highlightPoint({x:245, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:245, y:330}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:270, y:305}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:300, y:250}, [0, 255, 255, 255], ctx);
            // I
            this.highlightPoint({x:325, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:385, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:355, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:355, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:325, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:385, y:250}, [0, 255, 255, 255], ctx);
            // C
            // handled by bezier curve function

            // K
            this.highlightPoint({x:490, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:490, y:350}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:490, y:300}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:520, y:250}, [0, 255, 255, 255], ctx);
            this.highlightPoint({x:520, y:350}, [0, 255, 255, 255], ctx);
        }
    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        var left_top = ({x:left_bottom.x, y:right_top.y});
        var right_bottom = ({x:right_top.x, y:left_bottom.y});

        // vertices: (x0, y0), (x0, y1), (x1, y1), (x1, y0)
        // lines: [(x0, y0), (x0, y1)], [(x0, y1), (x1, y1)], [(x1, y1), (x1, y0)], [(x0, y0), (x1, y0)]
        //                  left                top                     right               bottom
        this.drawLine(left_bottom, left_top, [0, 255, 0, 255], ctx);
        this.drawLine(left_top, right_top,[0, 255, 0, 255], ctx);
        this.drawLine(right_bottom, right_top,[0, 255, 0, 255], ctx);
        this.drawLine(left_bottom, right_bottom,[0, 255, 0, 255], ctx);
        if(this.show_points) {

            // bottom left
            this.highlightPoint(left_bottom, [0, 0, 255, 255], ctx);

            // top left
            this.highlightPoint(left_top, [0, 0, 255, 255], ctx);
            

            // top right
            this.highlightPoint(right_top, [0, 0, 255, 255], ctx);

            // bottom right
            this.highlightPoint(right_bottom, [0, 0, 255, 255], ctx);
        }
    }

    // center:       object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    highlightPoint(center, color, ctx) {
        // left
        this.drawLine({x:center.x - 5, y:center.y - 5}, {x:center.x - 5, y:center.y + 5}, color, ctx);
        // top
        this.drawLine({x:center.x - 5, y:center.y + 5}, {x:center.x + 5, y:center.y + 5}, color, ctx);
        // right
        this.drawLine({x:center.x + 5, y:center.y + 5}, {x:center.x + 5, y:center.y - 5}, color, ctx);
        // bottom
        this.drawLine({x:center.x - 5, y:center.y - 5}, {x:center.x + 5, y:center.y - 5}, color, ctx);
    }


    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
        var numSides = this.num_curve_sections; // number of sides in polygon
        var interiorAngle = 2 * Math.PI/numSides; // interior angle of polygon
        var currentAngle = 0;
        var xCoords = []; // array of x coordinates
        var yCoords = []; // array of y coordinates
        var coords = []; // array of coordinate pairs
        
        // loop through and calculate the coordinates of the polygon based on the number of sides
        for(let i = 0; i <= numSides; i++) {
            xCoords[i] = radius * Math.cos(currentAngle) + center.x;
            yCoords[i] = radius * Math.sin(currentAngle) + center.y;
            var xCoord = radius * Math.cos(currentAngle) + center.x;
            var yCoord = radius * Math.sin(currentAngle) + center.y;
            coords[i] = ({x:xCoord, y:yCoord});
            currentAngle = currentAngle + interiorAngle;
        }
        // draw lines between all the coordinates going around the circle
        for(var i = 0; i < coords.length - 1; i++) {
            this.drawLine(coords[i], coords[i+1], color, ctx);
        }

        // highlight points if selected
        if(this.show_points) {
            for(let i = 0; i < coords.length - 1; i++) { // coords.length - 1 stops first point from being included twice
                this.highlightPoint(coords[i], [0, 0, 0, 255], ctx);
            }
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        // endpoints: pt0 and pt3
        // control points: pt1 and pt2
        // paramaterize such that t=0.0 is starting endpoint and t=1.0 is the ending endpoint
        var sections = this.num_curve_sections;
        var coords = [];
        var t = 0.0;

        for(let i = 0; i <= sections; i++) {
            var xCoord = (1 - t)**3 * pt0.x + 3 * (1 - t)**2 * t * pt1.x + 3 * (1 - t) * t**2 * pt2.x + t**3 * pt3.x;
            var yCoord = (1 - t)**3 * pt0.y + 3 * (1 - t)**2 * t * pt1.y + 3 * (1 - t) * t**2 * pt2.y + t**3 * pt3.y;
            coords[i] = ({x:xCoord, y:yCoord});
            t = t + (1.0 / sections);
        }

        // draw lines between all the coordinates going around the circle
        for(var i = 0; i < coords.length - 1; i++) {
            this.drawLine(coords[i], coords[i+1], color, ctx);
        }

        if(this.show_points) {
            for(let i = 0; i < coords.length; i++) {
                this.highlightPoint(coords[i], [0, 0, 0, 255], ctx);
            }
            this.highlightPoint(pt1, [255, 0, 0, 255], ctx);
            this.highlightPoint(pt2, [255, 0, 0, 255], ctx);
            //this.drawLine(pt0, pt1, [100, 100, 100, 100], ctx); // draw tangent line to control pt1
            //this.drawLine(pt2, pt3, [100, 100, 100, 100], ctx); // draw tangent line to control pt3
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }
};
