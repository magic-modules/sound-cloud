# ${title}

this is the
[@magic-modules](https://github.com/magic-modules)
SoundCloud component.

${description}

<GitBadges>magic-modules/sound-cloud</GitBadges>

## installation

`npm install @magic-modules/sound-cloud`

## usage

in a page or module View

`<SoundCloud>599883213</SoundCloud>`

renders

<SoundCloud>599883213</SoundCloud>

### tracks
the track type shows a single track

`<SoundCloud type="track" id="599883213"></SoundCloud>`

renders

<SoundCloud type="track" id="599883213"></SoundCloud>

### #usage- playlists

the playlists type shows a playlist of songs

`<SoundCloud type="playlist" id="641153793"></SoundCloud>`

renders

<SoundCloud type="playlist" id="641153793"></SoundCloud>

### #usage- users

the users type shows a user profile.

`<SoundCloud type="user" id="151832569"></SoundCloud>`

renders

<SoundCloud type="user" id="151832569"></SoundCloud>


## #usage- default arguments

@magic tries to keep the default arguments for soundcloud sane.

```
&lt;SoundCloud
  visual        ="true"         // set to false to get a smaller view with 166px height
  show_teaser   ="false"        // show an overlay with soundcloud ads
  show_reposts  ="false"        // show reposts for this track/user/playlist
  show_user     ="true"         // show the user that uploaded the track or playlist
  show_comments ="false"        // show comments people left
  auto_play     ="false"        // auto play video (will not work in many browsers anyways)
  hide_related  ="true"         // hide artists that might match or not
  height        ="300" || "166" // default height for visual true || false
  width         ="100%"
  scrolling     ="no"
  frameborder   ="no">
&lt;SoundCloud>
}
```

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/sound-cloud/tree/master/example)
and gets built and published to github using [@magic/core](https://github.com/magic/core)
