# grille.css / grille.scss / grille.less

Just a basic template for a simple grid system. You can use it wherever you want.

## Use

This is an example of the structure you need to use :

```
<div class="grille grille2">
	<div>Your content</div>
	<div>Your content</div>
</div>
```

Your columns will be generated with the first children of the element that has the ```.grille``` class.

You can configurate the grid adding a class to that element.

For example : 
* ```.grille2``` 
* ```.grille3```
* ```.grille1-2```
* ```.grille2-1```

## Sass & Less versions

With the scss version, you can set the class name that you want in the ```$grid-name``` variable. It can be ```grille ``` like the examples, ```grid``` for english projects or anything you would like. :)

You can do the same thing with the Less version. You just have to change the ```@grid-name``` variable.
