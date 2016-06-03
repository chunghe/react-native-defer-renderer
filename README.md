
## react-native-defer-renderer


```javascript
<ScrollView>
  <Article />
  <Comment />
</ScrollView>
```


```javascript
<ScrollProvider>
	<Article />
	<ScrollReceiver name="ScrollReceiver" threshold={100}>
		<Comment />
	</ScrollReceiver>
</ScrollProvider>
```

## install
`npm install react-native-defer-renderer --save`

## demo
please check the example folder

<img width="433" height="847" src="https://raw.githubusercontent.com/chunghe/react-native-defer-renderer/master/example/example.gif" />
