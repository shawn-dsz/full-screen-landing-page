# css flex box

## purpose
how to make a full screen landing page

##### technologies
- scss
- jade
- gulp
- gulp tasks


use this project is a boilerplate for starting scss projects

using
- autoPrefixer
- clean ```gulp clean```
- publish to surge ```npm run publish```

## usage
```
> npm i
> npm run start

```
this is start a server that listens for changes to the ```dist``` directory.

Now, In a separate window, run
```
> npm run dev
```

this sets up the ```watch``` task to watch for any changes in the ```src``` directory.

Navigate to ```http://localhost:8080```


## reference

[DevTips](https://www.youtube.com/watch?v=hExwnLlj2xk)


## deployment

I have deployed the result of this site using [surge](http://surge.sh) to [css-flexbox.surge.sh](#)

```npm run deploy``` will host the contents of ```dist``` to [css-flexbox.surge.sh](#)
