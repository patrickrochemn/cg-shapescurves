/*

Slides:
    -Slide 0: Rectangle            [x]
    -Slide 1: Circle               []
    -Slide 2: Bezier curve         []
    -Slide 3: Draw your name       []

User controlled Options:
    -Number of sections to divide circles/curves into
        -Circle            []
        -Bezier curve      []
        -Draw your name    []
    -Ability to show / hide points used in drawing routines
        -Rectangle            [x]
        -Circle               []
        -Bezier curve         []
        -Draw your name       []

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
        this.drawRectangle(({x:100, y:100}), ({x:500, y:500}), [0, 0, 255, 255], ctx);
    }

    // ctx:          canvas context
    drawSlide1(ctx) {

    }

    // ctx:          canvas context
    drawSlide2(ctx) {

    }

    // ctx:          canvas context
    drawSlide3(ctx) {

    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        var left_top = ({x:left_bottom.x, y:right_top.y});
        var right_bottom = ({x:right_top.x, y:left_bottom.y});
        /*
        console.log(left_bottom);
        console.log(left_top);
        console.log(right_top);
        console.log(right_bottom);
        */
        // vertices: (x0, y0), (x0, y1), (x1, y1), (x1, y0)
        // lines: [(x0, y0), (x0, y1)], [(x0, y1), (x1, y1)], [(x1, y1), (x1, y0)], [(x0, y0), (x1, y0)]
        //                  left                top                     right               bottom
        this.drawLine(left_bottom, left_top, [0, 255, 0, 255], ctx);
        this.drawLine(left_top, right_top,[0, 255, 0, 255], ctx);
        this.drawLine(right_bottom, right_top,[0, 255, 0, 255], ctx);
        this.drawLine(left_bottom, right_bottom,[0, 255, 0, 255], ctx);
        if(this.show_points) {
            // bottom left

            // left
            this.drawLine({x:left_bottom.x - 5, y:left_bottom.y - 5}, {x:left_bottom.x - 5, y:left_bottom.y + 5}, [0, 0, 255, 255], ctx);
            // top
            this.drawLine({x:left_bottom.x - 5, y:left_bottom.y + 5}, {x:left_bottom.x + 5, y:left_bottom.y + 5}, [0, 0, 255, 255], ctx);
            // right
            this.drawLine({x:left_bottom.x + 5, y:left_bottom.y + 5}, {x:left_bottom.x + 5, y:left_bottom.y - 5}, [0, 0, 255, 255], ctx);
            // bottom
            this.drawLine({x:left_bottom.x - 5, y:left_bottom.y - 5}, {x:left_bottom.x + 5, y:left_bottom.y - 5}, [0, 0, 255, 255], ctx);


            // top left

            // left
            this.drawLine({x:left_top.x - 5, y:left_top.y - 5}, {x:left_top.x - 5, y:left_top.y + 5}, [0, 0, 255, 255], ctx);
            // top
            this.drawLine({x:left_top.x - 5, y:left_top.y + 5}, {x:left_top.x + 5, y:left_top.y + 5}, [0, 0, 255, 255], ctx);
            // right
            this.drawLine({x:left_top.x + 5, y:left_top.y + 5}, {x:left_top.x + 5, y:left_top.y - 5}, [0, 0, 255, 255], ctx);
            // bottom
            this.drawLine({x:left_top.x - 5, y:left_top.y - 5}, {x:left_top.x + 5, y:left_top.y - 5}, [0, 0, 255, 255], ctx);

            // top right

            // left
            this.drawLine({x:right_top.x - 5, y:right_top.y - 5}, {x:right_top.x - 5, y:right_top.y + 5}, [0, 0, 255, 255], ctx);
            // top
            this.drawLine({x:right_top.x - 5, y:right_top.y + 5}, {x:right_top.x + 5, y:right_top.y + 5}, [0, 0, 255, 255], ctx);
            // right
            this.drawLine({x:right_top.x + 5, y:right_top.y + 5}, {x:right_top.x + 5, y:right_top.y - 5}, [0, 0, 255, 255], ctx);
            // bottom
            this.drawLine({x:right_top.x - 5, y:right_top.y - 5}, {x:right_top.x + 5, y:right_top.y - 5}, [0, 0, 255, 255], ctx);

            // bottom right

            // left
            this.drawLine({x:right_bottom.x - 5, y:right_bottom.y - 5}, {x:right_bottom.x - 5, y:right_bottom.y + 5}, [0, 0, 255, 255], ctx);
            // top
            this.drawLine({x:right_bottom.x - 5, y:right_bottom.y + 5}, {x:right_bottom.x + 5, y:right_bottom.y + 5}, [0, 0, 255, 255], ctx);
            // right
            this.drawLine({x:right_bottom.x + 5, y:right_bottom.y + 5}, {x:right_bottom.x + 5, y:right_bottom.y - 5}, [0, 0, 255, 255], ctx);
            // bottom
            this.drawLine({x:right_bottom.x - 5, y:right_bottom.y - 5}, {x:right_bottom.x + 5, y:right_bottom.y - 5}, [0, 0, 255, 255], ctx);
        }
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
        
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        
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
