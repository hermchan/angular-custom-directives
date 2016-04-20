angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard (){
  var directive = {
    scope: {
      question: '@'
    },
    restrict: 'E',
    replace: true,
    templateURL: 'templates/cardDirective.html'
  };
  return directive;
}
