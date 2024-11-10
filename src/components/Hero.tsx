Key Updates:
Random Color Change for Heading and Subheading:

Each time the text is typed (i.e., each cycle of Typed.js), the colors for the heading and subheading are changed randomly by calling setHeadingColor and setSubheadingColor in the onStart and onComplete callbacks of Typed.js.
getRandomColor Function:

Ensures that the new color is different from the previous color, preventing consecutive color duplication.
Color Application:

The style property is used to dynamically apply the random colors to both the heading and subheading during typing.
Expected Behavior:
Heading and Subheading:
The colors of the heading and subheading will change randomly every time their respective text is typed.
Button and Arrow:
As before, their colors change every second, and the button stops changing color when hovered.