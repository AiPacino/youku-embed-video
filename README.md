# youku-embed-video
React component to embed Youku video on web page.

## Usage
Simply install and import component like below code:

`yarn add youku-embed-video`

```js
import React from "react";
import ReactDOM from "react-dom";
import YoukuEmbedVideo from "youku-embed-video";

ReactDOM.render(<YoukuEmbedVideo videoId="XNDg1NTEyMjA=" suggestions={false} />, document.getElementById("app"));
```

Above code will load a Youku video from [LEGO® Red Can Break It Down](http://v.youku.com/v_show/id_XNDg1NTEyMjA=.html?spm=a2h1n.8251843.playList.5~5~A&f=2544877&o=1#paction).

### Properties
Props are same as Youku options for embedding a video.

#### `videoId`
Youku video ID parameter, it's `XNDg1NTEyMjA=` in this Youku [link](http://v.youku.com/v_show/id_XNDg1NTEyMjA=.html?spm=a2h1n.8251843.playList.5~5~A&f=2544877&o=1#paction). `Required`.
#### `autoplay`
Make an embedded video play automatically. Default: `false`
#### `suggestions`
Show suggested videos when the video finishes. Default: `true`
#### `controls`
Show player controls. Default: `true`
#### `showInfo`
Show video title and player actions. Default: `true`
#### `enhancedPrivacy`
Enable privacy-enhanced mode. Default: `false`
#### `width`
Player width in px. Default: `560`
#### `height`
Player height in px. Default: `315`
#### `size`
Pre-defined video sizes same as Youku options. `size` will override `width` and `height` values. Available size values are `small`, `medium`, `large`, and `largest`.

## Examples
1. Run `yarn start` from `examples` folder
2. Visit `http://localhost:8080`

## TO DO
- ~~Predefined video sizes~~
- Delay load video

Copyright (c) 2016 Tien Do

MIT License
