# React Native FlatList Performance Issue

This repository demonstrates a common performance issue in React Native applications when using FlatList with large datasets. The issue is caused by inefficient data handling which leads to the entire FlatList re-rendering upon data updates, causing performance problems and crashes.

## Problem
The provided `bug.js` file contains a simple FlatList implementation with a large initial dataset. Adding new items results in significant performance degradation. 

## Solution
The `bugSolution.js` demonstrates an optimized approach utilizing the `keyExtractor` prop and potentially `getItemLayout` (not shown here, but advisable for optimal performance) for significant performance improvements.

## How to reproduce
1. Clone this repository.
2. Run `npm install`
3. Run `npx react-native run-android` (or `npx react-native run-ios`).
4. Observe the performance when adding new items. The app may become unresponsive or crash.

## Further Reading
For more information about optimizing FlatList performance in React Native, refer to the official React Native documentation and community resources.