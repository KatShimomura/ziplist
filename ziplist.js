const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(list1, list2) {
  const mergedLists = [];
  for (let i = 0; i < list1.length; i++) {
    mergedLists.push(list1[i], list2[i]);
  }
  return mergedLists;
}
console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  let mergeList = [];
  let flattenList = [];
  mergeList = _.zip(list1, list2);
  flattenList = _.flatten(mergeList);
  return flattenList;
}
console.log(zipListTheSimpleWay(test1, test2));
