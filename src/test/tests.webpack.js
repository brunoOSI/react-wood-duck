var testsContext = require.context('./', true, /tests$/);
testsContext.keys().forEach(testsContext);

var componentContext = require.context('././', true, /\*\.js$/);
componentContext.keys().forEach(componentContext);
