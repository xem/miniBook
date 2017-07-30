winstonewert's solution
============================

This solution compresses the text in a png file and reads out the pixel data to get the data back. This naturally isn't going to be the best compression since the text isn't actually an image. However, it means that I don't have to add bytes to my program in order to implement the compression scheme.


Details
-------

Firstly, I packed all the bytes of shakespeare into a png image using python

    from PIL import Image
    import numpy

    text = open('../example/index.html').read()[6:] # drop <xmp>
    raw = numpy.array(list(map(ord, text))).astype(numpy.uint8).reshape(1937,2749)
    image = Image.fromarray(raw)
    image.save("x.png")

Secondly, I used pngcrush to further optimize the image.

In the actual web page, read the pixels to get the data back:

    var canvas = d.createElement("canvas");
    canvas.width = 2749;
    canvas.height = 1937;
    image = new Image();
    image.onload = function(){
        var context = context.getContext("2d");
        context.drawImage(image,0,0);
        var data = t.getImageData(0,0,c.width,c.height).data;
        document.write("<xmp>");
        for(var index=0; index<f.length; index += 4) {
            document.write(String.fromCharCode(f[e]));
        }
    };
    image.src = "x.png";

Minify the above and you have my solution.
