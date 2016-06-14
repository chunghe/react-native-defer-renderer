
## react-native-defer-renderer

This library helps implement lazy rendering for react-native.

## install
`npm install react-native-defer-renderer --save`

## usage

Let's take news article page for example - a long `<Article />` component with `<Comment />` component at the bottom. It's efficient only to render `<Comment />` component if the user scroll close to the `<Comment />` component

Before:

```javascript
<ScrollView>
  <Article />
  <Comment />
</ScrollView>
```

After:
```javascript
<ScrollProvider>
	<Article />
	<ScrollReceiver name="ScrollReceiver" threshold={100}>
		<Comment />
	</ScrollReceiver>
</ScrollProvider>
```

The library provides two components:

`<ScrollProvider />` 
  - will return a react-native `<ScrollView />` with all the props provided
  - main purpose is to provide scroll position from `<ScrollView />` to the child `<ScrollReceiver />` component

`<ScrollReceiver />` 
  - warp the component to be lazy rendered
  - will receive scroll position from `<ScrollProvider />` as props
  - when props update, it will decide to render the wrapped component if close enough.

## example
please check the example folder

$ `cd example`

$ `npm install`

$ `react-native run-ios` or  `react-native run-android`

## demo

ios

<img width="433" height="847" src="https://raw.githubusercontent.com/chunghe/react-native-defer-renderer/master/example/example-ios.gif" />


android

<img width="422" height="784" src="https://raw.githubusercontent.com/chunghe/react-native-defer-renderer/master/example/example-android.gif" />
