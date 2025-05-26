// // Prototype function
// function convertColor(r, g, b) {
//     const color = {}; // Membuat objek terlebih dahulu

//     color.r = r;
//     color.g = g;
//     color.b = b;

//     // Baru buat method
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     return color;
// }


// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// Class 
class Mobil 
{
    constructor(merek, tahun)
    {
        this.merek = merek;
        this.tahun = tahun;
    }
}

class Color 
{
    constructor(r, g, b, name)
    {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    colorName()
    {
        console.log('The color name is' + this.name);
    }

    Inner_rgb ()
    {
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb ()
    {
        return `rgb(${this.Inner_rgb()})`;
    }

    rgba (a = 1.0)
    {
        return `rgba(${this.Inner_rgb()}, ${a})`
    }

    hex ()
    {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}